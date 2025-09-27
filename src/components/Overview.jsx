const Overview = ({
  planets,
  selectedPlanet,
  loading,
  planetData,
  setPlanetData,
}) => {
  // console.log("Selected planet data type:", planetData);
  let content = null;

  const planet = planets.find((p) => p.name === selectedPlanet);
  if (!planet) {
    return <div>Planet not found</div>;
  }
  if (planetData === "overview") {
    content = planet.overview?.content || "No overview available";
  } else if (planetData === "internal") {
    content = planet.structure?.content || "No internal structure available";
  } else if (planetData === "surface") {
    content = planet.geology?.content || "No surface geology available";
  }

  // Fix image path by replacing ./assets/ with /images/
  // Omo .. AI did the getImagePath
  const getImagePath = (imagePath) => {
    if (!imagePath) return "";
    return imagePath.replace("./assets/", "/images/");
  };

  // Get the correct image based on the selected data type
  const getImageForDataType = () => {
    if (!planet.images) return "";

    if (planetData === "internal") return planet.images.internal;
    if (planetData === "surface") return planet.images.geology;
    return planet.images.planet; // default for overview
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-500 lg:hidden">
          <button
            className={`mt-3 flex items-center justify-start gap-4 px-4 py-3 text-sm font-semibold tracking-[0.5em] text-white uppercase transition hover:border-b hover:border-b-[#6D2ED5] ${planetData === "overview" && "border-b-2 border-b-[#6D2ED5]"}`}
            onClick={() => setPlanetData("overview")}
          >
            <span className="text-[8px]">Overview</span>
          </button>
          <button
            className={`mt-3 flex items-center justify-start gap-4 px-4 py-3 font-semibold tracking-[0.5em] text-white uppercase transition hover:border-b hover:border-b-[#6D2ED5] ${planetData === "internal" && "border-b-2 border-b-[#6D2ED5]"}`}
            onClick={() => setPlanetData("internal")}
          >
            <span className="text-[8px]">Structure</span>
          </button>
          <button
            className={`mt-3 flex items-center justify-start gap-4 px-4 py-3 text-sm font-semibold tracking-[0.5em] text-white uppercase transition hover:border-b hover:border-b-[#6D2ED5] ${planetData === "surface" && "border-b-2 border-b-[#6D2ED5]"}`}
            onClick={() => setPlanetData("surface")}
          >
            <span className="text-[8px]">Surface</span>
          </button>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : planet ? (
        <div className="mx-auto mt-20 max-w-[90%] lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Image Section - Takes up more space on desktop */}
          <div className="flex items-center justify-center lg:col-span-7">
            <img
              src={getImagePath(getImageForDataType())}
              alt={`${planet.name} - ${planetData}`}
              className="h-[80%] w-[80%] max-w-md lg:max-w-none"
              onError={(e) => {
                console.log("Image failed to load:", e.target.src);
                e.target.style.display = "none";
              }}
            />
          </div>

          {/* Content Section - Takes remaining space */}
          <div className="lg:col-span-5">
            <h1 className="mt-20 text-center font-[Antonio] text-5xl uppercase lg:mt-0 lg:text-start lg:text-7xl">
              {planet.name}
            </h1>
            <p className="mt-5 text-center leading-relaxed font-light tracking-wide text-white/75 lg:text-start lg:text-lg">
              {content}
            </p>

            {/* Desktop Buttons */}
            <div className="mt-10 hidden lg:block">
              <button
                className={`mt-3 flex w-full items-center justify-start gap-4 border border-gray-500 px-6 py-4 text-sm font-semibold tracking-[0.5em] text-white uppercase transition hover:bg-[#5c26b6] ${planetData === "overview" && "border-[#6D2ED5] bg-[#6D2ED5]"}`}
                onClick={() => setPlanetData("overview")}
              >
                <span className="font-light text-gray-300">01</span>
                <span className="text-[12px]">Overview</span>
              </button>
              <button
                className={`mt-3 flex w-full items-center justify-start gap-4 border border-gray-500 px-6 py-4 text-sm font-semibold tracking-[0.5em] text-white uppercase transition hover:bg-[#5c26b6] ${planetData === "internal" && "border-[#6D2ED5] bg-[#6D2ED5]"}`}
                onClick={() => setPlanetData("internal")}
              >
                <span className="font-light text-gray-300">02</span>
                <span className="text-[10px]">Internal Structure</span>
              </button>
              <button
                className={`mt-3 flex w-full items-center justify-start gap-4 border border-gray-500 px-6 py-4 text-sm font-semibold tracking-[0.5em] text-white uppercase transition hover:bg-[#5c26b6] ${planetData === "surface" && "border-[#6D2ED5] bg-[#6D2ED5]"}`}
                onClick={() => setPlanetData("surface")}
              >
                <span className="font-light text-gray-300">03</span>
                <span className="text-[12px]">Surface Geology</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-white">
          <p>Planet not found</p>
        </div>
      )}
    </>
  );
};

export default Overview;
