let apiKey= "685c2b996cabb44c944786699cc2823c"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
let input = document.querySelector(".search-box")
let btn = document.querySelector(".btn")
let icon= document.querySelector(".weather-icon")
async function weather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);


if(response.status == 404){

    document.querySelector(".error").style.display="block";
    document.querySelector(".mo").style.display="none";
}

 else{


    document.querySelector(".mo").style.display="block";
    document.querySelector(".error").style.display="none";

    
    let data = await response.json();
    console.log(data);
    document.querySelector(".info").innerHTML= Math.round(data.main.temp) +"°c";
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind").innerHTML= data.wind.speed+"km/h";



    if(data.weather[0].main == "Clouds"){
        icon.src="./img/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src="./img/drizzle.png"
    }
    else if(data.weather[0].main == "Clear"){
        icon.src="./img/clear.png"
    }
    else if(data.weather[0].main == "Mist"){
        icon.src="./img/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        icon.src="./img/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        icon.src="./img/snow.png"
    }
   else{
        icon.src="./img/.png"
    } 

}
}

btn.addEventListener("click",()=>{
    weather(input.value);
    
})