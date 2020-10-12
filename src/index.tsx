import React from "react";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

class Tilt extends React.Component<{options: TiltOptions}> {
  tiltRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    VanillaTilt.init(this.tiltRef.current!, this.props.options)
  }

  render() {
    return <div ref={this.tiltRef} {...this.props} />
  }
}

export default Tilt