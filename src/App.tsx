import React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  return (
    <div>
      <h1>Чатик</h1>
    </div>
  );
}

export default App;