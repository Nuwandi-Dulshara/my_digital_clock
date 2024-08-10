import React, {useState,useEffect}  from "react"; /*React: This is the core library for building user interfaces 
in React.
useState: This hook is used to manage the state within the functional component.
useEffect: This hook is used to perform side effects, such as setting up an interval to update the time.*/

function DigitalClock(){

    const[time, setTime] = useState(new Date()); /*time: This is a state variable that stores the current date and 
    time.
    setTime: This function is used to update the time state.useState(new Date()): Initializes the time state with 
    the current 
    date and time when the component is first rendered.*/
    useEffect(() => {
        const interval_Id = setInterval(() => { /*This function is called inside the useEffect
        hook to update the time state every second (1000 milliseconds).*/
            setTime(new Date()); //update the current time every second
        },1000); //(1000 milliseconds)

        return () => {
            clearInterval(interval_Id);/*`tops the timer when the component 
            is unmounted, preventing memory leaks.*/
        }
    },[]);

    function formatTime() { /*This function formats the current time into a 12-hour clock 
        format with AM/PM notation.*/
        let hrs = time.getHours(); /*getHours(), getMinutes(), getSeconds(): Methods used to extract hours,
         minutes, and seconds from the time object.*/
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const mer = hrs >= 12 ? "PM" : "AM"; 
    
        hrs = hrs % 12 || 12; //hrs % 12 || 12: Converts the 24-hour time format to 12-hour format
    
        return `${padZero(hrs)}:${padZero(mins)}:${padZero(secs)} ${mer}`; /*A helper function that adds a 
        leading zero to numbers less than 10 for consistent two-digit display.*/
    }
    
    function padZero(number){
        return (number < 10 ? "0" : "") + number;

    }
    return ( //This JSX structure defines how the digital clock is displayed on the page.
       <div className="clock-c">
        <div className="clock"> 
        <span> {formatTime()}</span>

        </div>
       </div>
    );
}
export default DigitalClock; // Exporting the Component