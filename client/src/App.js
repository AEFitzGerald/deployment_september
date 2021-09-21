import PetForm from './components/PetForm';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import PetEdit from './components/PetEdit';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';


function App() {


    return (
        <BrowserRouter>
            
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Pet Shelter</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                                <Link className= "nav-link" to= "/">Home</Link>
                                <Link className= "nav-link" to= "/add">Add Pet</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/">
                    <PetList/>
                </Route>
    
                <Route exact path="/add">
                    <PetForm/>
                </Route>
            
                <Route exact path="/pet/:id">
                    <PetDetail/>
                </Route>

                <Route exact path="/pet/edit/:id">
                    <PetEdit/>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App;