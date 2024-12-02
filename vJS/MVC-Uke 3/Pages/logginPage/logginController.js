function loggin(){

    //Alert dersom ikke feltene er fylt inn.
    if (!model.input.logginView.username || !model.input.logginView.password) {
        alert('Både brukernavn og passord må fylles ut!');
        return;
    }
    //Sjekker om bruk
    let user = getUserByUserName(model.input.logginView.username);
    if(user && user.password == model.input.logginView.password){
        model.app.currentPage = 'mainPage';
        model.input.logginView.username = '';
        model.input.logginView.password = '';
        model.app.loggedInUser = user;

        updateView();
    }
    //Alert dersom brukernavn eller passord er feil.
    else {
        alert('Feil brukernavn eller passord');
    }
}

function goToSignupPage(){
    model.app.currentPage = "signupPage";
    updateView();
}



// function loggin(){
//     let logginUsernameInput = model.input.logginView.username;
//     let logginPasswordInput = model.input.logginView.password;

//     for (let i = 0; i < model.data.users.length; i++){

//         if (logginUsernameInput === model.data.users[i].username
//             && logginPasswordInput === model.data.users[i].password){

//                 model.app.loggedInUser = model.data.users[i];
//                 logginUsernameInput = "";
//                 logginPasswordInput = "";
//                 model.app.currentPage = "mainPage";
//                 updateView();
//                 return;
//        } 
//     }

// }





    
