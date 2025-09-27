import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import OtherInfo from "./components/OtherInfo";
function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState("Earth");
  const [planetData, setPlanetData] = useState("overview");
  // console.log(selectedPlanet);
  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/data.json");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setPlanets(data);
      } catch (err) {
        console.error("Failed to fetch planets:", err);
        setError(err.message);
        // Fallback data
        setPlanets([
          { name: "Mercury" },
          { name: "Venus" },
          { name: "Earth" },
          { name: "Mars" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);
  return (
    <>
      {/* <h1>Hello Planets</h1> */}
      <div className="h-screen w-screen bg-[url('images/background-stars.svg')] p-5 font-[League_Spartan] text-white">
        <Navbar planets={planets} setSelectedPlanet={setSelectedPlanet} />
        <Overview
          planets={planets}
          selectedPlanet={selectedPlanet}
          loading={loading}
          planetData={planetData}
          setPlanetData={setPlanetData}
        />
        <OtherInfo planets={planets} selectedPlanet={selectedPlanet} />
      </div>
    </>
  );
}

export default App;
