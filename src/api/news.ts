import {INews} from '../models/example'

const fakeData = [
    {
        id: 1,
        title: 'hello',
        timestamp: new Date('12-12-2019')
    }
]

interface T {
    status: number,
    data: INews[],
    error?: string
}

export const getData = (): Promise<T> => {
    const promise = new Promise<T>(resolve => {
        resolve({
            status: 200,
            data:fakeData
        })
    })
    return promise
}

