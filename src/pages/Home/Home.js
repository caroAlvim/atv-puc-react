import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import '../../App.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dados: []
        }

        this.getUsers = this.getUsers.bind(this);
    }


    getUsers() {
        firebase.firestore().collection('usuarios').get().then((item) => {
            const state = this.state;

            item.forEach(element => {
                state.dados.push({
                    id: element.id,
                    nome: element.data().nome,
                    email: element.data().email
                });
            });
            this.setState(state)
        })
    }

    render() {
        return (
            <div>
                <h1> Usuários </h1>
                <button onClick={this.getUsers}> get </button>
                {
                    this.state.dados.map((item) => {
                        return(
                            <div>
                                <h3> Nome: {item.nome}</h3>
                                <p> Email: {item.email}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home;