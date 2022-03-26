let weather = {
    "apiKey" : "ce80a2d8f3b03c739f8567e22b2816e0",
    
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city 
            +"&units=imperial&appid=" 
            +this.apiKey
        )    
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText = "Wind speed:"+ speed + "mph";
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1920x1080/?" + name + "')";

    },
    search: function(){
        this.fetchWeather(document.querySelector(".realSearch").value);
        
    },
    
};

document.querySelector(".searchBar button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".searchBar button").addEventListener("keyup", function (event){
    if (event.key == "Enter"){
        weather.search();
    }
});

