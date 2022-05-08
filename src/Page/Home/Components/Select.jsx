import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setEmail, setNum } from '../../../Features/num/info'
import Axios from "axios"

const Select = () => {

    const dispath = useDispatch()
    const name = useSelector((state) => state.info.name)
    const email = useSelector((state) => state.info.email)
    const num = useSelector((state) => state.info.num)

    const nameHandler = (event) => {
        dispath(setName(event.target.value))
    }

    const emailHandler = (event) => {
        dispath(setEmail(event.target.value))
    }

    const numHandler = (event) => {
        dispath(setNum(event.target.value))
    }

    const submitFunc = async () => {
        const sheetObject = { name, email, num }
        const result = await Axios.post('https://sheet.best/api/sheets/dc8beae0-b981-4ad9-b2ba-d11ae4b8f9d2', sheetObject)
        try {
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    const optionArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className='container'>
            <div className='nameWrapper'>
                <label htmlFor="nameInput">姓名</label>
                <input
                    id="nameInput"
                    value={name}
                    onChange={nameHandler}
                    type="text" />
            </div>
            <div className='emailWrapper'>
                <label htmlFor="emailInput">電子郵件</label>
                <input
                    id="emailInput"
                    value={email}
                    onChange={emailHandler}
                    type="text" />
            </div>

            <div>
                <label htmlFor="numWrapper">
                    參加人數
                    <select name="num" id="numWrapper"
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