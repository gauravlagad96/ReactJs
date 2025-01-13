
const StudentCard = (props) => {
    console.log(props)

    return (
        <>
            <div>
                <h1>id:{props.curElem.id}</h1>
                <h2>name:{props.curElem.name}</h2>
                <h3>course:{props.curElem.course}</h3>
                <br />
            </div>

        </>
    );
    
};
export default StudentCard;
