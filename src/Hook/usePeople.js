import { useState, useEffect } from 'react';
import {getResource} from '../api/SWAPI'

export const usePeople = peopleQuery => { 
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [count, setCount] = useState(null)
    const [people, setPeople] = useState(null)  
    
    useEffect(() => { 
        setIsLoading(true) 
        getResource(peopleQuery)
            .then((res) => { 
                if(res.data) { 
                    let {data} = res  
                    setIsLoading(null) 
                    setCount(data.count)
                    setPeople(data.results) 
                } else if(res.response) {
                    setIsLoading(null)
                    setError('Error.Error status: ' + res.response.status)
                } else {
                    setIsLoading(null)
                    setError('Error:' + res.message)
                }
        })
    }, [peopleQuery])

    return [isLoading,error,people,count];
}