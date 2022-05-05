import React, { useState } from 'react';
import Axios from "axios"

const Select = () => {

    const [name, setName] = useState('')
    const [num, setNum] = useState('#')

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const numHandler = (event) => {
        setNum(event.target.value);
    }

    const submitFunc = async () => {
        const obj = { name, num }
        const result = await Axios.post('https://sheet.best/api/sheets/dc8beae0-b981-4ad9-b2ba-d11ae4b8f9d2', obj)
        try {
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='container'>
            <div className='first'>
                <label htmlFor="">
                    姓名
                    <input
                        value={name}
                        onChange={nameHandler}
                        type="text" />
                </label>
            </div>

            <div>
                <label htmlFor="">
                    參加人數
                    <select name="num" id=""
                        value={num}
                        onChange={numHandler}>
                        <option value="#" disabled>請選擇參加人數</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
            </div>
            <button onClick={submitFunc}>submit</button>
        </div>
    )
}

export default Select