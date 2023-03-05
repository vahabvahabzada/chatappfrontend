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
        var cond=false;
        if (username.value !== '' && password.value !== '') {
            fetch("http://localhost:8080/auth", {
                method: 'POST',
                //credentials: "include",
                headers: {
                    //'authorization': authHeader,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "name": username.value, "password": password.value })
            })

            .then(resp=>{console.log(resp);if(resp.ok){return resp.json()}})
            .then(data=>{console.log(data);if(data!==undefined){localStorage.setItem("token",data["accessToken"]);location.replace("http://localhost:5500/home.html")}else{alert("Username or password is wrong!Please try again...")}})
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