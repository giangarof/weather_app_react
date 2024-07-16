import { useEffect, useState } from 'react'

import './App.css'
import Card from './Components/Card'
import SearchBar from './Components/SearchBar'
function App() {
  const [weather, setWeather] = useState();
  const [term, setTerm] = useState('Seattle')
  const [isLoading, setIsLoading] = useState()
  const [err, setErr] = useState()

  const access_key = import.meta.env.VITE_ACCESS_KEY
  
  useEffect(() => {
    
    const fetchAPI = async() => {
      setErr(false)
      
      try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${access_key}&q=${term}`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        if(res.status != 200){
          setErr(true)
          setTerm('')
        } else {
          setWeather(data)
          // setErr(false)
        }

      } catch (error) {
        console.log(error)
      }
    }
    fetchAPI()
  }, [term])


  // fetchAPI()
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setWeather(data)
  //       setIsLoading(false)
  //     })
  //     .catch(err => console.error(err))
  // }, [access_key, city, term])

  return (
    <>
      <div>
        <h1>Weather App</h1>
        <p>With Weatherapi.com API</p>
        <SearchBar lookup={(term) =>setTerm(term)}/>

        {err && <p> Your query might be incorrect, try again.</p>} 
        {weather && !err && ( 
          <Card 
            name={weather.location.name} 
            country={weather.location.country} 
            icon={weather.current.condition.icon}
            condition={weather.current.condition.text}
            tempC={weather.current.temp_c}
            tempF={weather.current.temp_f}
            tempLikeC={weather.current.feelslike_c}
            tempLikeF={weather.current.feelslike_f}
            time={weather.location.localtime}
          />
          
        )} 
      </div>
    </>
  )
}

export default App
