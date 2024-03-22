import { useState } from "react"
import DisplayCounter from "./DisplayCounter"
import Increment from "./Increment"

const Container = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Container</h1>
            <DisplayCounter count={count} />
            <Increment add={setCount} count={count} />
        </>
    )
}

export default Container
