const Increment = (props) => {

    return (
        <>
            <h1>Increment </h1>
            <button onClick={() => props.add(props.count + 1)}></button>
        </>
    )
}

export default Increment