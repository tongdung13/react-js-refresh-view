import React, { useState } from "react";
// import Watermark from "@uiw/react-watermark";
import "../assets/css/watermark.css";
import { Watermark } from "@hirohe/react-watermark";

export function RefreshHome() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>{Math.random()}</h1>
      <button onClick={refreshPage}>Refresh</button>
    </div>
  );
}

export function RefreshValue() {
  const [value, setValue] = useState();

  const refresh = () => {
    // it re-renders the component
    setValue({});
  };

  return (
    <Watermark
      text="test Tong Dung"
      textColor="black"
      lineHeight="100%"
      rotate="0"
      textSize="40"
      wrapperStyle
      fontFamily="Helvetica"
      // multiline="true"
      gutter="center"
    >
      <div>
        <p>{Math.random()}</p>
        <button onClick={refresh}>Refresh component</button>
      </div>
    </Watermark>
  );
}
const style = {
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  display: "block",
};
class RefreshApp extends React.Component {
  handleRefresh = () => {
    // by calling this method react re-renders the component
    this.setState({});
  };

  render() {
    return (
      // <Watermark
      //   content="UIW Watermark"
      //   // rotate={20}
      //   // gapY={0}
      //   // gapX={95}
      //   width={200}
      //   // gapY={180}
      //   height={150}
      //   fontSize={22}
      //   fontColor="rgb(255 0 0 / 25%)"
      //   style={{ background: "#fff" }}
      // >
      <div class="watermark">
        {/* <!-- Watermark container --> */}
        <div class="watermark__inner">
          {/* <!-- The watermark --> */}
          <div class="watermark__body">Draft</div>
        </div>
        <div style={{ height: "100%" }}>
          <h1>{Math.random()}</h1>
          <button onClick={this.handleRefresh}>Refresh component</button>
        </div>
      </div>

      // </Watermark>
    );
  }
}

export default RefreshApp;
