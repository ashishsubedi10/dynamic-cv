import { Row, Col, Form, Typography, Input, Button } from 'antd'
import Data from "../../data.json"
import { HomeFilled, PhoneFilled, MailFilled, DatabaseFilled } from '@ant-design/icons';


const { Title, Text } = Typography;

const Contact = () => {
    return (
        <div id="contact" className="main-page contact">
            <Title className="main-title">Contact Me</Title>
            <Row>
                <Col xs={2} sm={2} md={2} lg={2}></Col>
                <Col xs={20} sm={20} md={10} lg={10} >
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="fullname"
                        >
                            <Input placeholder="Full name" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                        >
                            <Input placeholder="Email Address" />
                        </Form.Item>

                        <Form.Item
                            name="message"
                        >
                            <Input.TextArea placeholder="Message" />
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col xs={20} sm={20} md={12} lg={10}>
                    <Row><Col span={2}></Col><MailFilled className="icon" /><Text className="contact-text" >{Data.email}</Text></Row>
                    <Row><Col span={2}></Col><HomeFilled className="icon" /><Text className="contact-text">{Data.address}</Text></Row>
                    <Row><Col span={2}></Col><PhoneFilled className="icon" /><Text className="contact-text">{Data.phone}</Text></Row>
                    <Row><Col span={2}></Col><DatabaseFilled className="icon" /><Text className="contact-text-last">{Data.dummyData}</Text></Row>
                </Col>

                <Col span={2}></Col>
            </Row>
        </div>
    )
}

export default Contact
