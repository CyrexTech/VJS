const app = document.getElementById('app');

const model = {
    app: {
        loggedInUser: null,
        darkMode: true,
        currentPage: "logginPage",
        
    },
    input: {
        logginView: {
            username: "",
            password: "",
        },
        signupView: {
            username: "",
            password: "",
            rptPassword: "",
            email: "",
        },
    },
    data: {
        users: [
            {
                id: 0,
                username: "Cyrex",
                password: "1234",
                email: "test@test.no",
            },
            {
                id: 1,
                username: "test",
                password: "1234",
                email: "bob@test.no",
            },
        ],
    },
}