import React, { useEffect } from 'react'
import { useReducer } from 'react';

export default function StopWatchSecond(props) {

    function onDispatch(state, action) {
        switch (action.nidhal) {
            case 'start': return { ...state, isRunning: true };
            case 'stop': return { ...state, isRunning: false };
            case 'reset': return { time: 0, isRunning: false };
            case 'step': return { ...state, time: state.time + 1 };
        }
    }

    const initialState = {
        isRunning: false,
        time: 0
    }

    const [state, dispatch] = useReducer(onDispatch, initialState);

    useEffect(() => {
        if (state.isRunning) {
            const intervalid = setInterval(() => {
                dispatch({ nidhal: 'step' })
            }, 1000);
            console.log(intervalid);
            return () => clearInterval(intervalid);
        }

    }, [state.isRunning])

    return (
        <>
            <h3> {state.time}</h3>
            <button style={{ margin: '0 20px' }} className='btn btn-success' onClick={() => dispatch({ nidhal: 'start' })}>Start</button>
            <button style={{ margin: '0 20px' }} className='btn btn-primary' onClick={() => dispatch({ nidhal: 'stop' })}>Stop</button>
            <button style={{ margin: '0 20px' }} className='btn btn-danger' onClick={() => dispatch({ nidhal: 'reset' })}>Reset</button>
        </>
    )
}


