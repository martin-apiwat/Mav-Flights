import { useEffect, useState } from "react";
import FlightRow from "./components/FlightRow";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [flights, setFlights] = useState(null);

  async function getFligths(search) {
    console.log("hej");
    console.log(search);
    const response = await fetch(
      "http://localhost:3000/flights?search=" + (search || "")
    );
    const data = await response.json();
    console.log(data);
    setFlights(data);
  }

  useEffect(() => {
    getFligths();
  }, []);

  return (
    <div className="App">
      <SearchBar getFligths={getFligths} />
      <table className="flights-table">
        <tr className="flights-table-row flights-table-head">
          <td>Airline</td>
          <td>Airport</td>
          <td>Destiantion</td>
          <td>Departure</td>
          <td>Arrival</td>
          <td>Price</td>
        </tr>
        {flights
          ? flights.map((flight) => (
              <FlightRow key={flight._id} flight={flight} />
            ))
          : "Loading..."}
      </table>
    </div>
  );
}
