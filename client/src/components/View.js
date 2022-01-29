import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Route, Switch, useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
import './view.css';


const View = (props) => {


    const { id } = useParams();

    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [treasure, setTreasure] = useState(0);
    const [catchPhrase, setCatchPhrase] = useState("")
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true);
    const [crewPosition, setCrewPositon] = useState("")

    const history = useHistory();


    const updateLeg =(id, status)=>{
        // console.log("here at View Cmponent!", status)
        const pegLegStatus = {
            "pegLeg": status
        }
        axios.put("http://localhost:8000/api/pirates/" + id, pegLegStatus)
            .then(res => {
                console.log(res)})
            .then(history.push("/viewone/" + id))
            .catch(err => console.log(err))
    }


const updatePatch = (id, status) => {
    // console.log("here at View Cmponent!", status)
    const pegLegStatus = {
        "eyePatch": status
    }
    axios.put("http://localhost:8000/api/pirates/" + id, pegLegStatus)
        .then(res => {
            history.push(/viewone/ + id)
            console.log(res)
        })
        .catch(err => console.log(err))
}

const updateHook = (id, status) => {
    // console.log("here at View Cmponent!", status)
    const pegLegStatus = {
        "hookHand": status
    }
    axios.put("http://localhost:8000/api/pirates/" + id, pegLegStatus)
        .then(res => {
            history.push("/")
            console.log(res)
        })
        .catch(err => console.log(err))
}

useEffect(() => {
    axios.get("http://localhost:8000/api/pirates/" + id)
        .then(res => {
            // console.log(id)
            // console.log("RESPONSEDATA:", res.data.onePirate)
            setName(res.data.onePirate.name)
            setImageURL(res.data.onePirate.imageURL)
            setTreasure(res.data.onePirate.treasure)
            setCatchPhrase(res.data.onePirate.catchPhrase)
            setPegLeg(res.data.onePirate.pegLeg)
            setEyePatch(res.data.onePirate.eyePatch)
            setHookHand(res.data.onePirate.hookHand)
            setCrewPositon(res.data.onePirate.crewPosition)
        })
}, [])
return (

    <div className="body1">
        <div className="box1">
            <div className="header">
                <h1>{name}</h1>
            </div>
            <div className="contentbox">
                <div className="left">
                    <img src={imageURL} alt="catpirate" />
                    <h3>"{catchPhrase}"</h3>
                </div>
                <div className="right">
                    <div className="formbox">
                        <h3>About:</h3>
                        <p>Crew Position: {crewPosition}</p>
                        <p>Treasure: {treasure}</p>
                        <p> PegPaw? {pegLeg? "Yes" : "No"}  <button className="yesno" style={{height: 20, width: 90, color: "white", backgroundColor: pegLeg ? "red" : "green"}}onClick={(e) => updateLeg(id, !pegLeg)}>{pegLeg ? "No" : "Yes" } </button> </p> 
                        <p> EyePatch?: {eyePatch ? "Yes" : "No"}<button className="yesno" style={{height: 20, width: 90, color: "white", backgroundColor: eyePatch ? "red" : "green"}} onClick={(e) => updatePatch(id, !eyePatch)}>{eyePatch ? "No" : "Yes"}</button></p>
                        <p> HookPaw?: {hookHand ? "Yes" : "No"}<button className="yesno" style={{height: 20, width: 90, color: "white", backgroundColor: hookHand ? "red" : "green"}}onClick={(e) => updateHook(id, !hookHand)}>{hookHand ? "No" : "Yes"}</button></p>
                        <p></p>
                    </div>
                </div>
            </div>


        </div>
        <Link className="goback" to="/">Go Back</Link>
    </div>
)
}

export default View;