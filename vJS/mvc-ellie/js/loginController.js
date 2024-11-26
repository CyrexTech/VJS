function login(){
    let loginUserInput = model.input.loginView.username;
    let loginPassInput = model.input.loginView.password;

    for (let i = 0; i < model.data.users.length; i++){

            if (loginUserInput === model.data.users[i].username 
            && loginPassInput === model.data.users[i].password){
                
                model.app.loggedInUser = model.data.users[i];
                loginUserInput = "";
                loginPassInput = "";
                mainPageView();
                return;
            }
        
        }
    }