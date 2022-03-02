import React from 'react';
import './dashboard.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="head_block">
        <div className="block1">
          <div className="inner_block">
            <h4>SAFUU Price</h4>
            <h5>$64.91</h5>
          </div>
          <div className="inner_block">
            <h4>Market Cap</h4>
            <h5>$18,639,803</h5>
          </div>
          <div className="inner_block">
            <h4>Circulating Supply</h4>
            <h5>326161.13</h5>
          </div>
          <div className="inner_block">
            <h4>Backed Liquidity</h4>
            <h5>100%</h5>
          </div>
          <div className="inner_block">
            <h4>Next Release</h4>
            <h5>00:11:59</h5>
          </div>
        </div>

        <div className="secondary_block">
          <div className="inner_block2">
            <h4>SAFUU Price</h4>
            <h5>$58.56</h5>
          </div>
          <div className="inner_block2 right_block">
            <h4>Market Value of Treasury Asset</h4>
            <h5>$3,752,419</h5>
          </div>
        </div>

        <div className="secondary_block">
          <div className="inner_block2">
            <h4>SAFUU Price</h4>
            <h5>$58.56</h5>
          </div>
          <div className="inner_block2 right_block">
            <h4>Market Value of Treasury Asset</h4>
            <h5>$3,752,419</h5>
          </div>
        </div>

        <div className="secondary_block">
          <div className="inner_block2">
            <h4>SAFUU Price</h4>
            <h5>$58.56</h5>
          </div>
          <div className="inner_block2 right_block">
            <h4>Market Value of Treasury Asset</h4>
            <h5>$3,752,419</h5>
          </div>
          <div className="inner_block2 right_block">
            <h4>Market Value of Treasury Asset</h4>
            <h5>$3,752,419</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
