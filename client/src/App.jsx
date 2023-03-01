import { useEffect, useState } from "react";
import FlightCard from "./FlightCard";

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
        ? flights.map((flight) => (
            <FlightCard key={flight._id} flight={flight} />
          ))
        : "Loading..."}
    </div>
  );
}
