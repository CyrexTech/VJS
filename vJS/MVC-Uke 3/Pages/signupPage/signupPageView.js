function signupPageView(){
    app.innerHTML = /*HTML*/`
    <div class="inputDivContainerBeforeLoggin">
        <h1>User Registration</h1>
        <input type="text" placeholder="Enter Username" 
            onchange="model.input.signupView.username = this.value"
            onkeyup="if(event.key === 'Enter') registerUser()">
        <input type="text" placeholder="Enter Password" 
            onchange="model.input.signupView.password = this.value"
            onkeyup="if(event.key === 'Enter') registerUser()">
        <input type="text" placeholder="Enter Password Again" 
            onchange="model.input.signupView.rptPassword = this.value"
            onkeyup="if(event.key === 'Enter') registerUser()">
        <input type="text" placeholder="Enter Email" 
            onchange="model.input.signupView.email = this.value"
            onkeyup="if(event.key === 'Enter') registerUser()">
        <button onclick="registerUser()">Signup</button>
    </div>
    `;
}