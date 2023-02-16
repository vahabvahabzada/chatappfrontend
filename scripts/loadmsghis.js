import { getSaygacValue } from "./partloadmsghis.js";
function loadMessageHistory() {
    let saygac = 0;
    let authHeader = localStorage.getItem("token");
    fetch("https://backendvla.onrender.com/msghis", {
        method: 'POST',
        headers: {
            'authorization': 'Bearer ' + authHeader,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: "kime=" + localStorage.getItem("target")
    })
        .then(resp => resp.json())
        .then(data => {
            ////console.log(data);
            //console.log(data.length);
            if (data.length != 0) {
                //console.log("Saygaci artirmaq...");
                //console.log("Before:" + saygac)

                saygac = saygac + data.length;

                //console.log("After:" + saygac);
                let contact = document.querySelector("#con")
                //console.log(data);
                data.forEach(item => {
                    let p = document.createElement("p");
                    if (localStorage.getItem("target") === item["from"]) {//demeli mesaj gelen mesajdi
                        p.setAttribute("class", "messagein");
                    }
                    if (localStorage.getItem("target") !== item["from"]) {//demeli mesaj geden mesajdi
                        p.setAttribute("class", "messageout");
                    }
                    p.innerHTML = item["body"];
                    contact.append(p);
                    //contact.appendChild(p);
                })
            }
            getSaygacValue(saygac);
        })
}

loadMessageHistory();
document.querySelector("#id").addEventListener("click",()=>{
    parent.location="https://frontendvla.onrender.com/home.html";
})