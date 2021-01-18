import React, { useState } from "react"
import { Bar } from 'react-chartjs-2';
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
      const [data,setData] = useState(state)
      return (
            <div className={Style.mainContainer}>
            <Bar
                data={data}
                options={{
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
          
            </div>
        )
  ;}