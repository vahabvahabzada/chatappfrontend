function logout() {
    document.getElementById("logoutbtn").addEventListener("click", () => {
        var token=localStorage.getItem("token");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        fetch("http://localhost:8080/logouturl", {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
        .then(()=>{
            //console.log("logout works")
            
            /*localStorage.removeItem("token");
            localStorage.removeItem("username");*/
            location.replace("http://localhost:5500/index.html");
        })
    })
}
logout();