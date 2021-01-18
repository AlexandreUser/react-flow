import React from "react"
import { Doughnut,Line, Radar } from 'react-chartjs-2';
import Style from "../styles/dashboard.module.css"
const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'placeholder',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  export default props =>{ 
      return (
            <div className={Style.mainContainer}>
            <Doughnut
                data={state}
                options={{
                    color: [
                        'red',    // color for data at index 0
                        'blue',   // color for data at index 1
                        'green',  // color for data at index 2
                        'black',  // color for data at index 3
                        //...
                    ],
                title:{
                    display:true,
                    text:'Placholder Data',
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'right'
                }
                }}
            />
            <br/>
                <Line
                data={state}
                options={{
                    color: [
                        'red',    // color for data at index 0
                        'blue',   // color for data at index 1
                        'green',  // color for data at index 2
                        'black',  // color for data at index 3
                        //...
                    ],
                title:{
                    display:true,
                    text:'Placholder Data',
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'right'
                }
                }}
            />
            <br/>
          

            </div>
        )
  ;}