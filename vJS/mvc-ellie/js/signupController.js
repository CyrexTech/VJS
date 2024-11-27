function signup(){
    let signupUserInput = model.input.signupView.username;
    let signupPassInput = model.input.signupView.password;
    let signupRptPassInput = model.input.signupView.rptPassword;
    let signupEmailInput = model.input.signupView.email;

    for (let i = 0; i < model.data.users.length; i++){

            if (signupUserInput === model.data.users[i].username 
            || signupEmailInput === model.data.users[i].email){
                
                model.app.isUserRegistered = model.data.users[i];
                signupUserInput = "";
                signupPassInput = "";
                signupRptPassInput = "";
                signupEmailInput = "";
                loginView();
                return;
            }
        
        }
    }
    