function dontHaveAnAccount() {
    document.getElementById("dhacc").addEventListener("click", () => {
        document.getElementById("login").style.display = "none";
        document.getElementById("signup").style.display = "block";
        //console.log("Works!");
    })
}

function loginController() {
    document.getElementById("loginbtn").addEventListener("click", () => {
        var username = document.getElementById("username");
        var password = document.getElementById("password");

        localStorage.setItem("username", username.value);
        var authString = username.value + ':' + password.value;//declaring authorization string
        var encodedAuth = btoa(authString);//encoded version of authorization string
        var authHeader = 'Basic ' + encodedAuth;
        //var authHeader=encodedAuth;
        //console.log(authString);
        //console.log(authHeader);
        if (username.value !== '' && password.value !== '') {
            fetch("https://backendvla.onrender.com/auth", {
                method: 'POST',
                credentials: "include",
                headers: {
                    'authorization': authHeader,
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            })
                .then(resp => resp.text())
                .then(data => {
                    ////console.log(data); console.log(btoa(data));/*var token=data*/ //token=data;
                    localStorage.setItem("token", data);
                    if (data === 'null') {
                        alert('Username or password is wrong,please try again');
                    }
                    if (data !== 'null') {
                        location.replace("https://frontendvla.onrender.com/home.html");
                    }
                })
        }
        else {
            alert("Username and password can't be empty")
        }
        username.value = '';
        password.value = '';
    })
}

loginController();
dontHaveAnAccount();