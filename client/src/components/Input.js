import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Input= (props) => {

 
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [treasure, setTreasure] = useState(0);
    const [catchPhrase, setCatchPhrase] = useState("")
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true);
    const [crewPosition, setCrewPositon] = useState("")
    const [errors, setErrors] = useState([])

    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        const pirateObj={
            name, 
            imageURL, 
            treasure, 
            catchPhrase, 
            pegLeg, 
            eyePatch, 
            hookHand,
            crewPosition
        }
        axios.post('http://localhost:8000/api/pirates', pirateObj)
        .then(res => {
            console.log(res)
            history.push("/")
        })
        .catch(err => {
           const errorResponse = err.response.data.errors
           const errorArr=[]
           for(const key of Object.keys(errorResponse)){
               errorArr.push(errorResponse[key].message)
           }
           console.log(errorArr)
           setErrors(errorArr)
        });
       
    }

    return (
        <div className="form">
            <form onSubmit={onSubmitHandler}>
                
                {errors.map((err, index) => <p style={{color: "red", fontWeight: "bold"}} key={index}>{err}</p>)}
               
               <div className="formbox">
                <p className="row">
                    <label className="inputlabel" >Name:</label><br />
                    <input className="inputbox" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p className="row">
                    <label className="inputlabel" >Image URL:</label><br />
                    <input className="inputbox" type="text" onChange={(e) => setImageURL(e.target.value)} value={imageURL} />
                </p>
                <p className="row">
                    <label className="inputlabel">Treasure:</label><br />
                    <input className="inputbox" type="number" onChange={(e) => setTreasure(e.target.value)} value={treasure} />
                </p>
                <p className="row">
                    <label className="inputlabel">Catch Phrase</label><br />
                    <input className="inputbox" type="text" onChange={(e) => setCatchPhrase(e.target.value)} value={catchPhrase} />
                </p>
                <p>
                    <label>Peg Paw?</label>
                    <input type="checkbox" onChange={e => setPegLeg(e.target.checked)} checked={pegLeg}/>
                </p>
                <p>
                    <label>Eye Patch?</label>
                    <input type="checkbox" onChange={e => setEyePatch(e.target.checked)} checked={eyePatch}/>
                </p>
                <p>
                    <label>Hook Paw?</label>
                    <input type="checkbox" onChange={e => setHookHand(e.target.checked)} checked={hookHand}/>
                </p>
                <p className="row">
                <label>Crew Position:</label>
                <select value={crewPosition} onChange={(e)=> setCrewPositon(e.target.value)}>
                    <option value="">Choose A Crew Position</option>
                    <option value="captain">Captain</option>
                    <option value="firstmate">First Mate</option>
                    <option value="quartermaster">Quarter Meowster</option>
                    <option value="boatswain">Boatswain</option>
                    <option value="powdermonkey">Powder Meowster</option>
                </select>
                </p>
                <input className="inputbutton" type="submit" />
                </div>
            </form>
            <Link to="/">Go Back</Link>
        </div>


    )
}

export default Input;