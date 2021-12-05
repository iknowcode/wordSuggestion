import { React, useState } from "react";
import { useSpring, animated } from "react-spring";


const Sample = () => {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })

  return <animated.h1 className="w-20 p-4 bg-blue-400 mx-auto text-white font-bold rounded-lg" style={props}>hello</animated.h1>
};

export default Sample;

