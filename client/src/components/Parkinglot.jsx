export const Parkinglot=({bikeMax,carMax,truckMax,zone})=>{

    console.log(bikeMax,truckMax,carMax)
    return <div>
        <div>
            
            <span>Zone : {zone}</span>
            &nbsp;
            &nbsp;
            
            <span>Bike : {bikeMax}</span>
            &nbsp;
            &nbsp;
            <span>Car : {carMax}</span>
            &nbsp;
            &nbsp;
            <span>Truck : {truckMax}</span>
        </div>
    </div>
}
