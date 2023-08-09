import React, { useEffect, useState } from 'react'
const StopWatch = () => {
    const [hours, setHours] = useState(0)
    const [mins, setMins] = useState(0)
    const [second, setSecond] = useState(0)
    const [stop, setStop] = useState(false)
    const [id, setId] = useState(false)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        if (stop) {
            setId(setInterval(() => {
                setSecond((second) => second + 1)
            }, 1000))
            console.log(id);
        }

        else {
            clearInterval(id)
        }
    }, [stop])

    useEffect(() => {
        if (second >= 60) {
            setMins(mins + 1)

            setSecond(0)
        }
    }, [second])

    useEffect(() => {
        if (mins == 59 && second == 60) {
            setMins(0)
            setSecond(0)
            setHours(hours + 1)
        }
    }, [mins, second])


    const handleStart = () => {
        setStop(true)
        console.log(time.getTime());
    }
    const handleStop = () => {
        setStop(false)


    }
    const handleReset = () => {
        setHours(0)
        setMins(0)
        setSecond(0)
    }


    return (
        <section className='flex justify-center items-center bg-gray-700 h-[100vh] overflow-hidden flex-col gap-6'>
            <article className='flex gap-4'>
                <h2 className='text-5xl font-semibold'>{hours}</h2>
                <h2 className='text-5xl font-semibold'> : {mins}</h2>
                <h2 className='text-5xl font-semibold'>: {second}</h2>
            </article>
            <article>
                <button className='bg-emerald-400 px-4 text-3xl font-semibold py-2 rounded-lg hover:bg-emerald-500 hover:text-white' onClick={handleStart} >Start</button> <button className='bg-red-400 px-4 text-3xl font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white' onClick={handleStop}>Stop</button> <button className='bg-blue-400 px-4 text-3xl font-semibold py-2 rounded-lg hover:bg-blue-500 hover:text-white' onClick={handleReset}>Reset</button>

            </article>
        </section>
    )
}

export default StopWatch