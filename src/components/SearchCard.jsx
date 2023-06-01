import { useEffect, useState } from "react";
import { TbListSearch } from "react-icons/tb";
const SearchCard = () => {
  const [cardColor, setCardColor] = useState("white");

  const toggleColor = () => {
    if (cardColor === "white") {
      setCardColor("black");
    } else {
      setCardColor("white");
    }
  };

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
    </>
  );
};

export default SearchCard;
