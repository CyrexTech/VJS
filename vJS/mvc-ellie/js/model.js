const app = document.getElementById('app');

const model = {
    app: {
        loggedInUser: null,
        darkMode: true,
    },
    input: {
        loginView: {
            username: "",
            password: "",
        },
        signupView:{
            username: "",
            password: "",
            rptPassword:"",
            email: "",
        },
    },
    data: {
        users: [
            {
                id: "0",
                username: "Cyrex",
                password: "password",
                email: "test@example.com",
            },
            {
                id: "1",
                username: "Amarax",
                password: "password",
                email: "tes@example.com",
            },
        ],
    },
}