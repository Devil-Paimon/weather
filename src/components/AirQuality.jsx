import { useEffect } from "react";
import { MdOutlineGppGood } from "react-icons/md";

const airQualityDesc = {
  desc: [
    [
      "Clean air benefits all. It improves well-being for sensitive groups and enhances breathing for everyone. Enjoy outdoor activities freely with fresh air.",
    ],
    [
      "Fair air quality benefits everyone. It promotes well-being for sensitive groups and enhances breathing for all individuals. Feel free to engage in outdoor activities without any concerns, thanks to the presence of fresh and clean air.",
    ],
    [
      "Breathe freely outdoors with moderate air quality. Enjoy the benefits of clean air for well-being and enhanced breathing. Embrace outdoor activities with fresh air.",
    ],
    [
      "Stay indoors and prioritize well-being during poor air quality. Protect sensitive groups and limit outdoor activities. Let's improve air quality for a healthier future.",
    ],
    [
      "Prioritize health during very bad air quality. Protect sensitive groups and avoid outdoor activities. Clean air is crucial for well-being. Stay indoors and take care of yourself.",
    ],
  ],
};

const AirQuality = ({ colorCode, airQuality, aqi }) => {
  useEffect(() => {
    if (colorCode === "white") {
      var textColor = "black";
    } else {
      textColor = "white";
    }
    setTimeout(() => {
      document.getElementById("air-card").style.backgroundColor = colorCode;
      document.getElementById("air-card").style.color = textColor;
      document.getElementById("air-info").style.color = textColor;
      document.getElementById("air-heading").style.color = textColor;
      document.getElementById("air-border-outer").style.borderColor = textColor;
      document.getElementById("air-border-middle").style.borderColor =
        textColor;
      document.getElementById("air-border-inner").style.borderColor = textColor;
    }, 2000);
  }, [colorCode]);
  return (
    <>
      {aqi ? (
        <div id="air-card" className="h-64 w-11/12   pl-5 pr-5 ">
          <div className="flex justify-between items-center h-full gap-10">
            <div id="border-main">
              <div
                id="air-border-outer"
                className="border-8 border-black border-dotted rounded-full p-2"
              >
                <div
                  id="air-border-middle"
                  className="border-4 border-black border-dotted rounded-full p-2"
                >
                  <div
                    id="air-border-inner"
                    className="border-2 border-black border-dotted rounded-full p-2"
                  >
                    <MdOutlineGppGood className="text-[3rem] text-green-700" />
                  </div>
                </div>
              </div>
            </div>
            <div
              id="air-info"
              className="flex flex-col w-full justify-evenly items-start   h-full"
            >
              <div>
                <p id="air-heading" className="text-black font-bold underline ">
                  {`${airQuality}`}&nbsp; Quality Air
                </p>
              </div>
              <div>
                <p className="text-justify">{`${airQualityDesc.desc[aqi]}`}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="air-card"
          className="h-64 w-11/12 flex flex-col justify-center items-center pl-5 pr-5 "
        >
          <h1 className="text-xl font-semibold border-2 border-yellow-400 border-dashed p-5">
            No Data Is Available
          </h1>
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default AirQuality;
