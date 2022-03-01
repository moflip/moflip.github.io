import React, { useEffect, useState } from "react"
import { BannerStyled } from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export const Banner = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-3-5`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {" "}
      </span>
    );
  });
  return (
    <BannerStyled>
      <div className="container">
        <div className="flex h-[600px] md:h-[800px] items-center">
          <div className="w-full sm:w-1/2">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Tiket NFT
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                untuk
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                BRI LIGA 1
              </h1>
              <div
                className="flex bg-gray-100 rounded-md justify-around md:max-w-xs mt-10 w-full"
                style={{ flexFlow: "wrap" }}
              >
                <div className="text-center p-5">
                  <p className="font-bold">{timerComponents[0]}</p>
                  <span className="text-gray-500 text-xs">days</span>
                </div>
                <div className="text-center p-5">
                  <p className="font-bold">{timerComponents[1]}</p>
                  <span className="text-gray-500 text-xs">hours</span>
                </div>
                <div className="text-center p-5">
                  <p className="font-bold">{timerComponents[2]}</p>
                  <span className="text-gray-500 text-xs">minutes</span>
                </div>
                <div className="text-center p-5">
                  <p className="font-bold">{timerComponents[3]}</p>
                  <span className="text-gray-500 text-xs">seconds</span>
                </div>
              </div>
              <div className="flex space-x-6 mt-10 w-full sm:w-auto">
                <div>
                  <button className="bg-indigo-600 border-2 border-indigo-600 hover:bg-indigo-700 transition text-white py-4 px-6 rounded-lg">
                    Daftar Sekarang
                  </button>
                </div>
                <div>
                  <a href="https://discord.gg/vpKewhGs4c" >
                    <button className="border-2 border-indigo-600 text-indigo-600 py-4 px-6 rounded-lg">
                      Join Discord  <FontAwesomeIcon icon={faDiscord} /> 
                    </button>
                  </a>
                </div>
              </div>
              <div className="mt-10">
                <button className="border border-gray-300 rounded-full h-14 w-14 flex justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.75V23.25"
                      stroke="#2C2C2C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 12.75L12 23.25L22.5 12.75"
                      stroke="#2C2C2C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerStyled>
  )
}
