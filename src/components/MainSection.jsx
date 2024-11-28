import smallStar from "../assets/img/hero-small-star.png";
import bigStar from "../assets/img/hero-big-star.png";

const MainSection = () => {
  return (
    <div className="mt-5">
      <section>
        <div className="bg-hero pt-10">
          <div className="pl-4 pr-4">
            <h1 className="text-3xl font-bold font-anton leading-8 tracking-wide mb-5">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="bg-hero font-dmSans">
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
          <img src={bigStar} alt="" className="absolute top-10 right-5" />
        </div>
      </section>
    </div>
  );
};

export default MainSection;
