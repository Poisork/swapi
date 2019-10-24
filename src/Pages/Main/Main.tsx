import React from 'react'
import {AppProps} from '../../interfaces'
import { News } from './News'

export const Main:React.FC<AppProps> = (props) => {
    return (
        <div>
            <p>{`${props.greeting} ${props.name}`}</p>
            {props.children}
            {<News />}
        </div>
    )
}