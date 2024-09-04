// WeatherResults.server.tsx
import { cache } from 'react'

interface WeatherInterface {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string
      icon: string;
    }
    wind_kph: number;
    wind_dir: string;
  };
  
}

interface Props {
  input: string;
}

const getWeather = cache(async (input: string) => {
  try {
  if (input != undefined)
  {
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=&q=${input}`, { cache: 'no-store' })
  return res.json()
}
} catch {
  null
}
})

export default async function WeatherResults({ input }: Props) {
  const weather: WeatherInterface = await getWeather(input)

  return (
    <div className="mt-10 flex flex-col bg-primary text-black text-4xl p-5 font-bold rounded-3xl">
      <h1 className='text-center '>{weather.location.name}</h1>
      <div className='flex flex-column justify-center items-center'>
        <div className='flex items-center'>
        <img src={weather.current.condition.icon} alt="weather icon" className='h-16 w-16'/>
        <div>{weather.current.condition.text}</div>
        <div className="ml-3">{weather.current.temp_c} °C</div>
        </div>
        <div className='flex'>
        <div className="ml-3">Wind: {weather.current.wind_kph} km/h</div>
        <div className="ml-3">Direction: {weather.current.wind_dir}</div>
        </div>
      </div>
    </div>
  )
}