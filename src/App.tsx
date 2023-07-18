import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";

function App() {
    let [count, setCount] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    const CountPlus = () => {
        let newCount = count + 1
        setCount(newCount)
    }
    const CountReset = () => {
        setCount(0)
    }
    const CountPlusDisable = count === maxValue
    const CountResetDisable = count === startValue
    return (
        <div className={'all'}>
            <div className={'settingsAll'}>
                <div className={'settings'}>
                    <div className={'titleSettings'}>
                        <div>max value: <input type={"number"}/></div>
                        <div>start value: <input type={"number"}/></div>
                    </div>
                    <div className={'buttonsSettings'}>
                        <Button title={'SET'} callback={() => {
                        }} disabled={CountResetDisable}/>
                    </div>
                </div>

            </div>
            <div className={'counterAll'}>
                <div className={'counter'}>
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
        </div>

    );
}

export default App;
