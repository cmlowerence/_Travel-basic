const underDevMsg = ()=>{
    alert(`This section is not yet prepared...`)
}

// Hamburger JavaScript
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById("navLinks");
console.log(hamburger);
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navLinks.classList.toggle("active");
})