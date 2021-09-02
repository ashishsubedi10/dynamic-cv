import { Progress, Typography, Row, Col, Divider } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import Data from "../../data.json"
const { Title } = Typography

const Skills = () => {
    return (
        <div id="skills" className="main-page">
            <Title className="main-title">Skills</Title>
            <Row className="skills-progress">
                {Data.skills.map((data) => {
                    return (
                        <Col key={uuidv4()} xs={20} sm={20} md={10} lg={10} className="progress">
                            <Title level={4}>{data.name}</Title>
                            <Progress percent={data.percentage} />
                        </Col>
                    )
                })}

            </Row>
            <Divider />
        </div>
    )
}

export default Skills
