import React from "react";
const CardSkelton = () => {
  return (
    <>
      <div className="bg-gray-100 w-full p-8 flex flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/5 p-2">
          <a
            href="/detail/72112620-skoda-octavia-combi-iii-combi-style-green-tec"
            className="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300"
          >
            <div
              className="relative group text-primary-500"
              style={{ paddingTop: "70%" }}
            >
              <div className="absolute top-0 left-0 h-full w-full">
                <span className="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"></span>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="pl-4 pr-4 pt-4 mb-4 text-left relative flex-grow">
                <h3 className="text-lg font-bold text-gray-darkest mr-10">
                  <span className="skeleton-box h-5 w-1/6 inline-block"></span>
                  <span className="skeleton-box h-5 w-1/2 inline-block"></span>
                  <span className="skeleton-box h-5 w-2/4 inline-block"></span>
                  <span className="skeleton-box h-5 w-1/5 inline-block"></span>
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardSkelton;
