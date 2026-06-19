import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log("ABC");
    }, [count]);
    return (
        <div>
            {count}
            <button onClick={() => setCount(count+1)}>ADD</button>
        </div>
    )
}

export default Counter