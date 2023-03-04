export function loadPartialMesgHis(){
    fetch("http://localhost:8080/msgprtlhis",{
        method:'POST',
        headers:{
            'authorization':'Bearer '+localStorage.getItem("token"),
            'Content-Type':'application/json'
        },
        body:JSON.stringify({"kime":localStorage.getItem("target")})
    })
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data);
        data.forEach(element => {
            messageMapper(element);
        });
    })
}


function messageMapper(message){
    var latestMessage=document.querySelector("p:last-child");
    console.log(latestMessage);
    if(message["mbody"]!==latestMessage.textContent){
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
}


//setInterval(loadPartialMesgHis,2000);