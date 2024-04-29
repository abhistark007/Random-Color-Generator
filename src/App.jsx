
import { useState } from 'react'
import './App.css'

function App() {

  const [typeOfColor,setTypeOfColor]=useState('hex');
  const [color,setColor]=useState('#000000');

  function randomColorUtility(length){
    return Math.floor(Math.random()*length);
  }
  
  function handleCreateRandomHexColor(){
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor="#";

    for(let i=0;i<6;i++){
      hexColor+=hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
    console.log(color);
  }

  function handleCreateRandomRgbColor(){
    const r= randomColorUtility(256);
    const g=randomColorUtility(256);
    const b=randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  }

  return (
   <div style={{background:color}} 
   className='min-h-screen w-full flex flex-col'>
      <div className='flex gap-2 text-white mx-auto mt-5'>
        <button onClick={()=>setTypeOfColor('hex')} className='bg-purple-500 p-2'>Create Hex Color</button>
        <button onClick={()=>setTypeOfColor('rgb')} className='bg-purple-500 p-2'>Create RGB Color</button>
        <button onClick={
          typeOfColor==='hex'?handleCreateRandomHexColor:handleCreateRandomRgbColor
        } 
        className='bg-purple-500 p-2'>Generate Random Color</button>
      </div>
      <div className='flex flex-col gap-10 m-7 items-center mx-auto text-white text-5xl '>
        <div>{typeOfColor}</div>
        <div>{color}</div>
      </div>
   </div>
  )
}

export default App
