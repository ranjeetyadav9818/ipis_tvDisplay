import React, { useEffect, useState } from 'react';
import './App.css';
import { TvDisplay } from './tvDisplay/index';
import { ShowMedia } from '../src/showMedia/index';
import { Socket } from './Socket/index';
import displayService from "./service/displayService"
import {
  BrowserRouter as Router, Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  const [trainDataArray, setTrainDataArray] = useState<any>([])
  const [stationName, setStationName] = useState<any>("")
  const [totalResponse, setTotalResponse] = useState<any>()
  const [msg, setMsg] = useState<any>("");


  let obj = {
    msg,
    setMsg,
  }

  const getTrainData = async () => {
    const response = await displayService.get("/api/v1/getTvDisplay")
    console.log(response, "<<<<<<<<")
    if (response && response?.status == 200) {
      setTotalResponse(response?.data?.data)
      setTrainDataArray(response?.data?.data?.data)
      setStationName(response?.data?.data?.stationName)
    }
  }

  useEffect(() => {
    getTrainData()
  }, [])

  return (<>
    <Router>
      <Socket socketProps={obj} />
      <Routes>
        <Route path="/display" element={<TvDisplay totalResponse={totalResponse} trainDataArray={trainDataArray} stationName={stationName} />} />
        <Route path="/" element={<Navigate replace to="/display" />} />
        <Route path="/displayMedia" element={<ShowMedia mediaProps={obj} />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
