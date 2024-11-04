const EventPropagation = () => {

    const handleGrandParent = () => {
        console.log("grandparent clicked !")
    };
    const handleParentClick = () => {
        console.log("parent clicked !")
    };
    const handleChildClick = (e) => {
        console.log("child clicked !")
        console.log(e);
    };

    return (
        <>
            <section>
                
{/*         child to parent bubbling phase */}
                {/* <div onClick={handleGrandParent}>
                    <div onClick={handleParentClick}>
                        <button onClick={handleChildClick}> Child Div</button>

                    </div>
                </div> */}

{/* parent to child means Capture phase */}
                <div onClickCapture={handleGrandParent}>
                    <div onClickCapture={handleParentClick}>
                        <button onClickCapture={handleChildClick}> Child Div</button>

                    </div>
                </div>



            </section>

        </>
    )
}

export default EventPropagation