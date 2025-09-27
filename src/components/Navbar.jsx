import { useState } from "react";

const Navbar = ({ planets, setSelectedPlanet }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePlanetSelect = (planetName) => {
    setSelectedPlanet(planetName);
    setIsMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <div className="navbar relative border-b border-gray-600 p-5">
      {/* Desktop/Tablet Layout */}
      <div className="hidden items-center justify-between md:flex">
        <h2 className="font-[Antonio] text-3xl">THE PLANETS</h2>
        <div className="planets flex gap-6">
          {planets.map((planet) => (
            <p
              key={planet.name}
              className="cursor-pointer transition-colors hover:text-gray-300"
              onClick={() => handlePlanetSelect(planet.name)}
            >
              {planet.name}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <h2 className="font-[Antonio] text-3xl">THE PLANETS</h2>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <div
              className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            ></div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 left-0 z-50 border-b border-gray-600 bg-[#070724]">
            <div className="flex flex-col">
              {planets.map((planet) => (
                <button
                  key={planet.name}
                  className="border-b border-gray-700 px-5 py-4 text-left transition-colors hover:bg-gray-800"
                  onClick={() => handlePlanetSelect(planet.name)}
                >
                  {planet.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
