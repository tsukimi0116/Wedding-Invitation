import {useState, useRef} from 'react'
import Axios from "axios"
import {Form, Input, Select, Button, message} from 'antd'

const {Option} = Select;

export const RsvpForm = () => {

    const [buttonLoading, setButtonLoading] = useState(false);

    const submitFunc = async (value) => {
        setButtonLoading(true);
        let notFillIn = false;
        let checkData = Object.entries(value)
        checkData.forEach(elm => {
            if (elm[1] === undefined || elm[1] === "#") {
                notFillIn = true;
            }
        })

        if (notFillIn) {
            message.warn("請將表單填寫完畢(╬▔皿▔)╯")
            setButtonLoading(false);
            return;
        }

        try {
            message.loading("正在送出表單，請稍後(｡･∀･)ﾉﾞ")
            await Axios.post('https://sheet.best/api/sheets/dc8beae0-b981-4ad9-b2ba-d11ae4b8f9d2', value);
        } catch (error) {
            message.error("表單送出失敗（；´д｀）ゞ")
        } finally {
            message.success("表單送出成功ヾ(•ω•`)o")
            setButtonLoading(false);
        }
    }

    return (
        <div id="showOpacity">
            <Form
                className="info__invite-form"
                onFinish={(value) => submitFunc(value)}
            >
                <Form.Item
                    label="姓名"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: '請輸入姓名!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: '請輸入Email!',
                        },
                        {
                            pattern: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
                            message: '請輸入正確格式!'
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="參加人數(含填表人)"
                    name="num"
                    initialValue="#"
                    rules={[
                        {
                            required: true,
                            message: '請選擇參加人數!',
                        }
                    ]}
                >
                    <Select>
                        <Option value="#" disabled>請選擇參加人數</Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                        <Option value="10">10</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        className="info__invite-button"
                        loading={buttonLoading}
                    >送出</Button>
                </Form.Item>
            </Form>
        </div>

    )
}