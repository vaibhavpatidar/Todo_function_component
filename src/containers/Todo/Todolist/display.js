import React, { useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";


const Display = ({list, selectdone,itemdel}) => {
    const [search, setSearch] = React.useState('')


    let items=list;
    console.log("Display -", items)
    return (

        <div>
        
            <input className='filter' placeholder="Search" onKeyUp={(event) => { setSearch(event.target.value)}}></input>
            <div className={items.length > 5 ? "vai" : " "}>
                <table className='table'>
                    <tr >
                        <th style={{ width: "50%" }}>Todo</th>
                        <th style={{ width: "40%" }}>Category</th>
                        <th style={{ width: "10%" }}></th>
                    </tr>
                   
                    {items.map((list, index) => {
                        return <tr className={list.category.includes(search) > 0 ? "itemsstyle":"itemsstyle try"} >
                            <td className={list.done > 0 ? "todoitem done" : "todoitem"} onClick={(event) => { selectdone(index) }}>{list.item}</td>
                            <td>{list.category}</td>
                            <td><button className="sty" onClick={(event) => { event.stopPropagation(); itemdel(index) }}><FaTrashAlt /></button></td>
                        </tr>
                    })}
                </table>
            </div>

        </div>
    );
}
export default Display;