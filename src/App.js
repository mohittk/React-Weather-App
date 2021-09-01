

import React, {useState} from 'react';


const api = {
  key: "2bbf10c8b7892cc5cd25da4fb5cb5c57",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query,setQuery] = useState('');
  const [weath,setWeath] = useState({});

  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const search  = evt =>{
    if(evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result =>{
        
         setWeath(result);
         setQuery('');
         console.log(result);
      });

    }
  }

 



  const dateCreate = (d) =>{
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","DeC"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
   


    return `${day} ${date} ${month} ${year}`


  }
  return (
    <div className="default">
     <script src="tilt.jquery.js"></script>
  
    
    <div className={(typeof weath.main != "undefined") ? ((weath.main.temp > 20) ? 'app warm' : 'app'): 'default'}>
      
      <main>
      <h1>Weather React App By Mohit</h1>
        <div className="search-ka-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter the city name here..."
            onChange={e => setQuery(e.target.value) }
            value={query}
            onKeyPress={search}
          ></input>
          
        </div>

        <div className="intro">
          <h3> Made with 💗 in React</h3>
        </div>

      
        {(typeof weath.main != "undefined")? (
       <>
         <div className="location-ka-box">
          <div className="location"> {weath.name},{weath.sys.country} </div>
          <div className="date">{dateCreate(new Date())}</div>
          
        </div>

        <div className="weather-ka-box">
          <div className="temp">
            {Math.round(weath.main.temp)}°c
           
          </div>
          
        </div>

        <div className="weather-stat">
          <div className="stat">
            {weath.weather[0].main}
        </div>
        </div>
        </>
        ):('')}

 
       
      </main>
    </div>
    </div>
  );
}

export default App;