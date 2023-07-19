// active nav links
const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", navHighlighter);
    function navHighlighter() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            let sectionId = current.getAttribute("id");
                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ){
                    document.querySelectorAll("a[href*=" + sectionId + "]").forEach(element => {
                        element.parentElement.classList.add("active");
                        element.parentElement.classList.add("active");
                    });
                } else {
                    document.querySelectorAll("a[href*=" + sectionId + "]").forEach(element => {
                        if(element.parentElement.classList.contains("active"))
                        element.parentElement.classList.remove("active");
                        if(element.parentElement.classList.contains("active-mobile"))
                        element.parentElement.classList.remove("active");
                })
                }
            })}
// main nav
const nav = document.querySelector(".bottom-header")
console.log(nav)
window.onscroll = () => {
    if(window.scrollY >= 40){
        nav.classList.add("fixed");
    }
    else {
        if(nav.classList.contains("fixed"))  
        nav.classList.remove("fixed");
    }
    if(window.scrollY > 0) {
        nav.classList.add("fixed-mobile");
    }
    else {
        if(nav.classList.contains("fixed-mobile"))  
        nav.classList.remove("fixed-mobile");
    }
}

// navigation mobile
const icon = document.querySelector(".icon");
const overlay = document.querySelector(".overlay")
icon.onclick = () => {
    overlay.classList.toggle("trans")
    if(icon.children[0].classList.contains("span-anim-in-s1")){
        for(let i = 0 ; i< icon.children.length ; i++){
            icon.children[i].setAttribute("class",`span-anim-out-s${i+1}`);
        }
    }else {
        for(let i = 0 ; i< icon.children.length ; i++){
            icon.children[i].setAttribute("class",`span-anim-in-s${i+1}`);
        }
    }
}
overlay.onclick = () => {
    overlay.classList.toggle("trans")
    for(let i = 0 ; i< icon.children.length ; i++){
        icon.children[i].setAttribute("class",`span-anim-out-s${i+1}`);
    }
}
// const linksMobile = document.querySelectorAll(".link-mob a");
// for(let m = 0 ; m < linksMobile.length ; m++) {
//     linksMobile[m].onclick = (e) => {
//         console.log(e.target)
//         overlay.classList.remove("trans")
//         for(let i = 0 ; i< icon.children.length ; i++){
//             icon.children[i].setAttribute("class",`span-anim-out-s${i+1}`);
//         }
//     }
// }
// slider issuing
const issuingCards = document.querySelectorAll(".cards-issuing .card");
const dots = document.querySelector(".dots")

for(let i = 0 ; i < dots.children.length ; i++ ) {
    dots.children[i].onclick = () => {
        for(let j = 0 ; j < dots.children.length ; j++) {
            dots.children[j].setAttribute("class","dot")
            issuingCards[j].setAttribute("class","card")
        }
        if(i == 0) {
            issuingCards[0].classList.add("active-card")
            issuingCards[1].classList.add("next-card")
        }
        if(i>=1 && i<dots.children.length-1){
            issuingCards[i-1].classList.add("prev-card")
            issuingCards[i].classList.add("active-card")
            issuingCards[i+1].classList.add("next-card")
        }
        if(i == dots.children.length-1){
            issuingCards[i].classList.add("active-card")
            issuingCards[i-1].classList.add("prev-card")
        }
        dots.children[i].classList.add("active-dot")
    }
}
for (let k = 0 ; k < issuingCards.length ; k++) {
    issuingCards[k].onclick = () => {
        dots.children[k].click()
    }
}


// slider blogs
const blogCards = document.querySelectorAll(".cards-blog .card");
const dotsBl = document.querySelector(".dots-blog")

for(let i = 0 ; i < dotsBl.children.length ; i++ ) {
    dotsBl.children[i].onclick = () => {
        for(let j = 0 ; j < dotsBl.children.length ; j++) {
            dotsBl.children[j].setAttribute("class","dot-bl")
            blogCards[j].setAttribute("class","card")
        }
        if(i == 0) {
            blogCards[0].classList.add("active-card")
            blogCards[1].classList.add("next-card")
        }
        if(i>=1 && i<dotsBl.children.length-1){
            blogCards[i-1].classList.add("prev-card")
            blogCards[i].classList.add("active-card")
            blogCards[i+1].classList.add("next-card")
        }
        if(i == dotsBl.children.length-1){
            blogCards[i].classList.add("active-card")
            blogCards[i-1].classList.add("prev-card")
        }
        dotsBl.children[i].classList.add("active-dot-bl")
    }
}
for (let k = 0 ; k < blogCards.length ; k++) {
    blogCards[k].onclick = () => {
        console.log("ssss")
        dotsBl.children[k].click()
    }
}