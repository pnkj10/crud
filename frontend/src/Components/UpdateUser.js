import { useState } from "react";
import axios from 'axios';

const SendData = (props) => {
    const [apiData, setApiData] = useState({userid:"",username:"",course:"",purchasedate:""});
    
    const updateStd = (event) => {
        event.preventDefault();
        //axios.update(`http://localhost:5213/api/users/${apiData.userid}`);
        axios.delete(`http://localhost:5213/api/users/${apiData.userid}`);
        axios.post('http://localhost:5213/api/users', apiData);
    }

    const handleChange=(event)=>{
        const {name,value} =event.target
        setApiData({...apiData,[name]:value})
    }

    return (
        <>
            <br/><br/>
            <h4>Enter userid to be updated.</h4>
            <form method="GET" onSubmit={updateStd}>
            <input type="number" name="userid" onChange={handleChange} placeholder="UserId"/>
            <input type="text" name="username" onChange={handleChange} placeholder="UserName"/>
                <input type="text" name="course" onChange={handleChange} placeholder="Course"/>
                <input type="text" name="purchasedate" onChange={handleChange} placeholder="PurchaseDate"/>
                <input type="Submit" value="Update"/>
            </form>
        </>
    );

}
export default SendData;