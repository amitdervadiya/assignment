import park from "../assets/park.png";
import house from "../assets/house.png";
import locate from "../assets/locate.png";

import Nav from "../components/Nav";

export default function Buy() {
  return (
    <>
      <Nav />
      <section className="w-full buy rounded-3xl h-[550px] md:h-[650px] flex flex-col justify-end items-center   px-4 md:px-8 py-4">
        <div className="w-max">
              <div className="flex flex-col items-start w-max  text-start  text-white  ">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2"> Find Your Dream Home in One Click! </h1>
                <p className="text-sm md:text-lg opacity-90"> Discover, Buy, or Rent Verified Properties with Ease. </p>
              </div>
              <div className="flex flex-col gap-2 w-full max-w-5xl mx-auto relative z-20 ">
              
                <div className="flex flex-col md:flex-row items-center justify-evenly gap-3 max-md:bg-none max-sm:bg-none filterbar  rounded-full shadow-lg px-4 py-3 w-full relative mb-[-42px] ">
                  <div className="flex justify-evenly px-4 items-center  rounded-full w-[203px] border  bg-white  border-[#979797] z-10">
                    <img src={park} alt="" /> <select className="border px-2 py-2 text-gray-700 focus:outline-none border-none justify-center items-center">
                      <option>For rent</option>
                      <option>For sale</option>
                    </select>
                  </div>
                  <div className="flex justify-evenly px-4 items-center bg-white rounded-full w-[203px] border border-[#979797]">
                    <img src={house} alt="" /> <select className="border px-2 py-2 text-gray-700 focus:outline-none border-none justify-center items-center">
                      <option>House</option>
                      <option>villa</option>
                    </select>
                  </div>
                  <div className="flex justify-evenly px-4 items-center bg-white rounded-full w-[203px] border border-[#979797]">
                    <img src={locate} alt="" /> <select className="border px-2 py-2 text-gray-700 focus:outline-none border-none justify-center items-center">
                      <option>Indonesia</option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-medium"> Find Property </button>
                </div>
              </div>
              </div>
            </section>
    </>
  );
}
