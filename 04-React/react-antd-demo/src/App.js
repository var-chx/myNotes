import { Button, Row, Col } from 'antd'
function App() {
  return (
    <div className="App">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Row>
            <Col span={24}>col</Col>
        </Row>
        <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>
    </div>
  );
}

export default App;