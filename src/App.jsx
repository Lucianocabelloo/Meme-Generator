import { useRef, useState } from 'react'
import './App.css'
import Meme from './Components/Meme'
import { useLoading } from './hooks/useEstados'





function App() {

const {setInfo,setLoading,setShowLoading,info,InputValue, loading, showLoading} = useLoading()

//   useEffect(() => {
// fetch(`https://catfact.ninja/fact`)
// .then(res => res.json())
// .then(response => {
//   const { fact } = response
//   const ThreeWords = fact.split(" ", 3).join(" ")
//   setInfo(ThreeWords)
// })
//   }, [])
  
  


  const handleSubmit = (event) => {
    event.preventDefault()
    const generator = InputValue.current.value
    setInfo(generator)
    setShowLoading(true)
    setLoading(false)

  }
  
  return (
    <div className="container">
      <h1 className='tittle'>Cat Meme</h1>
      {
        loading 
        ? <h2 className='Loading-h2'>Crea tu meme</h2>
        : <Meme info={info} showLoading={showLoading}/> 
      }
     <form className='form-container' onSubmit={handleSubmit} >
      <input ref={InputValue} placeholder='Its Fine, OMG HI' type="text" />
      <button> Crear Meme </button>
     </form>
      
    </div>
  )
}

export default App
