function logginPageView(){
    //lagt til eventlistener for Enter-tasten
    app.innerHTML = /*HTML*/`
    <div class="inputDivContainerBeforeLoggin">
        <h1>Login</h1>
        <input type="text" placeholder="Username" 
            onchange="model.input.logginView.username = this.value"
            onkeyup="if(event.key === 'Enter') loggin()">
        <input type="password" placeholder="Password" 
            onchange="model.input.logginView.password = this.value"
            onkeyup="if(event.key === 'Enter') loggin()">
        <div>
            <button onclick="loggin()">Login</button>
            <button onclick="goToSignupPage()">Signup</button>
        </div>
    </div>
    `;
}