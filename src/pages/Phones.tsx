import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import PhoneItems from "../data/phoneitems.json"

export function Phones() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {PhoneItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
