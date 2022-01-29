import React from 'react';
import { useState, useEffect } from 'react';
import { Link , Route, Switch} from 'react-router-dom'
import axios from 'axios';
import './content.css';

const Sorted=(props)=>{

    const [responseData, setResponseData] = useState([])

    useEffect(()=>{
            axios.get("http://localhost:8000/api/piratessorted")
            .then(response => {
                console.log("RESPONSE.DATA:", response.data)
                setResponseData(response.data.sortedPirates)
            })
            .catch(error => { setResponseData({ error: "failure to set response data at Display component" }) })
    }, [])



    const deleteOne = (deleteId) => {
        console.log(deleteId)
        axios.delete("http://localhost:8000/api/pirates/" + deleteId)
            .then(res => {
                console.log("DELETED THIS ENTRY" + deleteId)
                removeFromDom(deleteId)
            })
            .catch(err => console.log(err)
            )}


    const removeFromDom = (deleteId) => {
        setResponseData(responseData.filter(pirate => pirate._id != deleteId))
    }


    return(
        <div className="body">
            <Link className="sortbutton" to="/">View Your Pirates Unordered</Link>
        {responseData.map((pirate, index) => {
            return(
            <div className="box" key={index}>
                <div className="left">
                    <img style={{height:150}} src={pirate.imageURL}></img>
                </div>
                <div className="right">
                    <div className="name">{pirate.name}</div>
                    <div className="buttons"> 
                        <button className="b1link"> 
                        <Link  className="link" to={"/viewone/" + pirate._id}>🖤View Me Profile</Link>
                        </button>
                        <button className="b2" onClick={() =>deleteOne(pirate._id)}> ☠ Walk the Plank</button>
                    </div>
                </div>
            </div>)
        })}
</div>
    )
}

export default Sorted;