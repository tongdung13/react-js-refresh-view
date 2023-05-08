import React, { useState } from "react";

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
      <div>
        <h1>{Math.random()}</h1>
        <button onClick={this.handleRefresh}>Refresh component</button>
      </div>
    );
  }
}

export default RefreshApp;
