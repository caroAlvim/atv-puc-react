import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Button from '../../components/Button/buton';
import '../../App.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dados: [],
            user: [],
            message: ''
        }

        // this.getUser = this.getUser.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    // let user = firebase.auth().currentUser;
    // if(user !== null){
    //     const displayName = user.displayName
    //     return displayName;
    // }

    // getUser(){
    //     const user = firebase.auth().currentUser;
    //     if(user !== null){
    //         displayName = user.displayName
    //     }


        
        // ().then((user) => {
        //     const state = this.state;

        //     user.forEach(item => {
        //         state.user.push({
        //             id: item.data().id,
        //             name: item.data().nome,
        //             email: item.data().email
        //         })
        //     })
        //     this.setState(state)
        // });
        
        // if (user !== null) {
        // return user.displayName;
        // }
    // }

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
            <div className="App">
                <Button buttonOnClick={this.signOut}> Sair </Button>  
                <h1>{this.state.message}</h1>
                <h1> Usuários </h1>
                {/* <h2>Bem vindo, {displayName} </h2> */}
                {/* <button onClick={this.getUser}> oi </button>
                {this.state.user.map((u) => {
                    return(
                        <h2>Bem vindo, {u.name} </h2>
                    )
                })} */}
                <Button buttonOnClick={this.getUsers}> Listar </Button>
                {
                    this.state.dados.map((item) => {
                        return(
                            <div key={item.id}>
                                <h4>Id: {item.id}</h4>
                                <h4> Nome: {`${item.nome} ${item.sobrenome}`}</h4>
                                <p> Email: {item.email}</p>
                                <p> Data de nascimento: {item.dataNascimento}</p>
                                <span> *** </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home;