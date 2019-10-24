import React, { useState, useEffect } from 'react'
import {NewsItem} from './NewsItem'
import { INews } from '../../models/example'
import { getData } from '../../api/news'

export const News:React.FC = () => {
    const [news,setNews] = useState<INews[]>([])
    console.log(news)
    useEffect(()=>{
        getData()
            .then(res => {
                setNews(res.data)
             })
             .catch(err => console.error(err))
    },[])

    return (
        <div> 
            {news.map(item => (
                <NewsItem data={item} key={item.id} />
            ))}
        </div>
    )
}