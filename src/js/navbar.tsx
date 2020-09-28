import React from 'react';
import {Route, Link } from 'react-router-dom';
import Electron from '../animation/electron'
// :: 三平方の定理，ピタゴラスの定理
// :: Pythagorean Theorem


export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <h1>this is navbar!!!!</h1>
                <p>powered by uji, hatta, aoki</p>
                <p><Link to="/">this is home</Link></p>
                <p><Link to="/Pytha1">this is pytha1</Link></p>
                <h2>Electron test</h2>
                <Electron />
            </div>
        );
    }
}