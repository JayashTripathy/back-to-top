import React, { useEffect } from 'react'

function BackTop() {

  useEffect(() => {
    {/* -----------------------scroll logic----------------------- */}

    function scrolled() {
      let viewPortHeight = document.documentElement.clientHeight;
      let scrolledCurrent = viewPortHeight + document.documentElement.scrollTop;
      let totalHeight = document.documentElement.scrollHeight;
      const value = Math.floor((scrolledCurrent / totalHeight) * 100);
      
      let scrollbarWidth = document.getElementById("scrollbarWidth");
      let backToTop = document.getElementById("backToTop");
      
      
    if (value > 30) {
        scrollbarWidth.style.width = `${value}%`;
        scrollbarWidth.style.opacity = `0.7`;
        backToTop.style.bottom = `40px`;
      }else {
        
        scrollbarWidth.style.opacity = `0`;
        backToTop.style.bottom = `-100px`;
      }
    }
 

    document.addEventListener("scroll", scrolled);

    {/* -----------------------cleanup function----------------------- */}

    return () => {
      document.removeEventListener("scroll", scrolled);
    };
  }, []);

  return (
    <>

      {/* -----------------------progress bar----------------------- */}
      
      <div
        id="scrollbarWidth"
        className={`h-2  bg-white  transition-all duration-300 flex items-center fixed top-0 left-0  ease-in-out`}
      >
        <div className="absolute bg-white h-4 aspect-square right-0 rounded-full"></div>
      </div>


      {/* -----------------------back to top button----------------------- */}
      <button
      id='backToTop'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="aspect-square h-20 bg-gray-700  hover:opacity-100 fixed right-10  
                  rounded-full cursor-pointer  group  shadow-xl
                  transition-all duration-300 ease-in-out z-10 border-2 bottom-[-100px]"
      >
        <div className="aspect-square h-0  group-hover:h-full transition-all duration-200 
                       ease-in-out bg-white rounded-full absolute right-1/2 bottom-1/2 group-hover:right-0 
                      group-hover:bottom-0 cursor-pointer "></div>
      </button>

    </>


  )
}

export default BackTop