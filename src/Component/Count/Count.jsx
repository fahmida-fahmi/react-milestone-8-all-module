import { useEffect, useState } from 'react';

const Count = () => {
    const [steps, setSteps] = useState(0)
    const countSteps =() => {
        setSteps(steps +1)
        // console.log(steps);
    }
    useEffect(()=>{
        console.log(steps);
    },[steps])

    return (
        <div>
            <h2>This is my watch</h2>
            <p>Step : {steps}</p>
            <button onClick={countSteps}>De dour.......</button>
        </div>
    );
};

export default Count;