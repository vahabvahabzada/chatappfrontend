import { loadPartialMesgHis } from "./partloadmsghis.js";

function loadMesgHis(){
    fetch("http://localhost:8080/msghis",{
        method:'POST',
        headers:{
            'authorization':'Bearer '+localStorage.getItem("token"),
            'Content-Type':'application/json'
        },
        body:localStorage.getItem("target")
    })
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data);
        data.forEach(element => {
            messageMapper(element);
        });

        setInterval(loadPartialMesgHis,2000);
    })
}

function messageMapper(message){
    var con=document.getElementById("con");
    var mesaj=document.createElement("p");
    mesaj.textContent=message["mbody"];
    if(message["mfrom"]===localStorage.getItem("username")){//demeli mesaj geden mesajdi
        mesaj.setAttribute("class","messageout");
    }
    if(message["mfrom"]===localStorage.getItem("target")){//demeli mesaj gelen mesajdi
        mesaj.setAttribute("class","messagein");       
    }
    con.appendChild(mesaj);
}


loadMesgHis();