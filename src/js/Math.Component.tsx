// :: Math.Component.js
// :: 数式等の表示に関する components
// :: ExPytha :: Pythagorean Theorem の例示のためのクラス

import React from 'react';
// import Tex from './Tex.Component';
import './../css/math.component.css';
import TeX from '@matejmazur/react-katex';
import {$, $$} from './Tex.Component';

type ExPythaProps = {
    img: string;
    addingImg?: string;
    adding?: string;
    tex: string;
}

class ExPytha extends React.Component<ExPythaProps, {}> {
    render(){
        console.log(this.props.adding);
        if(!this.props.adding){
            return(
                <div className="expytha">
                    <div className="expythaImg"><img src={this.props.img} alt={'No Images'}/></div>
                    <$$>{this.props.tex}</$$>
                </div>
            );
        }else{
            return(
                <div className="expytha">
                    <div className="main">
                    <div className="expythaImg"><img src={this.props.img} alt={'No Images'}/></div>
                        <$$>{this.props.tex}</$$>
                    </div>
                    <div className="supplement">
                        <div className="expythaImg"><img src={this.props.addingImg} alt={'No Images'}/></div>
                        <p>{this.props.adding}</p>
                    </div>
                </div>
            );
        }
    }
}

export default ExPytha;
