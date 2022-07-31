import './App.css';
import * as XLSX from 'xlsx';
import React, { useState } from 'react';
import {Chart as ChartJS, Title, tooltip, LineElemnet, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import {Line} from 'react-chartjs-2';
import { ChakraProvider, Container,Stack, HStack, VStack } from '@chakra-ui/react'
import LineChart from './components/LineChart';

function App() {
  const[items, setItems] = useState([])

  const readExcel=(file)=>{
    const promise = new Promise((resolve, reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file)
      fileReader.onload=(e)=>{
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {type:'buffer'});
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws)
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d)=>{
      console.log(d);
      setItems(d);
    })
  }
  console.log(items);
  
  const four = items.map((d)=>d["2004-05"])
  const five = items.map((d)=>d["2005-06"])
  const six = items.map((d)=>d["2006-07"])
  const seven = items.map((d)=>d["2007-08"])
  const eight = items.map((d)=>d["2008-09"])
  const nine = items.map((d)=>d["2009-10"])
  const ten = items.map((d)=>d["2010-11"])
  const eleven = items.map((d)=>d["2011-12"])

  const dataset = {
    labels: ["2004-05","2005-06","2006-07","2007-08","2008-09","2009-10","2010-11","2011-12"],
    datasets: [
      {
        label: "Rice",
        data: [four[0],five[0],six[0],seven[0],eight[0],nine[0],ten[0],eleven[0]],
        fill: false,
        borderColor: "#4cc9f0",
        backgroundColor: '#4cc9f0'
      },
      {
        label: "Wheat",
        data: [four[1],five[1],six[1],seven[1],eight[1],nine[1],ten[1],eleven[1]],
        fill: false,
        borderColor: "#4895ef",
        backgroundColor: "#4895ef"
      },
      {
        label: "Coarse Cereals",
        data: [four[2],five[2],six[2],seven[2],eight[2],nine[2],ten[2],eleven[2]],
        fill: false,
        borderColor: "#4361ee",
        backgroundColor: "#4361ee"
      },
      {
        label: "Pulses",
        data: [four[3],five[3],six[3],seven[3],eight[3],nine[3],ten[3],eleven[3]],
        fill: false,
        borderColor: "#3f37c9",
        backgroundColor: "#3f37c9"
      },
      {
        label: "Vegetables",
        data: [four[4],five[4],six[4],seven[4],eight[4],nine[4],ten[4],eleven[4]],
        fill: false,
        borderColor: "#31906E",
        backgroundColor: "#31906E"
      },
      {
        label: "Fruits",
        data: [four[5],five[5],six[5],seven[5],eight[5],nine[5],ten[5],eleven[5]],
        fill: false,
        borderColor: "#480ca8",
        backgroundColor: "#480ca8"
      },
      {
        label: "Milk",
        data: [four[6],five[6],six[6],seven[6],eight[6],nine[6],ten[6],eleven[6]],
        fill: false,
        borderColor: "#7209b7",
        backgroundColor: "#7209b7"
      },
      {
        label: "Eggs, Fish and Meat",
        data: [four[7],five[7],six[7],seven[7],eight[7],nine[7],ten[7],eleven[7]],
        fill: false,
        borderColor: "#b5179e",
        backgroundColor: "#b5179e"
      },
      {
        label: "Oilseeds",
        data: [four[8],five[8],six[8],seven[8],eight[8],nine[8],ten[8],eleven[8]],
        fill: false,
        borderColor: "#9b5de5",
        backgroundColor: "#9b5de5"
      },
      {
        label: "Sugarcane",
        data: [four[9],five[9],six[9],seven[9],eight[9],nine[9],ten[9],eleven[9]],
        fill: false,
        borderColor: "#8e7dbe",
        backgroundColor: "#8e7dbe"
      },
      {
        label: "Fibers",
        data: [four[10],five[10],six[10],seven[10],eight[10],nine[10],ten[10],eleven[10]],
        fill: false,
        borderColor: "#5e548e",
        backgroundColor: "#5e548e"
      }
    ]
  };

  return (
    <ChakraProvider>
    <VStack className="App" >
      
      <p></p>
      <p></p>
      <Container maxW='60%' maxH='500px'color='white'>
        <LineChart ChartData={dataset}/>
      </Container>
      <p></p>
      <p></p>
      <input
      class="foo"
      type="file"
      onChange={(e) => {
        const file = e.target.files[0];
        readExcel(file);
      }}
      />
      <p></p>
      <p></p>
      <Container maxWidth={"100%"}>
      <table class="table">
        <thead class="table-darker">
          <tr>
            <th scope="col">Crop</th>
            <th scope="col">2004-05</th>
            <th scope="col">2005-06</th>
            <th scope="col">2006-07</th>
            <th scope="col">2007-08</th>
            <th scope="col">2008-09</th>
            <th scope="col">2009-10</th>
            <th scope="col">2010-11</th>
            <th scope="col">2011-12</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {items.map((d)=>(
            <tr>
            <th scope="row">{d.Crop}</th>
            <td>{d["2004-05"]}</td>
            <td>{d["2005-06"]}</td>
            <td>{d["2006-07"]}</td>
            <td>{d["2007-08"]}</td>
            <td>{d["2008-09"]}</td>
            <td>{d["2009-10"]}</td>
            <td>{d["2010-11"]}</td>
            <td>{d["2011-12"]}</td>
          </tr>
          ))}
          
        </tbody>
        </table>
        </Container>

      

  </VStack>
  </ChakraProvider>
    
  );
}

export default App;
