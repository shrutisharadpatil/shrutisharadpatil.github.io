/* APPLY SAVED THEME */

const savedTheme = localStorage.getItem("theme")

if(savedTheme){
document.body.setAttribute("data-theme", savedTheme)
}

/* BUTTON */

const toggle = document.getElementById("themeToggle")

if(toggle){

/* SET CORRECT ICON ON LOAD */

const current = document.body.getAttribute("data-theme")

if(current === "light"){
toggle.innerHTML = '<i class="fa-solid fa-sun"></i>'
}else{
toggle.innerHTML = '<i class="fa-solid fa-moon"></i>'
}

/* TOGGLE CLICK */

toggle.onclick = () => {

const current = document.body.getAttribute("data-theme")

if(current === "light"){
document.body.setAttribute("data-theme","dark")
localStorage.setItem("theme","dark")
toggle.innerHTML = '<i class="fa-solid fa-moon"></i>'
}else{
document.body.setAttribute("data-theme","light")
localStorage.setItem("theme","light")
toggle.innerHTML = '<i class="fa-solid fa-sun"></i>'
}

}
}