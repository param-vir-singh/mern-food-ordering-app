import { Outlet } from "react-router-dom";
import landingImage from "../assets/landing.png";
import downloadApps from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a finger touch away</span>
      </div>

      <div className="grid md:grid-cols-2 grid gap-5">
        <img src={landingImage} />

        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order Takeaway faster!
          </span>
          <img src={downloadApps} />
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
