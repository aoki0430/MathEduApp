import React from 'react';
import Navbar from './navbar';
import Home from './home';
import Pytha1 from './pytha1';
import { BrowserRouter as Router, Route} from 'react-router-dom'
// :: 三平方の定理，ピタゴラスの定理
// :: Pythagorean Theorem


export default class Layout extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <Navbar />
                <Route exact path='/' component={Home}/>
                <Route path="/Pytha1" component={Pytha1}/>
            </div>
            </Router>
        );
        
    }
}
