import React from 'react';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import './../css/style.css';
import {$, $$} from './Tex.Component'
import img_pytha from './../img/img_pytha.png';
import img_345_x45 from './../img/img_345_x45.png';
import img_11r2_11x from './../img/img_11r2_11x.png';
import img_12r3_12x from './../img/img_12r3_12x.png';
import img_345_68x from './../img/img_345_68x.png';
import img_11r2_3x3r2 from './../img/img_11r2_3x3r2.png';
import img_12r5_12x from './../img/img_12r5_12x.png';
import img_51213_x1213 from './../img/img_51213_x1213.png';
import img_345_12x20 from './../img/img_345_12x20.png';
import img_12r3_48x from './../img/img_12r3_48x.png';
import {Route, Link } from 'react-router-dom'
const _ = String.raw;

// :: 三平方の定理，ピタゴラスの定理
// :: Pythagorean Theorem

export default class Pytha2 extends React.Component{
    render(){
        return(
            <div>
                <h1>三平方の定理</h1>
                <h2>具体的な使い方</h2>
                <p>三平方の定理は，直角三角形で辺の長さを求めるときに役に立つ．三辺の内で，ある辺のみわからないときに，その辺の長さに求められる．</p>


                {/* 下に固定されている定理 */}
                <div className="pythagoreanTheorem">
                    <img src={img_pytha} alt={"noimage"}></img>
                    <h1>三平方の定理</h1>  
                    <h1><$>a^2 + b^2 = c^2</$></h1>
                </div>
                
                <div className="example">
                    <div className="exImg" ><img src={img_345_x45} alt={'no image'}></img></div>
                    <p>直角三角形であるため，三平方の定理を適用すると，次が成り立つ．</p>
                    <$$>{_`
                        a^2 + b^2 &= c^2 \\
                        x^2 + 4^2 &= 5^2 \\
                        x^2 &= 5^2 - 4^2 \\
                        x^2 &= 25 - 16 \\
                        x^2 &= 9 \\
                        x &= \pm 3
                    `}</$$>
                    <p>ここでは，<$>{_`x`}</$>は辺の長さなので，<$>{_`x>0`}</$>である．よって，<$>{_`x`}</$>として適切なのは，<$>{_`3`}</$>である． よって，<$>{_`x=3`}</$>である．</p> 
                </div>        
                <div className="example">
                    <div className="exImg" ><img src={img_11r2_11x} alt={'no image'}></img></div>
                    <p>直角三角形であるため，三平方の定理を適用すると，次が成り立つ．</p>
                    <$$>{_`
                        a^2 + b^2 &= c^2 \\
                        1^2 + 1^2 &= x^2 \\
                        x^2 &= 2 \\
                        x &= \pm \sqrt2
                        `}</$$>
                    <p>ここでは，<$>{_`x`}</$>は辺の長さなので，<$>{_`x>0`}</$>である．よって，<$>{_`x`}</$>として適切なのは，<$>{_`\sqrt2`}</$>である． よって，<$>{_`x=\sqrt2`}</$>である．</p>
                </div>
                <div className="example">
                    <div className="exImg" ><img src={img_12r3_12x} alt={'no image'}></img></div>
                    <p>直角三角形であるため，三平方の定理を適用すると，次が成り立つ．</p>
                    <$$>{_`
                        a^2 + b^2 &= c^2 \\
                        1^2 + x^2 &= 2^2 \\
                        x^2 &= 2^2 - 1^2 \\
                        x^2 &= 4 - 1 \\
                        x^2 &= 3 \\
                        x &= \pm \sqrt3
                        `}</$$>
                    <p>ここでは，<$>{_`x`}</$>は辺の長さなので，<$>{_`x>0`}</$>である．よって，<$>{_`x`}</$>として適切なのは，<$>{_`\sqrt3`}</$>である． よって，<$>{_`x=\sqrt3`}</$>である．</p>
                </div>
                
                
                <div className="paddingPytha" ></div>


                <div className="miniQuiz">
                <h1>ちょっとしたクイズ</h1>
                    <p>次の直角三角形の辺の長さ<$>{_`x`}</$>を求めよ．</p>
                    <div className="quizSec">
                        <h1>(1)</h1>
                        <div className="example">
                            <div className="exImg" ><img src={img_345_68x} alt={'noimage'}></img>
                            <p><$>{_`x=~`}</$><input type="number"></input></p>
                            </div>
                        </div>
                    </div>
                    <div className="quizSec">
                        <h1>(2)</h1>
                        <div className="example">
                            <div className="exImg" ><img src={img_11r2_3x3r2} alt={'noimage'}></img>
                            <p><$>{_`x=~`}</$><input type="number"></input></p>
                            </div>
                        </div>
                    </div>
                    <div className="quizSec">
                        <h1>(3)</h1>
                        <div className="example">
                            <div className="exImg" ><img src={img_12r5_12x} alt={'noimage'}></img>
                            <p><$>{_`x=~`}</$><input type="number"></input></p>
                            </div>
                        </div>
                    </div>
                    <div className="quizSec">
                        <h1>(4)</h1>
                        <div className="example">
                            <div className="exImg" ><img src={img_51213_x1213} alt={'noimage'}></img>
                            <p><$>{_`x=~`}</$><input type="number"></input></p>
                            </div>
                        </div>
                    </div>
                    <div className="quizSec">
                        <h1>(5)</h1>
                        <div className="example">
                            <div className="exImg" ><img src={img_345_12x20} alt={'noimage'}></img>
                            <p><$>{_`x=~`}</$><input type="number"></input></p>
                            </div>
                        </div>
                    </div>
                    <div className="quizSec">
                        <h1>(6)</h1>
                        <div className="example">
                            <div className="exImg" ><img src={img_12r3_48x} alt={'noimage'}></img>
                            <p><$>{_`x=~`}</$><input type="number"></input></p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><Link to="/Pytha3">this is pytha3</Link></p>
                
                
                <div className="paddingPytha" ></div>
            </div>
        );
    
    }
}
