import { Component } from 'react';
import firebase from 'firebase/app';
import '../../App.css';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      email: ''
    }
    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    firebase.firestore().collection('usuarios').add({
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      email: this.state.email
    })
    
    // adicionar msg de sucesso na gravação
    // redirecionar para login

  }

  render() {
    return (
      <div>
        <h1>Novo Cadastro</h1>
        <input type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })} /> <br />
        <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} /> <br />
        <input type="text" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} /> <br />
        <button onClick={this.addUser}>Cadastrar</button> <br /><br /><br />
      </div>
    )
  }

}

export default Cadastro;