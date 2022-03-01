import React from "react"
import { AboutUsStyled } from "./styled"
import { StaticImage } from "gatsby-plugin-image"

export const AboutUs = () => {
  return (
    <AboutUsStyled className="-top-10">
      <div className="bg-[#5B5EEB]">
        <div className="container">
          <div className="flex relative space-x-10 justify-center z-20 text-white min-h-[400px] py-12 items-center">
            <div>
              <div>
                <StaticImage src="../../images/iphone-x.png" alt="" />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <h2 className="text-5xl font-bold">Tentang Kita</h2>
                <p className="mt-8">
                  TiketNFT adalah platform digital yang menyediakan penjualan tiket pertandingan BRI Liga 2021/2022 seri 5 dalam bentuk NFT. Pertandingan yang biasanya dipenuhi dengan sorak-sorai serta euforia dari para penonton, sayangnya belum bisa terwujud selama masa pandemi. TiketNFT hadir dan memberikan media bagi para penonton untuk tetap memberikan dukungan secara langsung kepada tim Liga 1 favoritmu melalui pembelian tiket NFT.
                </p>
                <br></br>
                <p>
                TiketNFT bekerja sama dengan BRI Liga 1 untuk memperkuat hubungan antara para fans setia dengan klub kesayangan-nya. Melalui pembelian tiket, para fans setia berkesempatan untuk mendapatkan edisi NFT spesial dari Liga 1 serta berbagai keuntungan lainnya meliputi jersey, merchandise, dan kesempatan bertemu dengan pemain/klub favoritmu.
                </p>

                <div className="mt-8">
                  <button className="border bg-white border-gray-300 rounded-full h-14 w-14 flex justify-center items-center">
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
      </div>
    </AboutUsStyled>
  )
}
