import React, {useState,useEffect}  from "react";

function DigitalClock(){

    const[time, setTime] = useState(new Date());
    useEffect(() => {
        const interval_Id = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(interval_Id);
        }
    },[]);

    function formatTime() {
        let hrs = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const mer = hrs >= 12 ? "PM" : "AM";
    
        hrs = hrs % 12 || 12;
    
        return `${padZero(hrs)}:${padZero(mins)}:${padZero(secs)} ${mer}`;
    }
    
    function padZero(number){
        return (number < 10 ? "0" : "") + number;

    }
    return (
       <div className="clock-c">
        <div className="clock"> 
        <span> {formatTime()}</span>

        </div>
       </div>
    );
}
export default DigitalClock;