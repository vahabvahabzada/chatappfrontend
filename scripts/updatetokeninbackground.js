function updateToken() {//her 14-15 deq-den bir arxa planda (background) toke-i update edir
    //setInterval(() => {
        fetch("https://backendvla.onrender.com/updatetoken", {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
        .then(resp => resp.text())
        .then(data => {
            localStorage.setItem("token", data);//token-i yenile
            console.log("%c after 14 minutes,token updated---->" + data, "color:green");
            setTimeout(updateToken,840000);
        })
    //}, 840000)// 1000*60*14,repeat every 14 minutes
}

//setTimeout(updateToken,840000);
updateToken();