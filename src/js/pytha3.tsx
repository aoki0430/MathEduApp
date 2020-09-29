import React from 'react';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import './../css/style.css';
import {$, $$} from './Tex.Component'
import img_pytha from './../img/img_pytha.png';
import img_345 from './../img/img_345.png';
import img_51213 from './../img/img_51213.png';
import img_81517 from './../img/img_81517.png';
import img_11r2 from './../img/img_11r2.png';
import img_12r3 from './../img/img_12r3.png';
const _ = String.raw;

// :: 三平方の定理，ピタゴラスの定理
// :: Pythagorean Theorem

export default class Pytha3 extends React.Component{
    render(){
        return(
            <div>
                <h1>三平方の定理</h1>
                <h2>相似と三平方の定理</h2>
                <h3>...adding animation...</h3>

                
                <h2>簡単な比の直角三角形</h2>
                <p>では，簡単な比の直角三角形で有名なものを挙げておく．</p>
                <div className="pythagoreanTheorem">
                    <img src={img_pytha} alt={"noimage"}></img>
                    <h1>三平方の定理</h1>  
                    <h1><$>a^2 + b^2 = c^2</$></h1>
                </div>


                <h3>整数比の直角三角形</h3>
                <div className="example">
                    <div className="exImg" ><img src={img_345} alt={'no image'}></img></div>
                    <p><$>{_`3:4:5`}</$>の直角三角形と言われている三角形．</p>
                    <$$>{_`
                        3^2 + 4^2 &= 5^2 \\
                        9 + 16 &= 25 \\
                        25 &= 25 \quad \text{成り立つ!!}
                    `}</$$>
                </div>        
                <div　className="example">
                    <div className="exImg" ><img src={img_51213} alt={'no image'}></img></div>
                    <p><$>{_`5:12:13`}</$>の直角三角形と言われている三角形．</p>
                    <$$>{_`
                        5^2 + 12^2 &= 13^2 \\
                        25 + 144 &= 169 \\
                        169 & = 169 \quad \text{成り立つ!!}
                    `}</$$>
                </div>
                <div　className="example">
                    <div className="exImg" ><img src={img_81517} alt={'no image'}></img></div>
                    <p><$>{_`8:15:17`}</$>の直角三角形．</p>
                    <$$>{_`
                        8^2 + 15^2 &= 17^2 \\
                        64 + 225 &= 289 \\
                        289 &= 289 \quad \text{成り立つ}
                    `}</$$>
                </div>


                <h3>有名角を持つ直角三角形</h3>
                <div　className="example">
                    <div className="exImg" ><img src={img_11r2} alt={'no image'}></img></div>
                    <p><$>{_`1:1:\sqrt{2}`}</$>である直角二等辺三角形．（正方形を対角線で２つに分けた三角形）</p>
                    <$$>{_`
                        1^2 + 1^2 &= \sqrt{2}^2 \\
                        1 + 1 &= 2 \\
                        2 &= 2 \quad \text{成り立つ!!}
                    `}</$$>
                    <p>角Aと角Bの大きさが<$>{_`45^{\circ}`}</$>である．</p>
                </div>        
                <div　className="example">
                    <div className="exImg" ><img src={img_12r3} alt={'no image'}></img></div>
                    <p><$>{_`1:2:\sqrt{3}`}</$>と呼ばれている直角三角形．（正三角形を２つに分けた三角形）</p>
                    <$$>{_`
                        1^2 + \sqrt{3}^2 &= 2^2 \\
                        1 + 3 &= 4 \\
                        4 & = 4 \quad \text{成り立つ!!}
                    `}</$$>
                    <p>角Aの大きさが<$>{_`30^{\circ}`}</$>，角Bの大きさが<$>{_`60^{\circ}`}である．</$></p>
                </div>


                <h3>それ以外の直角三角形</h3>
                <div　className="example">
                {/* <div className="exImg" ><img src={img_12r5} alt={'no image'}></img></div> */}
                    <p><$>{_`1:2:\sqrt{5}`}</$>の直角三角形．</p>
                    <$$>{_`
                        1^2 + 2^2 &= \sqrt{5}^2 \\
                        1 + 4 &= 5 \\
                        5 &= 5 \quad \text{成り立つ}
                    `}</$$>
                </div>
                <div className="paddingPytha" ></div>
            </div>
        );
        
    }
}
