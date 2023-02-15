import { loadPartialNewMessages } from "./partloadmsghis.js";

export function sendMessage(counter) {
    var partLoadId = loadPartialNewMessages(counter);
    document.querySelector("#sendbutton").addEventListener("click", () => {
        clearTimeout(partLoadId);
        console.log("stopped live reload temporarily... counter=" + counter);
        if (document.querySelector("#typemessage").value !== '' && localStorage.getItem("username")!==null) {//don't sent empety message
            //console.log("Message sent!");
            fetch("https://backendvla.onrender.com/messaging", {
                method: 'POST',
                headers: {
                    'authorization':/*authHeader,*/'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    //'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "messageBody=" + document.querySelector("#typemessage").value + "&messageTo=" + localStorage.getItem("target")
            })

                .then(() => {/*counter=counter+1*/;/*loadPartialNewMessages(counter);*/setTimeout(partLoadId, 2000); console.log("reactivated live reload... counter=" + counter) });
            document.querySelector("#typemessage").value = "";//mesaj gonderilenden sonra,yazmaq ucun olan input box-u default veziyyete qaytarmaq lazimdi

            textarea.setAttribute('style', `height:30px !important`);
            textarea.setAttribute('style', `height:${textarea.scrollHeight}px !important`);
            mesgBox.setAttribute('style', `height:${Number(getComputedStyle(textarea).height.substring(0, getComputedStyle(textarea).height.length - 2)) + 20}px`);//en teze yazdim
            senbutton.setAttribute('style', `top:${(Number(getComputedStyle(mesgBox).height.substring(0, getComputedStyle(mesgBox).height.length - 2)) - 30) / 2}px`);
            content.setAttribute('style', `padding-bottom:${Number(getComputedStyle(textarea).height.substring(0, getComputedStyle(textarea).height.length - 2)) + 30}px`);/* en teze yazdim */
        }
    })

    document.querySelector('.contactname').innerHTML = localStorage.getItem("target");
}