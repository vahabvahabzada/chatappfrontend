function signupController() {
    document.getElementById("signupbtn").addEventListener("click", () => {
        var username = document.getElementById("usernamesignup");
        var password = document.getElementById("passwordsignup");
        //console.log(username);
        //console.log(password);
        if (username.value !== '' && password.value !== '') {
            if (document.getElementById("passwordsignup").value.length < 8) {
                alert("Password must contain at least 8 characters...");
            }
            else {
                fetch("https://backendvla.onrender.com/signup", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body:"name=" + username.value + "&password=" + password.value
                })
                .then(resp => resp.text())
                .then(data => {
                    //console.log(data);
                    //console.log(typeof(data));
                    //console.log(data === 'success');
                    if (data === 'success') {
                        alert("Account created successfully");
                    }
                    else {
                        alert("Username already have been taken,please use another username");
                    }
                })
            }
        }
        else {
            alert("Username and password can't be empty");
        }
        document.getElementById("usernamesignup").value = '';
        document.getElementById("passwordsignup").value = '';
    })
}

function alreadyHaveAccount() {
    document.getElementById("ahac").addEventListener("click", () => {
        document.getElementById("signup").style.display = "none";
        document.getElementById("login").style.display = "block";
        //console.log("Works!");
    })
}


alreadyHaveAccount();
signupController();