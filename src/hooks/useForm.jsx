import { useState } from "react"


const useForm = () => {

    const [{color,colorScheme},setForm]= useState(   {color:"#F55A5A",colorScheme:"monochrome"   } )
    const handleChange= ({target:{name,value}})=>setForm(prev=>({...prev,[name]:value}))
    

  return {color,colorScheme,handleChange}
}

export default useForm