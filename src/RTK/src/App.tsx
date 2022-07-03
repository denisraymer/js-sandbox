import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { loginAsync } from "./features/profile/profile.reducer"
import { useAppDispatch } from "./app/hooks"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      loginAsync({
        username: "admin",
        password: "J0CwOWcORc",
      })
    )
    console.log("TEST")
  }, [])

  return (
    <Container>
      <Row>
        <Col>HUI</Col>
      </Row>
    </Container>
  )
}

export default App
