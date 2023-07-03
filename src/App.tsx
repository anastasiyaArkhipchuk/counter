import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";

function App() {
    let [count, setCount] = useState<number>(0)
    const CountPlus = () => {
        let newCount = count + 1
        setCount(newCount)
    }
    const CountReset = () => {
        setCount(0)
    }
    const CountPlusDisable = count === 5
    const CountResetDisable = count === 0
    return (
        <div className={'all'}>
            <div className={'appWrapper'}>
            <div className={count == 5
                ? 'titleDisable'
                : 'title'}> {count}
            </div>

            <div className={'buttons'}>
                <Button
                    title={"INC"}
                    callback={CountPlus}
                    disabled={CountPlusDisable}
                />
                <Button
                    title={"RESET"}
                    callback={CountReset}
                    disabled={CountResetDisable}
                />
            </div>
        </div>
        </div>
    );
}

export default App;
