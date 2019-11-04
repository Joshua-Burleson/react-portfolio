import React from 'react';
import '../../css/prism.css';

const FizzBuzz = props => {
    return (
        <div>
        <pre className = "language-javascript">
            <span className= "declaration">const</span> <span className= "other">[fizz, buzz, fizzBuzz]</span> <span className= "operator">=</span> <span className= "other">[</span><span className="number">{props.fizz}</span><span className= "other">, </span><span className="number">{props.buzz}</span><span className= "other">, </span><span className="number">{props.fizzBuzz}</span><span className="other">];</span>
            <br />
            <br />
            <span className= "declaration">for</span><span className= "other">(</span><span className="declaration">let </span><span className="other">i </span><span className="operator">= </span><span className="number">1</span><span className= "other">; i</span><span className="operator">{` <= `}</span><span className="number">100</span><span className="other">; i</span><span className="operator">++</span><span className= "other">{`){`}</span>
            <br />
            <span className="other">    console.</span><span className="number">log</span><span className="other">(</span>
            <br />
            <span className="other">       i</span><span className="operator"> % </span><span className="other">fizzBuzz </span><span className="operator">=== </span><span className="number">0 </span><span className="operator">? </span><span className="other">"FizzBuzz"</span>
            <br />
            <span className="operator">                          : </span><span className="other">(i <span className="operator">% </span>fizz </span><span className="operator">=== </span><span className="number">0 </span><span className="operator">? </span><span className="other">"Fizz"</span>
            <br />
            <span className="operator">                                            :</span><span className="other"> ( i </span><span className="operator">% </span><span className="other">buzz </span><span className="operator">=== </span><span className="number">0 </span><span className="operator">? </span><span className="other">"Buzz" <span className="operator">: </span>i))</span>
            <br />
            <span className="other">    );</span>
            <br />
            <span className="other">};</span>
        </pre>
    </div>
    );
}

export default FizzBuzz;