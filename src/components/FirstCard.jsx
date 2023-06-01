import { useEffect } from "react";
import { WiDayCloudyWindy } from "react-icons/wi";
const FirstCard = ({
  colorCode,
  cityName,
  weather,
  humidity,
  wind,
  temp,
  pressure,
}) => {
  useEffect(() => {
    if (colorCode === "white") {
      var textColor = "black";
    } else {
      textColor = "white";
    }
    setTimeout(() => {
      document.getElementById("first-card").style.backgroundColor = colorCode;
      document.getElementById("first-card").style.color = textColor;
      document.getElementById("temp").style.color = textColor;
      document.getElementById("weather-icon").style.color = textColor;
      document.getElementById("weather-info").style.color = textColor;
    }, 2000);
  }, [colorCode]);

  return (
    <>
      {temp ? (
        <div id="first-card" className="h-64 w-11/12 flex flex-col ">
          <div className="p-5 flex justify-around items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 id="temp" className="text-6xl font-bold text-black">
                {`${temp}`}&deg;C
              </h1>
              <div>
                <p>{`${weather}`}</p>
              </div>
            </div>
            <div id="weather-icon">
              <WiDayCloudyWindy className="text-[9rem] text-grey " />
            </div>
          </div>
          <div
            id="weather-info"
            className="flex  justify-between items-start pl-8 pr-8 md:pl-16 md:pr-16  md:text-md text-black text-sm  font-bold"
          >
            <div>
              <p>
                Location : <br /> {`${cityName}`}
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p>Pressure : {`${pressure}`}pha</p>

              <p>Humidity : {`${humidity}`}% </p>
            </div>
            <div>
              <p>
                Wind : <br /> {`${wind}`}Km/Hr
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="first-card"
          className="h-64 w-11/12 flex flex-col justify-center items-center p-5 "
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

export default FirstCard;
