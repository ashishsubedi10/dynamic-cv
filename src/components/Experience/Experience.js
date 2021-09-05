import { Typography, Row, Col, Timeline, Divider } from 'antd'
import { v4 as uuidv4 } from 'uuid';
import Data from "../../data.json"
const { Title } = Typography

const Experience = () => {
    return (
        <div id="experience" className="main-page">
            <Title className="main-title">EXPERIENCE</Title>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <Timeline>
                        {Data.workExperience.map((data) => {
                            return (
                                <Timeline.Item key={uuidv4()} color="green">{<strong>{data.title} at {data.institution}</strong>}
                                    <p>{`${data.startMonth} ${data.startYear} to ${data.endMonth && data.endMonth} ${data.endYear} `}</p>
                                    <div dangerouslySetInnerHTML={{ __html: data.details }} />
                                </Timeline.Item>
                            )
                        })}

                    </Timeline>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Divider />
        </div>
    )
}

export default Experience
