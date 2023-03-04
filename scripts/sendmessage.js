document.querySelector('.contactname').innerHTML = localStorage.getItem("target");
function sendMessage(mbody) {
    fetch("http://localhost:8080/messaging", {
        method: 'POST',
        headers: {
            'authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "mfrom": localStorage.getItem("username"), "mbody": mbody, "mto": localStorage.getItem("target") })
    })

    document.querySelector("#typemessage").value = "";//mesaj gonderilenden sonra,yazmaq ucun olan input box-u default veziyyete qaytarmaq lazimdi
    textarea.setAttribute('style', `height:30px !important`);
    textarea.setAttribute('style', `height:${textarea.scrollHeight}px !important`);
    mesgBox.setAttribute('style', `height:${Number(getComputedStyle(textarea).height.substring(0, getComputedStyle(textarea).height.length - 2)) + 20}px`);
    senbutton.setAttribute('style', `top:${(Number(getComputedStyle(mesgBox).height.substring(0, getComputedStyle(mesgBox).height.length - 2)) - 30) / 2}px`);
    content.setAttribute('style', `padding-bottom:${Number(getComputedStyle(textarea).height.substring(0, getComputedStyle(textarea).height.length - 2)) + 30}px`);
}

document.getElementById("sendbutton").addEventListener("click", () => {
    sendMessage(document.getElementById("typemessage").value);
});