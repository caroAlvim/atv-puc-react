import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import '../../App.css';


const currentUser = () => firebase.auth().currentUser;


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dados: [],
            message: ''
        }

        this.getUsers = this.getUsers.bind(this);
        this.signOut = this.signOut.bind(this);
    }


    getUsers() {
        firebase.firestore().collection('usuarios').get().then((item) => {
            const state = this.state;

            item.forEach(element => {
                state.dados.push({
                    id: element.id,
                    nome: element.data().nome,
                    sobrenome: element.data().sobrenome,
                    email: element.data().email,
                    dataNascimento: element.data().dataNascimento
                });
            });
            this.setState(state)
        })
    };

    signOut(){
        let sucessfulSignOut = 'Logout realizado com sucesso!';

        firebase.auth().signOut().then(() => {
            this.setState({message: sucessfulSignOut})
            window.location.href='/'

        }).catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message
            console.log(errorMessage)
            console.log(errorCode)
        });
        
    };

    render() {
        return (
            <div>
                <h1> Usuários </h1>
                <button onClick={this.getUsers}> Listar </button>
                {
                    this.state.dados.map((item) => {
                        return(
                            <div key={item.id}>
                                <span> *** </span>
                                <h3>Id: {item.id}</h3>
                                <h4> Nome: {`${item.nome} ${item.sobrenome}`}</h4>
                                <p> Email: {item.email}</p>
                                <p> Data de nascimento: {item.dataNascimento}</p>
                            </div>
                        )
                    })
                }
                <button onClick={this.signOut}> Sair </button>  
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Home;