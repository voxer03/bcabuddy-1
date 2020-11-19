let isOpen=false;
let bar= document.getElementsByClassName('nav-links');
let lines=document.getElementsByClassName('line');
function popup(){
    if(!isOpen){
        lines[0].style.transform="rotate(45deg)";
        lines[1].style.transform="rotate(-45deg)";
        lines[2].style.display="none";
        bar[0].style.transform="translateY(0%)";
        isOpen=true;
    }
    else{
        lines[0].style.transform="rotate(0)";
        lines[1].style.transform="rotate(0)";
        lines[2].style.display="flex";
        bar[0].style.transform="translateY(100%)";
        isOpen=false;
    }
}

let lastScrollTop=0;
window.addEventListener("scroll", function(){
    let scrollTop=window.pageYOffset ||document.documentElement.scrollTop;
    if(scrollTop>lastScrollTop){
        if(isOpen){
            lines[0].style.transform="rotate(0)";
            lines[1].style.transform="rotate(0)";
            lines[2].style.display="flex";
            bar[0].style.transform="translateY(100%)";
            isOpen=false
        }
    }
})