const part_3 = document.querySelector('.chien_container')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const nextWeekDay=[]
const nextWeekDate=[]
for(let i=1;i<8;i++){
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + i)
    let day = tomorrow.toString().slice(0,3);
    let date = tomorrow.toString().slice(4,7) + " " + tomorrow.toString().slice(8,10)
    nextWeekDay.push(day)
    nextWeekDate.push(date)
}
//console.log(nextWeekDay)
//console.log(nextWeekDate)

function appendWeeklyData(){
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-593A953B-72B6-4F7E-9407-D39EC17D8589')
    .then(res => res.json())
    .then(function(data){

        let nanGang=data.records.locations[0].location[0]   
        // console.log(nanGang)

        for(let i=0; i<7; i++){

            const all = document.createElement('div')
            all.classList.add('all_chien')

            //日期
            const dateFrame = document.createElement('div')
            dateFrame.classList.add('dateFrame_chien')

            const nextDay = document.createElement('div')
            nextDay.innerText=nextWeekDay[i]

            const nextDate = document.createElement('div')
            nextDate.classList.add('nextDate_chien')
            nextDate.innerText=nextWeekDate[i]

            dateFrame.appendChild(nextDay)
            dateFrame.appendChild(nextDate)
            all.appendChild(dateFrame)

            //圖片
            const pic=document.createElement('img')
            pic.classList.add('pic_chien')
            if(nanGang.weatherElement[0].time[i+2].elementValue[0].value > 25){
                pic.src="./pic/fine.png"
            } else if (nanGang.weatherElement[0].time[i+2].elementValue[0].value > 50){
                pic.src="./pic/cloud.png"
            } else if (nanGang.weatherElement[0].time[i+2].elementValue[0].value > 75){
                pic.src="./pic/rain.png"
            } else {
                pic.src="./pic/sunny.png"
            }
            all.appendChild(pic)



            //最高溫/最低溫
            const highest=document.createElement('div')
            highest.classList.add('highLowTemp_chien')
            highest.innerText= nanGang.weatherElement[12].time[i+2].elementValue[0].value+'°' 
            const lowest=document.createElement('span')
            lowest.innerText= "/" + nanGang.weatherElement[8].time[i+2].elementValue[0].value+'°'
            highest.appendChild(lowest)
            all.appendChild(highest)

            //降雨機率
            const rainProb=document.createElement('div')
            rainProb.classList.add('rainProb_chien')
            if(nanGang.weatherElement[0].time[i+2].elementValue[0].value === " "){
                rainProb.innerText= '0'+'%'
            } else {
                rainProb.innerText= nanGang.weatherElement[0].time[i+2].elementValue[0].value+'%'
            }  
            all.appendChild(rainProb)

            part_3.appendChild(all)
            }
        

        }
    )
}


appendWeeklyData();