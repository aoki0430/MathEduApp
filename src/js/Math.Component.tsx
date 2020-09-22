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
                    <div className="main">
                        <img className="img_l" src={this.props.img} alt={'No Images'}/>
                        <$$>{this.props.tex}</$$>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="expytha">
                    <div className="main">
                        <img className="img_l" src={this.props.img} alt={'No Images'}/>
                        <$$>{this.props.tex}</$$>
                    </div>
                    <div className="supplement">
                        <img className="img_r" src={this.props.addingImg} alt={'No Images'}/>
                        <$>{this.props.adding}</$>
                    </div>
                </div>
            );
        }
    }
}

export default ExPytha;
