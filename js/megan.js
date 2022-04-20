function appendToday(i){
    fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-06899792-6C35-499A-8E8A-463BE58C275A")
.then(data=>data.json())
.then(function(taipei){
    let temp=taipei.records.locations[0].location[i].weatherElement[3].time[0].elementValue[0].value
    let weather=taipei.records.locations[0].location[i].weatherElement[1].time[0].elementValue[0].value
    let feeltemp=taipei.records.locations[0].location[i].weatherElement[2].time[0].elementValue[0].value
    let comfortableindex=taipei.records.locations[0].location[i].weatherElement[5].time[0].elementValue[0].value
    let winddirect=taipei.records.locations[0].location[i].weatherElement[9].time[0].elementValue[0].value
    let windspead=taipei.records.locations[0].location[i].weatherElement[8].time[0].elementValue[0].value
    let place=taipei.records.locations[0].location[i].locationName
    let today= new Date()
    let currentTime=today.getHours()+":"+today.getMinutes()

    let allmegan = document.createElement('div')
    allmegan.setAttribute('id','all_megan')

    // 天氣文字區塊
    let title = document.createElement('p')
    title.setAttribute('id','weatherNow_megan')
    title.textContent=place+" 目前天氣："
    let br = document.createElement('br')
    let time = document.createElement('span')
    time.setAttribute('id','time_megan')
    time.textContent=currentTime
    title.append(br,time)
   
    // 圖片區塊
    let wBox = document.createElement('div')
    wBox.setAttribute('id','weatherBox_megan')
    let imgBox = document.createElement('img')
    imgBox.src="pic/cloud.png"
    let tempBox = document.createElement('span')
    tempBox.setAttribute('id','temp_megan')
    tempBox.textContent=temp+"°"
    let cBox = document.createElement('span')
    cBox.setAttribute('id','c_megan')
    cBox.textContent="c"
    wBox.append(imgBox,tempBox,cBox)

    // 風向區塊
    let windBox = document.createElement('ul')
    windBox.setAttribute('id','weatherWind_megan')
    let winddirectli = document.createElement('li')
    let comfortableindexli = document.createElement('li')
    let windspeadli = document.createElement('li')
    let winddirectspan = document.createElement('span')
    let comfortableindexspan = document.createElement('span')
    let windspeadspan = document.createElement('span')
    winddirectli.setAttribute('class','label_megan')
    winddirectli.textContent = "風："+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
    comfortableindexli.setAttribute('class','label_megan')
    comfortableindexli.textContent = "舒適度："+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0   "
    windspeadli.setAttribute('class','label_megan')
    windspeadli.textContent = "風速："+"\xa0\xa0\xa0\xa0\xa0"
    winddirectspan.setAttribute('class','value_megan')
    winddirectspan.textContent = winddirect
    comfortableindexspan.setAttribute('class','value_megan')
    comfortableindexspan.textContent = comfortableindex
    windspeadspan.setAttribute('class','value_megan')
    windspeadspan.textContent = windspead+"  公尺/秒"
    winddirectli.appendChild(winddirectspan)
    comfortableindexli.appendChild(comfortableindexspan)
    windspeadli.appendChild(windspeadspan)
    windBox.append(comfortableindexli,winddirectli,windspeadli)

    // 體感溫度
    let feelBox = document.createElement('span')
    feelBox.setAttribute('id','feel_megan')
    feelBox.textContent="RealFeel®"+feeltemp

    // 天氣敘述
    let desBox = document.createElement('div')
    desBox.setAttribute('id','weatherDes_megan')
    desBox.textContent=weather

    allmegan.append(title,wBox,feelBox,desBox,windBox)

    let part1 = document.querySelector('.megan_container')
    part1.appendChild(allmegan)
})

}

