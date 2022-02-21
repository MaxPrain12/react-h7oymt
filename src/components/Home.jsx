import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', correo: '', nombre: '' };
    this.login = this.login.bind(this);
  }

  login() {
    var encontrado = false;
    Usuarios.map((item) => {
      if (
        item.correo === this.valorCorreo.value &&
        item.contraseña === this.valorContraseña.value
      ) {
        this.setState({
          user: item.usuario,
          password: item.contraseña,
          correo: item.correo,
          nombre: item.nombre,
        });
        localStorage.setItem('user', item.usuario);
        localStorage.setItem('password', item.contraseña);
        localStorage.setItem('nombre', item.nombre);
        localStorage.setItem('correo', item.correo);
        localStorage.setItem('imagen', item.imagen);
        encontrado = true;
      }
    });
    if (!encontrado) {
      alert('El usuario o la contraseña son erróneos.');
    }
  }

  /*Se ejecuta la primera vez que se ejecuta el componente*/
  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  render() {
    if (
      this.state != null &&
      this.state.user != null &&
      this.state.user != ''
    ) {
      return (
        <div className="main-site">
          <h1>¡Bienvenido {this.state.user}!</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>¡Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo electrónico"
                  ref={(correo) => (this.valorCorreo = correo)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={(contraseña) => (this.valorContraseña = contraseña)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Entrar
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}
export default Home;
