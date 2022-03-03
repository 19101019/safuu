import React from 'react';
import './CSS/Calculator.css';

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calc_head">
        <h4>Calculator</h4>
        <h5>Estimate your returns</h5>
      </div>

      <div className="calc_block">
        <div className="calc_inner1">
          <h4>Your Balance</h4>
          <h5>SAFUU</h5>
        </div>
        <div className="calc_inner1 right_block">
          <h4>Your Balance</h4>
          <h5>SAFUU</h5>
        </div>
        <div className="calc_inner1 right_block">
          <h4>Your Balance</h4>
          <h5>SAFUU</h5>
        </div>
      </div>

      <div className="calc_input">
        <div className="div_input">
          <h5>SAFUU Amount</h5>
          <div className="input">
            <input placeholder="123.." />
            <p>Correct</p>
          </div>
        </div>
        <div className="div_input right_block">
          <h5>SAFUU Amount</h5>
          <div className="input">
            <input placeholder="123.." />
            <p>Correct</p>
          </div>
        </div>
      </div>

      <div className="calc_input">
        <div className="div_input">
          <h5>SAFUU Amount</h5>
          <div className="input">
            <input placeholder="123.." />
            <p>Correct</p>
          </div>
        </div>
        <div className="div_input right_block">
          <h5>SAFUU Amount</h5>
          <div className="input">
            <input placeholder="123.." />
            <p>Correct</p>
          </div>
        </div>
      </div>

      <div className='calc_range'>
        <h5>30 days</h5>
        <input type="range" min="1" max="365" value="30" class="slider" id="myRange"></input>
      </div>

      <div className="calc_foot">
        <div className="foot_inner">
          <h4>SAFUU Price</h4>
          <h5>$64.91</h5>
        </div>
        <div className="foot_inner">
          <h4>Market Cap</h4>
          <h5>$18,639,803</h5>
        </div>
        <div className="foot_inner">
          <h4>Market Cap</h4>
          <h5>$18,639,803</h5>
        </div>
      </div>
    </div>
  );
}

export default Calculator;