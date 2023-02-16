import { sendMessage } from "./sendmessage.js";

export function loadPartialNewMessages(counter) {
    var authHeader = localStorage.getItem("token");
    var partLoadId;

    fetch("https://backendvla.onrender.com/msgprtlhis", {
        method: 'POST',
        headers: {
            'authorization': 'Bearer ' + authHeader,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: "counter=" + counter + "&kime=" + localStorage.getItem("target")
    })
        .then(resp => resp.json())
        .then(data => {
            ////console.log(data);
            if (data.length !== 0) {
                //console.log("new message ");

                //saygac=saygac+data.length;
                //console.log("partloadmsghis yoxlama:saygac=" + counter);

                //counter = counter + data.length;

                var contact = document.querySelector("#con");
                if (contact !== null) {
                    data.forEach(item => {
                        var p = document.createElement("p");
                        if (item["from"] === localStorage.getItem("target")) {
                            p.setAttribute("class", "messagein");
                        }
                        if (item["from"] !== localStorage.getItem("target")) {
                            p.setAttribute("class", "messageout");
                        }
                        p.innerHTML = item["body"];
                        //contact.appendChild(p);
                        contact.append(p);
                    })
                    counter = counter + data.length;
                }
            }
            partLoadId = setTimeout(loadPartialNewMessages(counter),/*1000*/ /*3000*/2000);
        })

    return partLoadId;
}


export function getSaygacValue(eded) {
    sendMessage(eded);
}