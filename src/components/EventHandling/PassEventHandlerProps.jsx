
const PassEventHandlerProps = () => {

    const handleWelcomeUser = (user) => {

        alert(`hey,${user}`);
    }

    const handleHover = () => {
        alert("Thanks for hovering me")
    }

    return (
        <>
            <WelcomeUser onClickHandler={() => handleWelcomeUser("gaurav")}
                onMouseEnter={handleHover}
            />
        </>)
}

export default PassEventHandlerProps



const WelcomeUser = (props) => {

    const handleLeaveButton = (e) => {
        alert("I am child components functions")
        console.log(e);
    }

    return (<>


        <button onClick={props.onClickHandler}>click</button><br /> <br />
        <button onMouseEnter={props.onMouseEnter}>hover me</button>
        <br /> <br /><br /> <br />
        <button onMouseLeave={handleLeaveButton}>child function</button>
    </>)
}