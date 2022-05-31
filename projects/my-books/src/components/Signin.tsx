import { Row, Col, Input, Button } from "antd";

export default function Signin() {
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div>My books</div>
            <div>Please Note Your Opinion</div>
            <div />
            <div>
              Email
              <span> *</span>
            </div>
            <div>
              <Input
                placeholder="Email"
                autoComplete="email"
                name="email"
              ></Input>
            </div>
            <div>
              Password
              <span> *</span>
            </div>
            <div>
              <Input
                type="password"
                autoComplete="current-password"
                name="email"
              ></Input>
            </div>
            <div>
              <Button size="large">Sign In</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
