import FirstCard from "../components/FirstCard";
import { useEffect, useState } from "react";
import { TbListSearch } from "react-icons/tb";
import AirQuality from "../components/AirQuality";

const Page = () => {
  const [cardColor, setCardColor] = useState("white");
  const [search, setSearch] = useState(null);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [temp, setTemp] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [airIndex, setAirIndex] = useState(null);
  const [aqi, setAqi] = useState(null);
  const toggleColor = () => {
    if (cardColor === "white") {
      setCardColor("black");
    } else {
      setCardColor("white");
    }
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7491737005160a22602fbfc9c991c609`;
      const response = await fetch(url);
      const resData = await response.json();
      setCityData(resData);
      setCity(resData.main);
      setWeather(resData.weather[0].description);
      setHumidity(resData.main.humidity);
      setWind(resData.wind.speed);
      setTemp(resData.main.temp);
      setPressure(resData.main.pressure);
      setLatitude(resData.coord.lat);
      setLongitude(resData.coord.lon);
    };
    fetchApi();
  }, [search]);

  useEffect(() => {
    const fetchApiAirIndex = async () => {
      const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=7491737005160a22602fbfc9c991c609`;
      const response = await fetch(url);
      const resData = await response.json();
      const aqi = resData.list[0].main.aqi;
      setAqi(aqi);
      if (aqi === 1) {
        setAirIndex("Good");
      } else if (aqi === 2) {
        setAirIndex("Fair");
      } else if (aqi === 3) {
        setAirIndex("Moderate");
      } else if (aqi === 4) {
        setAirIndex("Poor");
      } else if (aqi === 5) {
        setAirIndex("Very bad");
      }
    };
    fetchApiAirIndex();
  }, [search]);

  useEffect(() => {
    if (cardColor === "white") {
      localStorage.setItem("cardColor", cardColor);
      const moonCloudFront = document.getElementById("moon-cloud-front");
      moonCloudFront.className = "vanish-cloud-front";
      const moonCloudBack = document.getElementById("moon-cloud-back");
      moonCloudBack.className = "vanish-cloud-back";
      const sunCloudFront = document.getElementById("sun-cloud-front");
      sunCloudFront.className = "cloud-front-main";
      const sunCloudBack = document.getElementById("sun-cloud-back");
      sunCloudBack.className = "cloud-back-main";

      setTimeout(() => {
        const moonToggle = document.getElementById("moon-toggle");
        moonToggle.className = "hide-moon";
        const sunToggle = document.getElementById("sun-toggle");
        sunToggle.className = "show-sun";
        document.getElementById("card").style.backgroundColor = cardColor;
      }, 2000);
    } else {
      localStorage.setItem("cardColor", cardColor);
      const moonCloudFront = document.getElementById("moon-cloud-front");
      moonCloudFront.className = "cloud-front-main-1-1";
      const moonCloudBack = document.getElementById("moon-cloud-back");
      moonCloudBack.className = "cloud-back-main-1-1";
      const sunCloudFront = document.getElementById("sun-cloud-front");
      sunCloudFront.className = "vanish-cloud-front";
      const sunCloudBack = document.getElementById("sun-cloud-back");
      sunCloudBack.className = "vanish-cloud-back";

      setTimeout(() => {
        const sunToggle = document.getElementById("sun-toggle");
        sunToggle.className = "hide-sun";
        const moonToggle = document.getElementById("moon-toggle");
        moonToggle.className = "show-moon";
        document.getElementById("card").style.backgroundColor = cardColor;
      }, 2000);
    }
  }, [cardColor]);
  return (
    <>
      <div className="flex flex-col">
        <div>
          <div className="flex h-full pb-5 flex-col justify-center items-center overflow-hidden">
            <div
              id="card"
              className={` w-11/12 h-72 bg-white mt-10 flex flex-col justify-start items-center gap-10`}
            >
              <div id="search-box" className="relative w-3/4 mt-5">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 p-2 bg-white"
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
                <span className="absolute right-2 top-1 cursor-pointer">
                  <TbListSearch className="text-2xl" />
                </span>
              </div>
              <div onClick={toggleColor} id="sun-toggle" className="show-sun ">
                <div id="sun-cloud-front" className="cloud-front-main">
                  <div id="cloud-front-1"></div>
                  <div id="cloud-back-1"></div>
                </div>

                <div id="sun-main">
                  <div id="sun-ray"></div>
                  <div id="sun"></div>
                </div>
                <div id="sun-cloud-back" className="cloud-back-main">
                  <div id="cloud-front-2"></div>
                  <div id="cloud-back-2"></div>
                </div>
              </div>
              <div onClick={toggleColor} id="moon-toggle" className="hide-moon">
                <div id="moon-cloud-front" className="cloud-front-main-1-1">
                  <div id="cloud-front-1-1"></div>
                  <div id="cloud-back-1-1"></div>
                </div>
                <div className="moon">
                  <div className="moon-back"></div>
                  <div className="moon-front"></div>
                </div>
                <div id="moon-cloud-back" className="cloud-back-main-1-1">
                  <div id="cloud-front-2-2"></div>
                  <div id="cloud-back-2-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center items-center md:p-7">
            <FirstCard
              colorCode={cardColor}
              cityName={search}
              humidity={humidity}
              weather={weather}
              wind={wind}
              temp={temp}
              pressure={pressure}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:p-7">
            <AirQuality colorCode={cardColor} airQuality={airIndex} aqi={aqi} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
