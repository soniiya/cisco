import React, { useEffect, useState } from 'react';
import './Latency.css'

const Latency = () => {
  const [latency, setLatency] = useState(null);
  let webSocket = null;

  useEffect(() => {
    webSocket = new WebSocket('ws://localhost:55455');

    webSocket.onmessage = (event) => {
      const packetTimestamp = parseInt(event.data);
      const currentTimestamp = new Date().getTime();
      const packetLatency = currentTimestamp - packetTimestamp;

      setLatency(packetLatency);
    };

    webSocket.onopen = () => {
      console.log('Websocket connected!');
    };

  }, []);

  return (
    <div className='main_container' style={{marginTop: '4rem'}}>
      <h2 style={{marginBottom: '2rem'}}>Packet Latency from Pylon</h2>

      <div className='container'>
      <p>Latency: {latency !== null ? `${latency} ms` : 'Connecting...'}</p>
      </div>
    </div>
  );
};

export default Latency;
