import React from 'react'

import {INews} from '../../models/example'

interface NewsItemProps {
    data: INews
}

export const NewsItem: React.FC<NewsItemProps> = ({data: {title,timestamp}}) => {
    return (
        <article>
            <div> 
                {`${title} from ${timestamp.toLocaleDateString()}`} 
            </div>
        </article>
    )
}