import React from 'react'
import './CSS/Account.css'

const Account = () => {
  return (
    <div className="account">
      <div className="first_block">
        <div className="block_inner">
          <h4>Your Balance</h4>
          <h3>$0</h3>
          <h5>SAFUU</h5>
        </div>
        <div className="block_inner right_block">
          <h4>Your Balance</h4>
          <h3>$0</h3>
          <h5>SAFUU</h5>
        </div>
        <div className="block_inner right_block">
          <h4>Your Balance</h4>
          <h3>$0</h3>
          <h5>SAFUU</h5>
        </div>
      </div>

      <div className="block2">
        <div className="block2_inner">
          <h4>SAFUU Price</h4>
          <h5>$64.91</h5>
        </div>
        <div className="block2_inner">
          <h4>Market Cap</h4>
          <h5>$18,639,803</h5>
        </div>
        <div className="block2_inner">
          <h4>Circulating Supply</h4>
          <h5>326161.13</h5>
        </div>
        <div className="block2_inner">
          <h4>Backed Liquidity</h4>
          <h5>100%</h5>
        </div>
        <div className="block2_inner">
          <h4>Next Release</h4>
          <h5>00:11:59</h5>
        </div>
      </div>
    </div>
  );
}


export default Account;