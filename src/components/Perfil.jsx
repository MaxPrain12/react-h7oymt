import React from 'react';
import {
  InputGroup,
  FormControl,
  InputGroup,
  Container,
  Card,
  Col,
  Row,
  Button,
} from 'react-bootstrap';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
  }

  cerrarSesion() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <Container className="justify-content-md-center">
        <br />
        <Row className="justify-content-md-center">
          <Col lg={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={localStorage.getItem('imagen')} />
            </Card>
          </Col>
          <Col lg={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Usuario</InputGroup.Text>
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder={localStorage.getItem('user')}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Nombre</InputGroup.Text>
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder={localStorage.getItem('nombre')}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Correo </InputGroup.Text>
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder={localStorage.getItem('correo')}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={{ span: 3, offset: 3 }}>
            <Button variant="primary" onClick={this.cerrarSesion}>
              Cerrar sesión
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Perfil;
