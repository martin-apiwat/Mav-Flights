import { useEffect, useState } from "react";

export default function App() {
  const [flights, setFlights] = useState(null);

  async function getFligths() {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    console.log(data);
    setFlights(data);
  }

  useEffect(() => {
    getFligths();
  }, []);

  return (
    <div className="App">
      {flights
        ? flights.map((flight) => <div key={flight._id}>{flight.airline}</div>)
        : "Loading..."}
    </div>
  );
}
