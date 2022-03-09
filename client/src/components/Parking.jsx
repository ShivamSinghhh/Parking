import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Parkinglot } from './Parkinglot';



export default function Parking() {
    const [data,setData] = useState([]);
    const [book,setBook] = useState({});

    const handleChange = (e)=>{
       const {name,value} = e.target;
       setBook({...book,[name]:value})      

    }
    useEffect(() => {
       
        let request = {
            method: "get",
            url: `http://localhost:2345/parking`
        };
        axios(request)
            .then((res) => {
                 console.log(res.data);
                setData(res.data.parking);
                
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);


    return (<>       

        <h2>Parking Availability</h2>
    <form>
    <input name='zone' type="text" placeholder="parkingzone"/>
        <input name='userName' type="text" placeholder="username"/>
        <select name="type">
            <option value="">Select</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="truck">Truck</option>
        </select>
        <input name='vehicleNum' type="text" placeholder="vehicle number"/>
        <button>Enter</button>
    </form>
    <br/>

     {/* <form action="">
        <input type="text" placeholder="Token"/>
        <select  name="" id="">
            <option value="">Select</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="truck">Truck</option>
        </select>
      
        <button >Exit</button>
    </form>  */}
    <br/>
    {/* <div className="parking">
        <div>
            <h3>Car <span>Rate: ₹40/2hr </span></h3>
            <span>Availability &nbsp; = &nbsp; </span>
            <span id="carNum"></span>
        </div>
        <div>
            <h3>Bike <span>Rate: ₹10/2hr </span></h3>
            <span>Availability &nbsp; = &nbsp; </span>
            <span id="bikeNum"></span>
        </div>
        <div>
            <h3>Tempo <span>Rate: ₹30 / 2hr </span></h3>
            <span>Availability &nbsp; = &nbsp; </span>
            <span id="tempoNum"></span>
        </div>

    </div> */}

        
        <div>
        { data.map((e)=>{ 
              console.log("e =",e)
              return  <Parkinglot key={e._id} {...e}/>
                
         } ) }            

        </div>
    </>

    )
}
