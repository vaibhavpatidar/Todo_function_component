import React, { useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import '../../../index.js';

const Input = ({inputtext}) => {
    const [text, setText] = React.useState('')
    const [category, setCategory] = React.useState('Glossaries')



    return (
        <div className="todoitems">
            <input className="input_list" placeholder="Add your Todo" value={text}  onChange={(event) => { setText(event.target.value) }}></input>
            <select className="categorie" id="cars" onChange={(event) =>{setCategory(event.target.value)}}  value={category}>
                <option value="Glossaries">Glossaries</option>
                <option value="Food">Food</option>
                <option value="Electronic">Electronic</option>
                <option value="Cloth">Cloth</option>
                <option value="Footwear">Footwear</option>
            </select>
            <button className="buttonsty" onClick={() => inputtext(text, category) }><FaPlus /></button>
        </div>
    );
}
export default Input;