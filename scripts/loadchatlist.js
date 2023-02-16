function loadChatList() {
    let authHeader;
    authHeader = localStorage.getItem("token");

    fetch("https://backendvla.onrender.com/ldchatlist", {
        method: 'POST',
        credentials: "include",
        headers: {
            'authorization': 'Bearer ' + authHeader,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
        .then(resp => resp.json())
        .then(data => {
            //console.log(data);
            let mycontent = document.querySelector(".mycontainer");
            if (document.querySelectorAll(".chatman") !== null) {
                document.querySelectorAll(".chatman").forEach(item => item.remove());
            }
            data.forEach(item => {
                let divContact = document.createElement("div");
                divContact.setAttribute("class", "chatman");

                let pcontact = document.createElement("p");
                pcontact.setAttribute("class", "chatmanname");
                pcontact.innerHTML = item["contactname"];

                let platestmsg = document.createElement("p");
                platestmsg.setAttribute("class", "latesmsg");
                //platestmsg.innerHTML = item["mesgpreview"];
                platestmsg.textContent=item["mesgpreview"];
                divContact.addEventListener("click", () => {
                    localStorage.setItem("target", item["contactname"]);
                    location.href = "https://frontendvla.onrender.com/messaging.html";
                })
                divContact.appendChild(pcontact);
                divContact.appendChild(platestmsg);
                mycontent.append(divContact);
            });
        })
}
loadChatList();