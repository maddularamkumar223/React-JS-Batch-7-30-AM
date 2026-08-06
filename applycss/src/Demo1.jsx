import "./demo.css"

import Style from "./demoData.module.css"

const Demo1 = () => {
  return (
    <div>
        <h1 className="demo" id={Style.h1}>I am a Demo 1 Component</h1>
    </div>
  )
}

export default Demo1