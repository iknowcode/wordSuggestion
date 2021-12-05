import { React } from 'react'
import { useSpring, animated } from "react-spring"



const ResultBox = (Result) => {
    const RES = Result["Result"]
    // const [visible, setVisible] = useState(false);
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 250
    })
    return (
        <animated.div id="resultBox" style={props} className="-mt-4 z-0 w-90 rounded-md h-80 border-2 border-blue-400 mx-auto max-w-3xl">
            {/* {console.log(Result["Result"])} */}

            {   
                // Display zero results when there is none
                RES.map( (result) =>(
                <div className = "w-full mt-1 p-2 h-10 bg-gray-300 cursor-pointer hover:bg-white text-gray-600">
                    <p>{result}</p>
                </div>
                ))
            }
            

        </animated.div>
    )
}

export default ResultBox
