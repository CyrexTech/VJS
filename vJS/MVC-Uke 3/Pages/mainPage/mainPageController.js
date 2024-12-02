function logout(){
    // Nullstiller innlogget bruker
    model.app.loggedInUser = null;
    
    // Nullstiller login-inputfeltene
    model.input.logginView.username = '';
    model.input.logginView.password = '';
    
    // Sender brukeren tilbake til innloggingssiden
    model.app.currentPage = 'logginPage';
    
    // Oppdaterer visningen
    updateView();
}

function updateAvatar(){
    let newAvatarUrl = model.input.mainPage.avatarUrl;
    
    if(!newAvatarUrl){
        alert('Vennligst skriv inn en URL for ny avatar');
        return;
    }

    // Oppdaterer avatar URL for innlogget bruker
    model.app.loggedInUser.avatarUrl = newAvatarUrl;
    
    // Oppdaterer også i hovedlisten over brukere
    let user = getUserByUserName(model.app.loggedInUser.username);
    if(user) {
        user.avatarUrl = newAvatarUrl;
    }
    
    // Nullstiller input
    model.input.mainPage.avatarUrl = '';
    
    // Oppdaterer visningen
    updateView();
    alert('Avatar oppdatert!');
}
