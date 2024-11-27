function updateView(){
    app.innerHTML = /*HTML*/`
    <div>
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username" onchange="model.input.loginView.username = this.value">
            <input type="password" placeholder="Password" onchange="model.input.loginView.password = this.value">
        </div>
        <div>
            <button onclick="login()">Login</button>
            <button onclick="signup()">Signup</button>
        </div>
    </div>
    `
    }