const claire_part_2=document.querySelector('.claire_container');

const claire_now=new Date();
const claire_nowHours=claire_now.getHours()

function claire_checkTime(claire_nowHours){
    
    if(claire_nowHours<=10){
        return afterSixhr='今早'
    }else if(claire_nowHours<=16){
        return afterSixhr='下午'
    }else{
        return afterSixhr='今晚'
    }

}

 //afterSixhr=與當下時間差6小時 tomorrow=與當下時間差24小時
 let claire_afterSixhr=claire_checkTime(claire_nowHours);
 let claire_tomorrow="明天";
let claire_word=[]
claire_word.push(claire_afterSixhr);
claire_word.push(claire_tomorrow);
// console.log(today)
// console.log(tomorrow)
// console.log(typeof(tomorrow))



async function claire_fetch_data(){
    const response=await fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-0BAA84C3-A30C-4090-977D-CF8DD52E28A5');
    const promise=await response.json();
    const result= await promise;

    let nangangDist=result.records.locations[0].location[0]
    for(let i=2;i<9;i+=6){
        const allcardContainer=document.createElement('div')
        allcardContainer.classList.add('claire_all-card-container')
        //date
        const cardHeader=document.createElement('div')
        cardHeader.classList.add('claire_card-header')
        const dateWord=document.createElement('div')
      
        
        const sub_title=document.createElement('span')
        
        
        if(i===2){
            dateWord.innerHTML=claire_word[0]
            sub_title.innerHTML=(claire_now.getMonth()+1).toString()+'/'+claire_now.getDate().toString()
        }else{
            dateWord.innerHTML=claire_word[1]
            sub_title.innerHTML=(claire_now.getMonth()+1).toString()+'/'+(claire_now.getDate()+1).toString()
        }
        cardHeader.append(dateWord,sub_title)
        //溫度
        const temp=nangangDist.weatherElement[3].time[i].elementValue[0].value
        //體感溫度
        const feeltemp=nangangDist.weatherElement[2].time[i].elementValue[0].value
        //舒適度指數
        const comforIndex=nangangDist.weatherElement[5].time[i].elementValue[0].value
        //天氣現象
        const weatherDescribe=nangangDist.weatherElement[1].time[i].elementValue[0].value

        const cardcontent=document.createElement('div');
        cardcontent.classList.add('claire_card-content')
        
        const forecastDIV=document.createElement('div');
        forecastDIV.classList.add('claire_forecat')
        
        const icon=document.createElement('img');
        if( weatherDescribe.includes("陰")){
            icon.src="./pic/cloud.png"
        } else if (weatherDescribe.includes("雲")){
            icon.src="./pic/fine.png"
        } else if (weatherDescribe.includes("雨")){
            icon.src="./pic/rain.png"
        } else if (weatherDescribe.includes("晴")){
            icon.src="./pic/sunny.png"
 
        }else{
            icon.src="./pic/cloud.png"
        }
            
        const tempContainer=document.createElement('div');
        tempContainer.classList.add('claire_temp-container')
        const tempDiv=document.createElement('div');
        tempDiv.classList.add('claire_temp')
        tempDiv.innerHTML=temp+'°';
        const indexSpan=document.createElement('span');
        indexSpan.innerHTML="/"+comforIndex+'°';
        tempDiv.append(indexSpan);
        const realFeel=document.createElement('div');
        realFeel.classList.add('claire_real-feel')
        realFeel.innerHTML='RealFeel® '+feeltemp+'°';
        tempContainer.append(tempDiv,realFeel);
        forecastDIV.append(icon,tempContainer);
        const phrase=document.createElement('div');
        phrase.classList.add('claire_phrase')
        phrase.innerHTML=weatherDescribe;
        cardcontent.append(forecastDIV,phrase);
        allcardContainer.append(cardHeader,cardcontent);
        claire_part_2.append(allcardContainer)

    }





    
}
claire_fetch_data()