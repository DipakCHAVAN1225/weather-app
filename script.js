const apiKey="1b12ae511dc2fbe0cbcabef202dc07a7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let city=document.querySelector(".city h1");
let temp=document.querySelector(".temp h2");
let input=document.querySelector("#value");
let btn=document.querySelector("#btn")
let img=document.querySelector(".imgs img")

async function wether(city){
  if(input.value===" "){
    alert("please enter city name");
  }
  else{
    let response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data=await response.json();

    console.log(data)
  
  //  city.innerHTML=input.value;
   temp.innerHTML=Math.round(data.main.temp)+"°C";
   document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
   document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";


   if(data.weather[0].main == "Clouds"){
    img.src="weather-app-img/images/clouds.png"
  }
  else if(data.weather[0].main == "Clear"){
    img.src="weather-app-img/images/clear.png"
  }
  else if(data.weather[0].main == "Drizzle"){
    img.src="weather-app-img/images/drizzle.png"
  }
  else if(data.weather[0].main == "Mist"){
    img.src="weather-app-img/images/mist.png"
  }
  else if(data.weather[0].main == "Rain"){
    img.src="weather-app-img/images/rain.png"
  }
  else if(data.weather[0].main == "Snow"){
    img.src="weather-app-img/images/snow.png"
  }
  document.querySelector(".error").Style.display="none";
}


   
  }

  
btn.addEventListener("click",()=>{
  wether(input.value);
  city.innerText=input.value;
    // input.value=""

    setTimeouta(()=>{


    },1000)
    
})

