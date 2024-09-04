'use client';
import { useState } from 'react'
import { Suspense } from 'react'
import WeatherResults from './WeatherResults.server'

export default function ContentContainer() {
  const [input, setInput] = useState("Warsaw");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <input 
        type="text" 
        placeholder="Search.." 
        onChange={onChange} 
        className="input input-primary w-1/3"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <WeatherResults input={input} />
      </Suspense>
    </div>
  )
}