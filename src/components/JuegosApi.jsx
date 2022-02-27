import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';

class JuegosApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      thumbnail: '',
      short_description: '',
      genre: '',
      developer: '',
      tableData: [],
    };
  }
  async componentDidMount() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'ef78828829msh3836ec5eaae7449p1a3d7ejsnc85866e26dfb',
      },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tableData: data,
        })
      );
  }

  eventoclick(item) {
    this.setState({
      title: item.title,
      thumbnail: item.thumbnail,
      short_description: item.short_description,
      genre: item.genre,
      developer: item.developer,
    });
  }
  render() {
    return (
      <div className="main-site">
        <h1>JuegosAPI</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Genero</th>
                    <th>Desarrolladora</th>
                    <th>descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.title} </td>
                        <td>{item.genre} </td>
                        <td>{item.developer} </td>
                        <td>{item.short_description} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.thumbnail} />
                <Card.Body>
                  <Card.Title>{this.state.title}</Card.Title>
                  <Card.Text>
                    Desarrolladora: {this.state.developer}
                    <p />
                    {this.state.short_description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default JuegosApi;
