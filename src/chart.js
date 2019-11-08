
import React, { Component } from 'react'
import Chart from "chart.js";
import axios from "axios";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
          date: [
          ],
          price: [

          ]
        };
      }
    
    
    async componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");


        await axios.get("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1").then((res) => {
            const arr = res.data.data
            arr.map(a => (
                this.setState({price:this.state.price.concat(parseInt(a.priceUsd))})
            ))
        })

        await axios.get("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1").then((res)=>{
            const arr = res.data.data
            arr.map(a=>(
                this.setState({date: this.state.date.concat(a.date.slice(0,10))})
            ))
        })

        console.log(this.state.date);


        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.state.date,
                datasets: [
                    {
                        label: "24H Price",
                        data: this.state.price,
                        backgroundColor: '#0f192e',
                        borderColor: '#FF8008'
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }


    render() {
        return (
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                    width="400"
                    height="200"
                    className="chart_css"
                />
        )
    }
}