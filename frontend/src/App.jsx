import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      if (data) {
        setMessage(data);
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
}

export default App;
