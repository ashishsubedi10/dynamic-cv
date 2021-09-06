import { Col, Row, Typography, Image, Divider } from 'antd'
import Typed from 'react-typed';
import { v4 as uuidv4 } from 'uuid';
import Data from "../../data.json"
const { Title } = Typography


const Landing = () => {
    return (
        <div id="home" className="main-page landing-main" style={{ position: 'relative', textAlign: 'center', overflowX: 'hidden' }}>
            <Row>
                <Col xs={0} sm={0} md={2} lg={2}></Col>
                <Col xs={0} sm={0} md={8} lg={20}>
                    <Title className="landing-title" style={{ position: 'absolute', top: '100px', left: '40px', zIndex: '1', fontSize: '80px', textColor: '#1890ff' }}>{`${Data.firstName} ${Data.middleName} ${Data.lastName}`}</Title>
                    <Title className="landing-typed" level={2} key={uuidv4()} style={{ position: 'absolute', top: '170px', left: '80px', zIndex: '1' }}>
                        <Typed
                            strings={[`${Data.mainJobTitle}.`]}
                            typeSpeed={100}
                            backSpeed={90}
                            loop
                        />
                    </Title>
                    <Image style={{ marginLeft: '300px' }} className="my-image" width={750} height={540} src={Data.imageUrl} alt={Data.firstName} />
                </Col>
                <Col xs={0} sm={0} md={2} lg={2}></Col>
            </Row>
            <Divider />
        </div >
    )
}

export default Landing
