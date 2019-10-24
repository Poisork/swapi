import React from 'react'
import ReactDOM from 'react-dom'
import {act} from 'react-dom/test-utils'
import Pagination from './Pagination'

let container

beforeEach(() => {
    container = document.createElement('div') 
    document.body.appendChild(container)
})

afterEach(() => { 
    document.body.removeChild(container)
    container = null
})

describe('Pagination tests', () => {
    const count = 87
    const activePage = 3
    const pageSize = 10

    it('checking active page number', () => { 
        act(()=>{
            ReactDOM.render(<Pagination pageSize={pageSize} activePage={activePage} count={count}/>,container)
        }) 
        const activeParagraph = container.querySelector('.activePage') 
        expect(activeParagraph.textContent).toBe('3') 
    })

    it('checking the correctness of calculating the number of pages', () => { 
        act(()=>{
            ReactDOM.render(<Pagination pageSize={pageSize} activePage={activePage} count={count}/>,container)
        }) 
        const paragraphs = container.querySelectorAll('p') 
        expect(Math.ceil(count / pageSize)).toBe(paragraphs.length)
    })
})

