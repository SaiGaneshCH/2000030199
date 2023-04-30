import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import {TableContainer,TableBody,TableHead,TableCell,TableRow,Table,Paper} from '@mui/material';
function MultiTrains(){
    
const [data, setData] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    const accessToken = 'Bearer'+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI3ODczODEsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiOGRlODZiMGItMzk5NS00MDRiLWFjNGMtODA2OGZlZWFiYzUzIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMDAwMzAxOTkifQ.dFMR-b4sPGW_YR9BzQyuz3boPpMtcaVd4l9HbBRTlBw';
    const apiUrl = 'http://104.211.219.98/train/trains';
    myHeaders.append('Authorization',accessToken);

    var reqOpts ={
        method: 'GET',
        headers : {
            'Authorization' : accessToken
        }
    }
    
        fetch(apiUrl, reqOpts)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      }, []);

      const trains = [{"trainName":"Pune Exp","trainNumber":"2342","departureTime":{"Hours":23,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":6,"AC":7},"price":{"sleeper":674,"AC":1674},"delayedBy":17},{"trainName":"Manu Exp","trainNumber":"2346","departureTime":{"Hours":19,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":15,"AC":10},"price":{"sleeper":450,"AC":650},"delayedBy":13},{"trainName":"Hyderabad Exp","trainNumber":"2341","departureTime":{"Hours":23,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":6,"AC":7},"price":{"sleeper":554,"AC":1854},"delayedBy":5},{"trainName":"Chennai Exp","trainNumber":"2344","departureTime":{"Hours":21,"Minutes":35,"Seconds":0},"seatsAvailable":{"sleeper":3,"AC":1},"price":{"sleeper":244,"AC":380},"delayedBy":15},{"trainName":"Manoranjan Exp","trainNumber":"2347","departureTime":{"Hours":17,"Minutes":33,"Seconds":0},"seatsAvailable":{"sleeper":5,"AC":1},"price":{"sleeper":358,"AC":503},"delayedBy":12},{"trainName":"Kolkata Exp","trainNumber":"2345","departureTime":{"Hours":20,"Minutes":15,"Seconds":0},"seatsAvailable":{"sleeper":16,"AC":70},"price":{"sleeper":610,"AC":710},"delayedBy":14},{"trainName":"Mumbai Exp","trainNumber":"2343","departureTime":{"Hours":22,"Minutes":37,"Seconds":0},"seatsAvailable":{"sleeper":8,"AC":15},"price":{"sleeper":700,"AC":800},"delayedBy":16}]

      const avTrains = [];
      const unavTrains = [];

      trains.forEach((item) => {
        let tTimes = item.departureTime
        console.log(tTimes)
       
            // if(tTimes['Minutes']>30){
            //     avTrains.append(item);
            // }
            // else{
            //     unavTrains.append(item);
            // }
    
      });
    
return(    
    <div>
    
  </div>

);
}

export default MultiTrains;