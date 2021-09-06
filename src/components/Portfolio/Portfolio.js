import { Col, Row, Typography, Card } from 'antd'
import Data from "../../data.json"
const { Meta } = Card;
const { Title } = Typography
const Portfolio = () => {
    return (
        <div id="portfolio" className="main-page">
            <Title className="main-title">PORTFOLIO</Title>
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {Data.portfolio.map(data => {
                    return (
                        <Col span={5} style={{ marginLeft: '20px' }}>
                            <a href={data.appUrl} target="_blank" rel="noreferrer">
                                <Card hoverable
                                    style={{ width: 250, height: 370 }}
                                    cover={<img style={{ width: 250, height: 280 }} alt="example" src={data.imgUrl} />}>
                                    <Meta title={data.title} description={data.appUrl} />
                                </Card>
                            </a>
                        </Col>
                    )
                })}
            </Row>

        </div>
    )
}

export default Portfolio
