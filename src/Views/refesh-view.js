import React, { useState } from "react";
import Watermark from '@uiw/react-watermark';

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
    <div>
      <p>{Math.random()}</p>
      <button onClick={refresh}>Refresh component</button>
    </div>
  );
}

class RefreshApp extends React.Component {
  handleRefresh = () => {
    // by calling this method react re-renders the component
    this.setState({});
  };

  render() {
    return (
      <Watermark
      content="UIW Watermark"
      rotate={20}
      // gapY={0}
      gapX={5}
      width={100}
      gapY={80}
      height={5}
      fontSize={12}
      fontColor="rgb(255 0 0 / 25%)"
      style={{ background: '#fff' }}
    >
        <div>
        <h1>{Math.random()}</h1>
        <button onClick={this.handleRefresh}>Refresh component</button>
      </div>
    </Watermark>
    );
  }
}

export default RefreshApp;
