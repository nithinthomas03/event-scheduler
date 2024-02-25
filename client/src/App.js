import React from "react";
import Clock from "./component/Clock";
import CreateSchedule from "./components/CreateSchedule";
import Schedules from "./components/Schedules";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <div className='app__container'>
      <Clock />
      <CreateSchedule />
      <Schedules />
    </div>
  );
}

export default App;
