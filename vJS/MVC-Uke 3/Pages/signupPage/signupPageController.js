function registerUser(){
    let user = model.input.signupView;
    
    if (!user.username || !user.password || !user.rptPassword || !user.email) {
        alert('Alle felt må fylles ut!');
        return;
    }

    if (user.password === user.rptPassword 
        && !getUserByUserName(user.username)
        && user.email.includes("@")
    ) {
        let newUser = {
            id: model.data.users.length + 1,
            username: user.username,
            password: user.password,
            email: user.email,
        }
        model.data.users.push(newUser);
        
        user.username = '';
        user.password = '';
        user.rptPassword = '';
        user.email = '';
        
        alert('Registrering vellykket! Du kan nå logge inn.');
        model.app.currentPage = 'logginPage';
        updateView();
    } else {
        alert('Registrering mislyktes! Sjekk at:\n- Passordene matcher\n- Brukernavnet er ledig\n- E-posten inneholder @');
    }      
}