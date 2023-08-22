import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { TableContainer, Table, Paper, TableCell, TableRow, TableHead, TableBody, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { train_data } from '../Train api/data';

async function getauthToken() {
    const authData = await fetch("http://20.244.56.144/train/auth", {
        method: 'POST',
        body: JSON.stringify(
            {
                "companyName": "Trainvue",
                "clientID": "cc240783-477e-4160-8068-2f643f9649f8",
                "clientSecret": "mIjNCfaUwhaFJjcl",
                "ownerName": "Jothishwar",
                "ownerEmail": "js2207@srmist.edu.in",
                "rollNo": "RA2011003020268"
            })
    })
    const thisData = await authData.json()
    return thisData;
}

async function getTrains(){
    const auth_data= await getauthToken();
    const res_data = await fetch("http://20.244.56.144/train/trains", {
            method: 'GET',
            headers: { Authorization: `Bearer ${auth_data.access_token}` }
    })
    const train_data = await res_data.json();
    // console.log(train_data)
    return train_data;
}


const data= await getTrains();
console.log(data)

function Trains() {
    const [trains,setTrains]=useState([])

    console.log(data)
    
      return (
        <>
        Trains
        </>
    )
}

export default Trains