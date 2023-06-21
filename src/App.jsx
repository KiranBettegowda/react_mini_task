import React, {useEffect, useState} from 'react'


const App = () => {
    let [data, setData] = useState([])
    let [performers, setPerformer] = useState([])
    let [bottomPerformers, setBottomPerformers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
              const response = await fetch('http://localhost:4000/payout');
              const response1 = await fetch('http://localhost:4000/top_performers');
              const response2 = await fetch('http://localhost:4000/bottom_performers');
              const jsonData = await response.json();
              const jsonData1 = await response1.json();
              const jsonData2 = await response2.json();
              console.log(jsonData);
              console.log(jsonData1);
              console.log(jsonData2);
              setData(jsonData)
              setPerformer(jsonData1)
              setBottomPerformers(jsonData2)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  return (
    <div >
        <h2 id='start'>{data.map((hello)=>{
            return(
                <div id='divBlock' key={hello.level}>
                    <h2>{hello.amount}</h2>
                    <h3>{hello.level}</h3>
                    <h3>{hello.frquency}</h3>
                </div>
            )
        })}</h2>


        <h3 id='start'>{performers.map((hello)=>{
            return(
                <div >
                    <h2>{hello.name}</h2>
                    <h2>{hello.earnings}</h2>
                    <h2>{hello.level}</h2>
                </div>
            )
        })}</h3> 



        <h3 id='start'>{bottomPerformers.map((hello)=>{
            return(
                <div key={hello.level}>
                    <h2>{hello.name}</h2>
                    <h2>{hello.earnings}</h2>
                    <h2>{hello.level}</h2>
                </div>
            )
        })}</h3>
    </div>
  )
}

export default App;



