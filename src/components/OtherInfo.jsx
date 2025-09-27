const OtherInfo = ({ planets, selectedPlanet }) => {
  const planet = planets.find((p) => p.name === selectedPlanet);
  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <>
      <div className="gap-6 py-10 lg:grid lg:grid-cols-4">
        <div className="mb-3 flex items-center justify-between border border-gray-600 p-3 text-start lg:mb-0 lg:block lg:p-8">
          <p className="tracking-[0.5em] text-white uppercase">Rotation Time</p>
          <p className="font-[Antonio] lg:text-5xl">{planet.rotation}</p>
        </div>
        <div className="mb-3 flex items-center justify-between border border-gray-600 p-3 text-start lg:mb-0 lg:block lg:p-8">
          <p className="tracking-[0.5em] text-white uppercase">
            Revolution Time
          </p>
          <p className="font-[Antonio] lg:text-5xl">{planet.revolution}</p>
        </div>
        <div className="mb-3 flex items-center justify-between border border-gray-600 p-3 text-start lg:mb-0 lg:block lg:p-8">
          <p className="tracking-[0.5em] text-white uppercase">Radius</p>
          <p className="font-[Antonio] lg:text-5xl">{planet.radius}</p>
        </div>
        <div className="mb-3 flex items-center justify-between border border-gray-600 p-3 text-start lg:mb-0 lg:block lg:p-8">
          <p className="tracking-[0.5em] text-white uppercase">Average Temp.</p>
          <p className="font-[Antonio] lg:text-5xl">{planet.temperature}</p>
        </div>
      </div>
    </>
  );
};

export default OtherInfo;
