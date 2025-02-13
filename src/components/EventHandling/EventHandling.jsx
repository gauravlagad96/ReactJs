
const EventHandling = () => {

    // Normal function
    /*
    function handleButtonClick(){
        alert("hii I am onClick Events");
    }
     */

    //fat arrow function
    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("onClickEvent")
    }

    const handleWelcomeUser = (user) => {
        alert("Passing arg to event handler")
        console.log(`welcom ${user} good morning`)
    }

    return (
        <>
            {/* function components with named functions */}

            <button onClick={handleButtonClick}>Click me </button>

            <br /><br />
            {/* using fat arrow function */}
            {/* <button onClick={()=>handleButtonClick(event)}>Click me 1</button> */}

            <button onClick={(e) => handleButtonClick(e)}>Click me 1</button>
            <br /><br />

            {/* Inline arrow function */}
            <button onClick={() => alert("This is inline arrow function")}>Inline arrow function </button>
            <br /><br /><br />
            {/* passing arguments to event handler */}
            <button onClick={() => handleWelcomeUser("gaurav")}>click me 3</button>
        </>)
}

export default EventHandling