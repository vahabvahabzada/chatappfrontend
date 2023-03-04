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
                .then(resp =>resp.json())
                .then(data => {
                    ////console.log(data); console.log(btoa(data));/*var token=data*/ //token=data;
                    console.log(typeof(data));
                    if(typeof(data)!=='undefined'){
                    console.log(data);
                    localStorage.setItem("token", data["accessToken"]);
                    /*if (data["accessToken"] === 'null') {
                        alert('Username or password is wrong,please try again');
                    }*/
                    //if (data["accessToken"] !== 'null') {
                        location.replace("http://localhost:5500/home.html");
                    }
                    /*else{
                        alert('Username or password is wrong,please try again');
                    }*/
                    }

                    /*if(data===undefined){
                        alert('Username or password is wrong,please try again');
                    }*/
                //}
                )
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