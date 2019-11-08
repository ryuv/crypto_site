import React, { Component } from "react";
import "./loading.css"
import "./App.css";
import Cryptochart from "./Cryptochart.js";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import coinPage from "./coinPage";

import Routes from "./Routes";

class App extends Component {
  componentDidMount() {
    this.getCoin();
  }


  state = {
    coins : [],
    isloading : true,
    coin : null
  };

  getCoin = async() => {
      const {data: {data}} = await axios.get("https://api.coincap.io/v2/assets")
      //추후 사이트 별로 수정 해야함
      const {data: {data: coin}} = await axios.get("https://api.coincap.io/v2/assets/bitcoin");
      this.setState({coins:data, isloading:false, coin});
  }

  render() {
    const {coins,isloading,coin} = this.state;
    return (
      <section>
        {isloading ? (
          <div className="loading">
          <span class="loader"><span class="loader-inner"></span></span>
          </div>
        ) : (
          <div>
            <Routes coins={coins}
              coin={coin}/>
            
          </div>
        )}
      </section>
    );
  }
}

export default App;
