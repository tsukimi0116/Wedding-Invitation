import React from 'react'
import Axios from "axios"
import { TreeSelect } from 'antd'
import AnimatedPage from '../Animation/AnimatedPage'

const { TreeNode } = TreeSelect

const Form = () => {


    // const submitFunc = async () => {
    //     const sheetObject = { name, email, num }
    //     const result = await Axios.post('https://sheet.best/api/sheets/dc8beae0-b981-4ad9-b2ba-d11ae4b8f9d2', sheetObject)
    //     try {
    //         console.log(result)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const optionArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <AnimatedPage>
            {/*<div className='Form'>*/}
            {/*    <div className='inputWrapper'>*/}
            {/*        <input*/}
            {/*            placeholder='Name'*/}
            {/*            value={name}*/}
            {/*            onChange={nameHandler}*/}
            {/*            type="text" />*/}
            {/*        <input*/}
            {/*            placeholder='E-mail'*/}
            {/*            value={email}*/}
            {/*            onChange={emailHandler}*/}
            {/*            type="text" />*/}
            {/*        <TreeSelect*/}
            {/*            showSearch*/}
            {/*            style={{ width: '220px', backgroundColor: '#d5c5c5' }}*/}
            {/*            value={num}*/}
            {/*            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}*/}
            {/*            defaultValue="#"*/}
            {/*            allowClear*/}
            {/*            treeDefaultExpandAll*/}
            {/*            onChange={numHandler}*/}
            {/*        >*/}
            {/*            <TreeNode value="#" title="請選擇人數" disabled>*/}
            {/*                {Array.isArray(optionArr) &&*/}
            {/*                    optionArr.map((value, index) => (*/}
            {/*                        // <option key={index} value={value}>{value}</option>*/}
            {/*                        <TreeNode key={value} value={value} title={value} />*/}
            {/*                    ))*/}
            {/*                }*/}
            {/*            </TreeNode>*/}
            {/*        </TreeSelect>*/}

            {/*        <textarea name="" id="" cols="30" rows="10"></textarea>*/}
            {/*        <button onClick={submitFunc}>submit</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </AnimatedPage>
    )
}

export default Form