import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contato from './pages/Contato/Contato';
import NotFound from './pages/NotFound/NotFound';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route exact={true} path='/' component={Home}/>
            <Route exact path='/contato' component={Contato}/>
            <Route component={NotFound}/>
        </BrowserRouter>
    )
}

export default Routes;