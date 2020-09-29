import React from 'react';
import ExPytha from './Math.Component';
import img_345 from './../img/img_345.png';
import img_11r2 from './../img/img_11r2.png';
import img_12r3 from './../img/img_12r3.png';
import img_square from './../img/img_square.png';
import img_regularTriangle from './../img/img_regularTriangle.png';
import img_pytha from './../img/img_pytha.png';
import anime_1_1 from './../img/anime_1_1.png';
import anime_1_2 from './../img/anime_1_2.png';
import anime_2_1 from './../img/anime_2_1.png';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import './../css/style.css';
import {$, $$} from './Tex.Component'
const _ = String.raw;

// :: 三平方の定理，ピタゴラスの定理
// :: Pythagorean Theorem

export default class Pytha1 extends React.Component{
    render(){
        return(
            <div>
                <h1>三平方の定理</h1>
                <h2>具体的な使い方</h2>
                <p>三平方の定理は，直角三角形で辺の長さを求めるときに役に立つ．三辺の内で，ある辺のみわからないときに，その辺の長さに求められる．</p>
                <div class="Example" >
                    <img src={} alt={'no image'}>
                    <p>直角三角形であるため，三平方の定理を適用すると，次が成り立つ．</p>
                    <$$>_`
                        a^2 + b^2 &= c^2 \\
                        4^2 + x^2 &= 5^2 \\
                        x^2 &= 5^2 - 4^2 \\
                        x^2 &= 25 - 16 \\
                        x^2 &= 9 \\
                        x &= \pm 3
                    `</$$>
                    <p>ここでは，<$>_`x`</$>は辺の長さなので，<$>_`x>0`</$>である．よって，<$>_`x`</$>として適切なのは，<$>_`3`</$>である． </p>
                    <$>_`x=3`</$>
                </div>
                <div class="Example" >
                    <img src={} alt={'no image'}>
                    <p>直角三角形であるため，三平方の定理を適用すると，次が成り立つ．</p>
                    <$$>_`
                        a^2 + b^2 &= c^2 \\
                        1^2 + 1^2 &= x^2 \\
                        x^2 &= 2 \\
                        x &= \pm \sqrt{2}
                    `</$$>
                    <p>ここでは，<$>_`x`</$>は辺の長さなので，<$>_`x>0`</$>である．よって，<$>_`x`</$>として適切なのは，<$>_`\sqrt{2}`</$>である． </p>
                    <$>_`x=\sqrt{2}`</$>
                </div>
                <div class="Example">
                    <img src={} alt={'no image'}>
                    <p>直角三角形であるため，三平方の定理を適用すると，次が成り立つ．</p>
                    <$$>_`
                        a^2 + b^2 &= c^2 \\
                        x^2 + 1^2 &= 2^2 \\
                        x^2 &= 2^2 - 1^2 \\
                        x^2 &= 4 - 1 \\
                        x^2 &= 3 \\
                        x &= \pm \sqrt{3}
                    `</$$>
                    <p>ここでは，<$>_`x`</$>は辺の長さなので，<$>_`x>0`</$>である．よって，<$>_`x`</$>として適切なのは，<$>_`\sqrt{3}`</$>である． </p>
                    <$>_`x=\sqrt{3}`</$>
                </div>
                
            </div>
        );
        
    }
}
