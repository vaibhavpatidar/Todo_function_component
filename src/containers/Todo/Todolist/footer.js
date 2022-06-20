import React, { useEffect } from 'react';
import { FaUndo } from "react-icons/fa";
import '../../../index.js';

const Input = ({list, deletetodo, reset}) => {

    let items=list;

    return (
        <div className="footer">
        <span>You have {items.length} pending task</span>
        <button className="buttonstyy" onClick={() => {deletetodo() }}>Clear All</button>
        <br></br>
        <button className='resetbutton' onClick={()=>{reset()}}>Reset  <FaUndo/></button>
    </div>
    );
}
export default Input;