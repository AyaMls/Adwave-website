const text = "Adwave.";
const typingText = document.getElementById("title");
let index = 0;

function typeWriter(){
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter,200);
    } else {
        setTimeout(() => {
            typingText.innerHTML = "";
            index = 0 ;
            typeWriter();
        }, 1500);
    }
}

typeWriter();

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="700px"
    }
    else{
        menuList.style.maxHeight="0px"
    }
}
