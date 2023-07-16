import { useState } from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';


function CounterPage({ initialCount }) {

    const [count, setCount] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0);


    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        setValueToAdd(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCount(count + valueToAdd);
    };

    return (
        <Panel className="m-3">
            <h1 className='text-lg'>Count is {count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label >Add a lot!</label>
                <input onChange={handleChange} value={valueToAdd || ''} type="number" className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );

}

export default CounterPage;