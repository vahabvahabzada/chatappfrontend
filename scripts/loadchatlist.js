function loadChatList() {
    var authHeader;
    authHeader = localStorage.getItem("token");

    fetch("http://localhost:8080/ldchatlist", {
        method: 'POST',
        //credentials: "include",
        headers: {
            'authorization': 'Bearer ' + authHeader,
            'Content-Type': 'application/json'
        }
    })
        .then(resp => resp.json())
        .then(data => {
            //console.log(data);
            var mycontent = document.querySelector(".mycontainer");
            if (document.querySelectorAll(".chatman") !== null) {
                document.querySelectorAll(".chatman").forEach(item => item.remove());
            }
            data.forEach(item => {
                var divContact = document.createElement("div");
                divContact.setAttribute("class", "chatman");

                var pcontact = document.createElement("p");
                pcontact.setAttribute("class", "chatmanname");
                if (localStorage.getItem("username") !== item["mto"]) {
                    pcontact.innerHTML = item["mto"];
                }
                if (localStorage.getItem("username") !== item["mfrom"]) {
                    pcontact.innerHTML = item["mfrom"];
                }
                var platestmsg = document.createElement("p");
                platestmsg.setAttribute("class", "latesmsg");
                platestmsg.innerHTML = item["mbody"];
                divContact.addEventListener("click", () => {
                    if (localStorage.getItem("username") !== item["mto"]) {
                        localStorage.setItem("target", item["mto"]);
                    }
                    if (localStorage.getItem("username") !== item["mfrom"]) {
                        localStorage.setItem("target", item["mfrom"]);
                    }
                    location.href = "http://localhost:5500/messaging.html";
                })
                divContact.appendChild(pcontact);
                divContact.appendChild(platestmsg);
                mycontent.append(divContact);
            });
        })
}

//loadChatList();
setInterval(loadChatList,2000);