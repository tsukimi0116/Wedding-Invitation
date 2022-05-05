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

    const optionArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
                        {Array.isArray(optionArr) &&
                            optionArr.map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))
                        }
                    </select>
                </label>
            </div>
            <button onClick={submitFunc}>submit</button>
        </div>
    )
}

export default Select