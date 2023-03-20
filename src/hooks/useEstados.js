import { useRef, useState } from "react"


export function useLoading() {
    const [info, setInfo] = useState(" ")
    const [showLoading, setShowLoading] = useState(false)
    const [loading, setLoading] = useState(true)
    const InputValue = useRef("")
    const [imageUrl, setImageUrl] = useState()

  
    return { info, setInfo, showLoading, setShowLoading,loading,setLoading, InputValue, loading, imageUrl, setImageUrl}
  
  }