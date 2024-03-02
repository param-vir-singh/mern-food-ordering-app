import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* <span className="container mx-auto flex justify-between items-center"> */}
        <span>
          <Link to="/" className="text-3xl font-bold tracking-tight text-white">
            MernEats.com
          </Link>
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
