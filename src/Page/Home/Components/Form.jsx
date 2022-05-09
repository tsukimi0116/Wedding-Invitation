import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setEmail, setNum } from '../../../Features/num/info'
import Axios from "axios"

const Form = () => {

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
        <div className='Form'>
            <img src="https://fakeimg.pl/280x260/" alt='' />
            <div className='inputWrapper'>
                <input
                    placeholder='Name'
                    value={name}
                    onChange={nameHandler}
                    type="text" />
                <input
                    placeholder='E-mail'
                    value={email}
                    onChange={emailHandler}
                    type="text" />
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
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button onClick={submitFunc}>submit</button>
            </div>

        </div>
    )
}

export default Form