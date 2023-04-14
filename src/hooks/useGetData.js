import { useEffect, useState } from "react"

const useGetData = (url) =>{
    const [data ,setData] = useState([])
    const refetch = ""
    useEffect(()=>{
    fetch(url).then(response =>response.json())
    .then(data => setData(data.data))
    },[url,refetch])
    return [data,refetch]
}

export default useGetData