import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';s
import NotFound from './pages/NotFound/NotFound';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route exact={true} path='/' component={Login}/>
            <Route exact path='/cadastrar' component={Cadastro}/>
            <Route exact path='/home' component={Home}/>
            <Route component={NotFound}/>
        </BrowserRouter>
    )
}

export default Routes;