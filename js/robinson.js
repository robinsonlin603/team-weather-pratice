let nav_robinson = document.querySelector("nav");
let topic_container_robinson = document.createElement("div");
topic_container_robinson.setAttribute("class","topic_robinson");
let p_container_robinson = document.createElement("p")
p_container_robinson.innerText = "WeHelpWeather   台北市";
let logo_robinson = document.createElement("img");
logo_robinson.setAttribute("class","logo_robinson");
logo_robinson.setAttribute("src","pic/logo.png");
topic_container_robinson.append(logo_robinson,p_container_robinson);
nav_robinson.appendChild(topic_container_robinson);