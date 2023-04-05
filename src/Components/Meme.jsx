import React, { useState, useEffect } from 'react'
import { useLoading } from '../hooks/useEstados'

const Meme = ({info, showLoading}) => {

    const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
    const {imageUrl, setImageUrl, loading, setLoading} = useLoading()



    useEffect(() => {
        if (info === " ") {
          return
        } else {
          try {
            fetch(`https://cataas.com/cat/says/${info}?size=50&color=red&json=true`)
            .then(response => response.json())
            .then(data => {
              const { url } = data
              setImageUrl(url)
              setLoading(false)
            })
            
          } catch (error) {
            console.log("La api no se encuentra Disponible")
          }
          
        }
    
      }, [info])
  return (
    <div>
    {
        showLoading && loading ?
        <div className="loading-message">Loading...</div>
        :
        <img className='img-container' src={imageUrl && `${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt="" />
    }
</div>
  )
}

export default Meme