let themeBtn = document.getElementById("theme_btn");

const themeChange = () => {
    console.log("clicked");
    // document.body.style.backgroundColor = "black";
    let element = document.body;
    element.classList.toggle("dark-mode");
    
}