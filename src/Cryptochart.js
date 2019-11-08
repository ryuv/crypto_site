import React from "react";
import './App.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Chart from "./chart";

function Cryptochart({ coins, coin }) {


    const id = { coin }.coin.id
    const rank = { coin }.coin.rank
    const symbol = { coin }.coin.symbol
    const name = { coin }.coin.name
    const supply = { coin }.coin.supply
    const price = parseInt({ coin }.coin.priceUsd).toLocaleString()
    const volumeUsd24Hr = parseInt({ coin }.coin.volumeUsd24Hr).toLocaleString()
    const changePercent24Hr = parseFloat({ coin }.coin.changePercent24Hr).toFixed(2)
    const marketCapUsd = parseInt({ coin }.coin.marketCapUsd).toLocaleString()

  
    return (

        <div className="wrap">
            <div className="header">
                <div className="logo">
                </div>
                <a></a>
                <a></a>
                <a></a>

                <div>
                    <div></div>
                    <div></div>
                </div>

            </div>

            <div className="sec_dashboard">
                <div>
                    <a className="dashboard">DASHBOARD</a>
                    <a className="dashboard">ASSETS</a>
                    <a className="dashboard">TRADE</a>
                    <a className="dashboard">SETTING</a>
                </div>
            </div>

            {/* 코인 리스트 */}
            <div className="sec_coinList">
                {
                    coins.map(a => (
                        <div className="div_coin">
                            <Link to={`coinPage/${a.id}`} className="coin" id={a.id}>{a.symbol}</Link>
                        </div>
                    ))
                }
            </div>

            {/* 코인 정보 */}
            <div className="sec_chart">
                <div className="sec_chart_name">
                    <div className="sec_chart_name_title">
                        <img className="coin_logo"></img>
                        <span className="coin_name">{name}</span>
                    </div>
                    <div className="sec_chart_name_price">
                        <div className="coin_price">Price</div>
                        <div className="coin_price_num">${price}</div>
                    </div>
                </div>
                <div className="sec_chart_div">
                    <div className="sec_chart_div_half">
                        <div className="sec_chart_div_half_sec1">${price}</div>
                        <div className="sec_chart_div_half_sec2">PRICE</div>
                    </div>
                    <div className="sec_chart_div_half">
                        <div className="sec_chart_div_half_sec1">${marketCapUsd}</div>
                        <div className="sec_chart_div_half_sec2">MARKET CAP</div>
                    </div>
                </div>
                <div className="sec_chart_div">
                    <div className="sec_chart_div_half">
                        <div className="sec_chart_div_half_sec1">{changePercent24Hr}%</div>
                        <div className="sec_chart_div_half_sec2">DAY CHANGE</div>
                    </div>
                    <div className="sec_chart_div_half">
                        <div className="sec_chart_div_half_sec1">${volumeUsd24Hr}</div>
                        <div className="sec_chart_div_half_sec2">24 HOUR VOLUME</div>
                    </div>
                </div>
                <div className="sec_chart_main">
                    {/* <div className="sec_chart_main_day"></div> */}
                        <Chart/>
                </div>
                {/* <div className="sec_chart_footer">
                    <div className="sec_chart_div_half"></div>
                    <div className="sec_chart_div_half"></div>
                </div> */}
            </div>
        </div>
    );
}



export default Cryptochart;