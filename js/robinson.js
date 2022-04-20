let space_index,keywordInput
function navBarRender(){
    let nav_robinson = document.querySelector("nav");
    let topic_container_robinson = document.createElement("div");
    topic_container_robinson.setAttribute("class","topic_robinson");
    let p_container_robinson = document.createElement("p")
    p_container_robinson.innerText = "WeHelpWeather   台北市";
    let logo_robinson = document.createElement("img");
    logo_robinson.setAttribute("class","logo_robinson");
    logo_robinson.setAttribute("src","pic/logo.png");
    let searchBox_robinson = document.createElement("div")
    searchBox_robinson.setAttribute("id","search")

    let inputBox_robinson = document.createElement("input")
    inputBox_robinson.setAttribute("type","text")
    inputBox_robinson.setAttribute("id","keyword")
    inputBox_robinson.setAttribute("placeholder","輸入台北各區查詢")

    let inputButton_robinson = document.createElement("button")
    inputButton_robinson.setAttribute("type","reset")
    inputButton_robinson.setAttribute("id","icon")
    inputButton_robinson.setAttribute("onclick","getKeyword()")

    let inputButtonImg_robinson = document.createElement("img")
    inputButtonImg_robinson.src = "pic/icon_search.png"

    inputButton_robinson.appendChild(inputButtonImg_robinson)
    searchBox_robinson.append(inputBox_robinson,inputButton_robinson)
    topic_container_robinson.append(logo_robinson,p_container_robinson,searchBox_robinson);
    nav_robinson.appendChild(topic_container_robinson);
}

function getKeyword(){
    keywordInput = document.getElementById("keyword").value;
    let part_3 = document.querySelector('.chien_container');
    let claire_part_2=document.querySelector('.claire_container');
    let part1 = document.querySelector('.megan_container')
    let footer = document.querySelector("footer")
    part1.innerHTML = "";
    part_3.innerHTML = "";
    claire_part_2.innerHTML="";
    getSpace(keywordInput);
    if(space_index == "wrongkeyword"){
        let wrong_container = document.querySelector(".wrong_container");
        wrong_container.innerText = "關鍵字錯誤";
        footer.setAttribute("class","footer")
    }else{
        appendWeeklyData(space_index);
        claire_fetch_data(space_index);
        appendToday(space_index);
        footer.classList.remove("footer")
    }
}

function getSpace(){
    switch (keywordInput){
        case "南港區":
            space_index = 0;
            return space_index
        case "文山區":
            space_index = 1;
            return space_index
        case "萬華區":
            space_index = 2;
            return space_index
        case "大同區":
            space_index = 3;
            return space_index
        case "中正區":
            space_index = 4;
            return space_index
        case "中山區":
            space_index = 5;
            return space_index
        case "大安區":
            space_index = 6;
            return space_index
        case "信義區":
            space_index = 7;
            return space_index
        case "松山區":
            space_index = 8;
            return space_index
        case "北投區":
            space_index = 9;
            return space_index
        case "士林區":
            space_index = 10;
            return space_index
        case "內湖區":
            space_index = 11;
            return space_index
        default:
            space_index = "wrongkeyword";
            return space_index
    }
}
async function init(){
    navBarRender();
    appendWeeklyData(0);
    claire_fetch_data(0);
    appendToday(0);
}

init();