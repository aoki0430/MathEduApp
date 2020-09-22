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
                <p>三平方の定理とは，直角三角形の辺の長さについての定理です．</p>
                <h2>Comment::animation 1</h2>
                <div className="anime">
                    <img src={anime_1_1} alt={'No Images'}/>
                    <img src={anime_1_2} alt={'No Images'} />
                </div>
                <h2>具体例を見てみよう．</h2>
                <ExPytha img={img_345} tex={pytha_345}/>
                <ExPytha img={img_11r2} tex={pytha_11r2} addingImg={img_square} adding={pythaAdd_11r2}/>
                <ExPytha img={img_12r3} tex={pytha_12r3} addingImg={img_regularTriangle} adding={pythaAdd_12r3}/>
                <p>こりゃ無理だーーーー<$>y^2+b^2+c^2</$></p>
                <h2>Comment::animation 2</h2>
                <div className="anime">
                    <img src={anime_2_1} alt={'No Images'} />
                </div>
                <h2>まとめ</h2>
                <p>三平方の定理とは，次のことである．</p>
                <div className="pythaTheo">
                    <img src={img_pytha} alt={'No Images'} />
                    <div className="text">
                        <p>直角三角形の辺の長さでは，次の関係が成り立つ．</p>
                        <TeX>{pytha}</TeX>
                    </div>
                </div>
            </div>
        );
        
    }
}

const pytha_345 = _`
    a^2 + b^2 &= c^2 \\
    3^2 + 4^2 &= 5^2 \\
    9 + 16 &= 25 \\
    25 &= 25 \qquad \text{成り立っている!!}
`

const pytha_11r2 = _`
    a^2 + b^2 &= c^2 \\
    1^2 + 1^2 &= \left(\sqrt{2}~\right)^2 \\
    1 + 1 &= 2 \\
    2 &= 2 \qquad \text{成り立っている!!}
`
const pythaAdd_11r2 = _`
この直角三角形は，正方形を半分にしたものである．直角を挟んだ２辺の長さが等しいことから，直角二等辺三角形と呼ばれている．また，直角以外の２角は，45°とわかる．`

const pytha_12r3 = _`
    a^2 + b^2 &= c^2 \\
    1^2 + \left(\sqrt{3}~\right)^2 &= 2^2 \\
    1 + 3 &= 4 \\
    4 &= 4 \qquad \text{成り立っている!!}
`
const pythaAdd_12r3 = _`この直角三角形は，正三角形を半分にしたものである．つまり，正三角形の高さは，一辺\sqrt{3}/2倍であるとわかる．また，直角以外の角の大きさは，60°と30°とわかる．`

const pytha = _`
a^2 + b^2 = c^2
`