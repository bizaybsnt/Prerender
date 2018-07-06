import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import image from "./react.png";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>New Title from Helmet</title>
          <meta
            property="og:url"
            content="http://bizay.localhost.run"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="New Title from Prerender"
          />
          <meta
            property="og:description"
            content="This is how we can set description from React Helmet"
          />
          <meta
            property="og:image"
            content={`http://bizay.localhost.run${image}`}
          />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={image} width={50} height={50}/>
      </div>
    );
  }
}

export default App;
