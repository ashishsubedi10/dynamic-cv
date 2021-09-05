import { Button, Col, Row, Typography, Image, Divider, List } from 'antd'
import Typed from 'react-typed';
import { v4 as uuidv4 } from 'uuid';
import Data from "../../data.json"
const { Title } = Typography


const AboutMe = () => {
    return (
        <div id="about" className="main-page">
            <Title className="main-title">ABOUT ME</Title>
            <Row>
                <Col xs={2} sm={2} md={2} lg={2}></Col>
                <Col xs={0} sm={0} md={8} lg={8} className="my-image">
                    <Image width={400} height={540} src={Data.imageUrl} alt={Data.firstName} />
                </Col>
                <Col xs={20} sm={20} md={12} lg={12}><Title level={2}>I am <span className="about-name">{`${Data.firstName} ${Data.middleName}  ${Data.lastName}`}</span> from <span style={{ color: '#1890ff' }}>{Data.country}</span>.</Title>
                    <Title level={2} key={uuidv4()} className="about-skill">
                        <Typed
                            strings={[`${Data.mainJobTitle}.`]}
                            typeSpeed={100}
                            backSpeed={90}
                            loop
                        />
                    </Title>

                    <>
                        <div dangerouslySetInnerHTML={{ __html: Data.aboutMe1 }} />
                        <div className="about-me2" dangerouslySetInnerHTML={{ __html: Data.aboutMe2 }} />
                        <Title level={3}>Basic Skills</Title>
                        <List
                            size="small"
                            dataSource={Data.basicSkills}
                            renderItem={item => (
                                <List.Item>
                                    {item}
                                </List.Item>
                            )}
                        />
                        <div><a href={Data.cvLink} rel="noreferrer" target="_blank">
                            <Button size="large" type="primary">Download CV</Button>
                        </a></div>
                    </>
                </Col>

                <Col span={2}></Col>
            </Row>
            <Divider />
        </div >
    )
}

export default AboutMe
