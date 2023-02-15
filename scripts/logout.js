function logout() {
    document.getElementById("logoutbtn").addEventListener("click", () => {
        fetch("https://backendvla.onrender.com/logout", {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
        //console.log("logout works")
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        location.replace("https://frontendvla.onrender.com/index.html");
    })
}
logout();