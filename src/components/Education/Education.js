import { Col, Row, Typography, Divider } from 'antd'
import { Collapse } from 'antd';
import Data from "../../data.json"
const { Panel } = Collapse;
const { Title } = Typography
const Education = () => {
    return (
        <div id="education" className="main-page">
            <Title className="main-title">Education</Title>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <Collapse defaultActiveKey={['0']} className="collapse-main" accordion>
                        {Data.education.map((data, i) => {
                            return (
                                <Panel className="collapse-pannel" header={<strong>{data.title}</strong>} key={i}>
                                    <p>{data.institution}</p>
                                    <p>{`${data.startYear} - ${data.endYear}`}</p>
                                    <div dangerouslySetInnerHTML={{ __html: data.details }} />
                                </Panel>
                            )
                        })}
                    </Collapse>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Divider />
        </div>
    )
}

export default Education
