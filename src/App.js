
import { Bar, Pie } from 'react-chartjs-2';
import {Chart} from "chart.js/auto"



export default function App(){
  let studentScores = [
        {name: "ted", score: 70},
        {name: "sally", score: 100},
        {name: "marcus", score: 70},
        {name: "micheal", score: 70},
    ]

    let names = []
    for(let i = 0; i < studentScores.length; i++){
      let name = studentScores[i].name
      names.push(name)
    }

    let scores = []
    for(let i = 0; i < studentScores.length; i++){
      let score = studentScores[i].score
      scores.push(score)
    }

    let graphdata = {
        labels: names,
        datasets: [
          {
            data: scores,       
          }
        ],
      };
    return <>
            <Bar data={graphdata} />
            <Pie data={graphdata} />
          </>
}
