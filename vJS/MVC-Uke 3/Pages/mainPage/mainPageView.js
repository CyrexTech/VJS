function mainPageView(){
    let user = model.app.loggedInUser;
    
    app.innerHTML = /*HTML*/`
    <div class="inputDivContainerBeforeLoggin">
        <h1>Min Profil</h1>
        <div class="profile-container">
            <img src="${user.avatarUrl || 'https://robohash.org/' + user.username}" 
                alt="Profile Avatar" 
                class="profile-avatar">
            <h2>Velkommen ${user.username}</h2>
            <div class="profile-info">
                <p>E-post: ${user.email}</p>
                <input type="text" 
                    placeholder="Ny avatar URL" 
                    onchange="model.input.mainPage.avatarUrl = this.value">
                <button onclick="updateAvatar()">Oppdater Avatar</button>
            </div>
            <button onclick="logout()">Logg ut</button>
        </div>
    </div>
    `;
}