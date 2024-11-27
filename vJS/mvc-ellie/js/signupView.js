function updateView(){
    app.innerHTML = /*HTML*/`
    <div>
        <div>
            <h1>Signup</h1>
            <input type="text" placeholder="Username" onchange="model.input.signupView.username = this.value">
            <input type="password" placeholder="Password" onchange="model.input.signupView.password = this.value">
            <input type="password" placeholder="Password" onchange="model.input.signupView.rptPassword = this.value">
            <input type="text" placeholder="Email" onchange="model.input.signupView.email = this.value">
        </div>
        <div>
            <button onclick="proceedSignup()">Signup</button>
            <button onclick="cancelSignup()">Cancel</button>
        </div>
    </div>
    `
}