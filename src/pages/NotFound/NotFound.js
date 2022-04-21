import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/buton';
import Image from '../../assets/errorImage.gif';
import '../../App.css';

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="App">
                <h1>Ops! Esta página não existe!</h1>
                <img  classname="App-img" src={Image} alt='error msg' />
                <Link to="/"><Button>Voltar</Button></Link>
            </div>
        )
    }
}

export default NotFound;
