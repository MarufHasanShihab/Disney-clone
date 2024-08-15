import { useEffect, useRef, useState } from "react";
import GlobalApi from "../../../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef()
  useEffect(() => {
    getTrandingMovie();
  }, []);

  const getTrandingMovie = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };
  const sliderRight = (element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft = (element)=>{
    element.scrollLeft-=screenWidth-110
  }
  return (
    <div>
      <HiChevronLeft className="text-white text-[35px] absolute mx-5 mt-[150px] cursor-pointer hidden md:block" onClick={()=> sliderLeft(elementRef.current)} />
      <HiChevronRight className="text-white text-[35px] absolute mx-5 mt-[150px] right-0 cursor-pointer hidden md:block" onClick={()=> sliderRight(elementRef.current)} />
      <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
        {movieList.map((movie) => (
          <img
            key={movie.id}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-150 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
