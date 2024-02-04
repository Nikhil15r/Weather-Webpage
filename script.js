window.onload=()=>{
    let innerWrapper= document.querySelector(".inner_wrapper");
    let userInput= document.querySelector("#user_input");
    let plus = document.querySelector("#plus");
    let faPlus = document.querySelector(".fa-plus");
    let country = document.querySelector("#country");
    let city = document.querySelector("#city");
    let time = document.querySelector("#time");
    let temp = document.querySelector("#temp");
    let wd = document.querySelector("#wd");
    let ws = document.querySelector("#ws");
    let hmd = document.querySelector("#hmd");
    let icon = document.querySelector("#icon");
    let windDegree= document.querySelector("#wind_degree");
    
    
    
    
          
      plus.addEventListener("click",()=>{
          
          getWeather();
          colorChange();
       });// For mobile;
      
      
    userInput.addEventListener("change",()=>{
          getWeather();
      });// Either Mobile or PC;
      
   
    
     getWeather();// Function call to load data to screen on load.
     
      
      
    
  //CASE 1: A () that fetches data from WeatherApi and Unsplash Api; Go to theIR WEBSITE and generate your own apiKey.
    function getWeather(){
            // getPicture();
            if(userInput.value === ""){
                alert("Enter value");
                return;
            }
        
        let apiKey =`2a5b409bf4fa4672a4f124440230906`;
        
      let a=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput.value}`;
      let url=`https://api.unsplash.com/search/photos/?query=${userInput.value}&client_id=qZzT_pP_-0xu63034oF9zq8tnM4slejcPQ2ksMiwzZ8`;
          
          fetch(a)
          
          
         .then(res =>{
             if(res.ok){
                return res.json()
             }else{
                 console.log(res.status)
             }
          })
      
          
          .then((data)=>{
              
             country.innerHTML=`${data.location.country}`;
             city.innerHTML =`${data.location.name}`;
             time.innerHTML =`${data.location.localtime}`;
             temp.innerHTML =`${data.current.temp_c}°C`;         icon.style.backgroundImage="url("+data.current.condition.icon+")";//DOESNT WORK😮‍;   
             wd.innerHTML =`${data.current.condition.text}`;
             ws.innerHTML =`${data.current.wind_mph}mph`;
             hmd.innerHTML =`${data.current.humidity}`;
             windDegree.innerHTML =`${data.current.wind_degree}°`;     
             
             if(data.current.condition.text === "Patchy light rain with thunder"){
                 icon.innerHTML =`⛈️`;
            }else if(data.current.condition.text === "Cloudy" || data.current.condition.text === "Partly cloudy"){
                 icon.innerHTML =`☁️`;
             }else if(data.current.condition.text === "Clear" ||data.current.condition.text === "Sunny"){
                 icon.innerHTML =`☀️`;
             }else if(data.current.condition.text === "Light rain shower"|| data.current.condition.text === "Light rain"||data.current.condition.text === "Rainy"){
              
                 icon.innerHTML =`🌧️`;
             }else if(data.current.condition.text === "Mist" || data.current.condition.text === "Fog"){
                 icon.innerHTML =`🌨️`;
             }else{
                 icon.innerHTML=``;
             }//End of If.
             
            return fetch(url)//Returning a new Fetch to unsplash Api.
          })
          
          
          .then(res=>{
         if(res.ok){
             return res.json();
         }else{
             console.log(res.status)
         }
     })
     
         .then(data=>{
            innerWrapper.style.backgroundImage=`url(${data.results[0].urls.raw})`;
          })
          
        .catch(error=>{
              console.log(`possible Errors
             1)${error}
             1.1)File not found in source
             1.2) Enter a valid value`);
         })
   
          
          
          
      };// End of Case1.
      
     
     
     
      
  
  
   
   
   // CASE 3: A () that alters the Plus button to lime in 1sec.
     function colorChange(){
       plus.className= `animate` ;
       faPlus.style.color=`#fff`;
       
       
       setTimeout(()=>{
           
        plus.className=plus.className.replace(`animate`,``);
        faPlus.style.color=`grey`;
       },1000);
         
     };// End of case3.
   
      
    
    
    
    
      
      
  //CASE 4: A () that adds effect to words.  its blinks from red to lime.
  
      setInterval(blink,10000);
      
      function blink(){
        wd.className=`blink`;
        ws.className=`blink`;
        hmd.className=`blink`;
        windDegree.className=`blink`;
        
        setTimeout(()=>{
         windDegree.className= windDegree.className.replace(`blink`,``);
        wd.className= wd.className.replace(`blink`,``);
        ws.className= ws.className.replace(`blink`,``);
        hmd.className= hmd.className.replace(`blink`,``);
            
        },4000);
    };// End of Case 4.
      
      
      
  };// General ()✅✅