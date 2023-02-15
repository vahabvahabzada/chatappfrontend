let textarea = document.querySelector("#typemessage");
let mesgBox = document.querySelector("#mesgbox");
let senbutton = document.querySelector("#sendbutton");
let content = document.querySelector("#con");
let tempScrollHeight = textarea.scrollHeight;
//let etalonCharacterHeight = 0;
let msgBoxHeightTemp = Number(getComputedStyle(mesgBox).height.substring(0, getComputedStyle(mesgBox).height.length - 2));

textarea.addEventListener('input', () => {
    //console.log(textarea.scrollHeight);
    if (textarea.value.length === 1) {
        //etalonCharacterHeight = textarea.scrollHeight;
        textarea.setAttribute('style', `height:auto !important`);
    }

    textarea.setAttribute('style', `height:30px !important`);
    textarea.setAttribute('style', `height:${textarea.scrollHeight}px !important`);
    mesgBox.setAttribute('style', `height:${Number(getComputedStyle(textarea).height.substring(0, getComputedStyle(textarea).height.length - 2)) + 20}px`);//en teze yazdim
    senbutton.setAttribute('style', `top:${(Number(getComputedStyle(mesgBox).height.substring(0, getComputedStyle(mesgBox).height.length - 2)) - 30) / 2}px`);
    content.setAttribute('style', `padding-bottom:${Number(getComputedStyle(textarea).height.substring(0, getComputedStyle(textarea).height.length - 2)) + 30}px`);/* en teze yazdim */
})