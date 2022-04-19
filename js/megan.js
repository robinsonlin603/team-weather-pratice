fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-06899792-6C35-499A-8E8A-463BE58C275A&locationName=南港區")
.then(data=>data.json())
.then(function(taipei){
    let temp=taipei.records.locations[0].location[0].weatherElement[3].time[0].elementValue[0].value
    let weather=taipei.records.locations[0].location[0].weatherElement[1].time[0].elementValue[0].value
    let feeltemp=taipei.records.locations[0].location[0].weatherElement[2].time[0].elementValue[0].value
    let today= new Date()
    let currentTime=today.getHours()+":"+today.getMinutes()

    let allmegan = document.createElement('div')
    allmegan.setAttribute('id','all_megan')

    // 天氣文字區塊
    let title = document.createElement('p')
    title.setAttribute('id','weatherNow_megan')
    title.textContent="目前天氣"
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

    // 體感溫度
    let feelBox = document.createElement('span')
    feelBox.setAttribute('id','feel_megan')
    feelBox.textContent="RealFeel®"+feeltemp

    // 天氣敘述
    let desBox = document.createElement('div')
    desBox.setAttribute('id','weatherDes_megan')
    desBox.textContent=weather

    allmegan.append(title,wBox,feelBox,desBox)

    let part1 = document.querySelector('.megan_container')
    part1.appendChild(allmegan)
})


