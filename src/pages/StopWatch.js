
import { useReducer } from 'react';
import { useEffect, useRef } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'start':
            return { ...state, isRunning: true };
        case 'stop':
            return { ...state, isRunning: false };
        case 'reset':
            return { isRunning: false, time: 0 };
        case 'tick':
            return { ...state, time: state.time + 1 };
        default:
            throw new Error();
    }
}

export default function StopWatch() {
    const initialState = {
        isRunning: false,
        time: 0
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef();


    useEffect(() => {
        console.log("useEffect");
        if (!state.isRunning)
            return;

        idRef.current = setInterval(() => { dispatch({ type: 'tick' }) }, 1000);
        return () => {
            console.log(idRef.current);
            clearInterval(idRef.current);
            //idRef.current = 0;
        };
    }, [state.isRunning]);


    return (
        <div>
            {state.time}s
            <button style={{ margin: '0 20px' }} className='btn btn-success' onClick={() => dispatch({ type: 'start' })}>Start</button>
            <button style={{ margin: '0 20px' }} className='btn btn-primary' onClick={() => dispatch({ type: 'stop' })}>Stop</button>
            <button style={{ margin: '0 20px' }} className='btn btn-danger' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )

}