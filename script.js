let a = document.getElementById("menu");
let close = document.getElementById("close") 
let nav = document.querySelector(".ul")
a.onclick = function(){
    a.style.opacity = 0
    nav.classList.add("show"); 
    document.body.style.overflow="hidden"
}

close.onclick = function() {
    a.style.opacity = 1
    nav.classList.remove("show"); 
    document.body.style.overflow="auto"

}
 