import smallStar from "../assets/img/hero-small-star.png";
import bigStar from "../assets/img/hero-big-star.png";
import versaciLogo from "../assets/img/mobile/versace.png";
import zaraLogo from "../assets/img/mobile/zara.png";
import gucciLogo from "../assets/img/mobile/gucci.png";
import pradaLogo from "../assets/img/mobile/prada.png";
import calvinLogo from "../assets/img/mobile/calvin.png";

const MainSection = () => {
  return (
    <div className="mt-5">
      <section>
        <div className="bg-hero pt-10">
          <div className="pl-4 pr-4">
            <h1 className="text-3xl font-bold font-anton leading-8 tracking-wide mb-5">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="bg-hero font-dmSans text-slate-500">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style
            </p>
            <button className="bg-black text-white w-full rounded-3xl text-center py-4 px-13 mt-6 font-dmSans">
              Shop Now
            </button>
            <div className="mt-5 flex justify-evenly font-dmSans">
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-bold">200+</h3>
                <p className="text-xs text-slate-500">International Brands</p>
              </div>
              <div className="w-px h-14 bg-slate-500"></div>
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-bold">2,000+</h3>
                <p className="text-xs text-slate-500">High-Quality Products</p>
              </div>
            </div>
          </div>
          <div className="text-center font-dmSans mt-3">
            <h3 className="text-2xl font-bold mb-0.5">30,000+</h3>
            <p className="text-xs text-slate-500">Happy Customers</p>
          </div>
        </div>
        <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('../src/assets/img/main-section-mobile.png')] md:bg-[url('../src/assets/img/main-section.png')]">
          <img src={smallStar} alt="" className="absolute top-36 left-7" />
          <img src={bigStar} alt="" className="absolute top-7 right-2" />
        </div>
        <div className="bg-black items-center">
          <div className="flex justify-between w-full p-4">
            <div className="">
              <img
                src={versaciLogo}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
            <div >
              <img
                src={zaraLogo}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
            <div >
              <img
                src={gucciLogo}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="flex justify-evenly p-4">
            <div >
              <img
                src={pradaLogo}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <img
                src={calvinLogo}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
