const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-start text-white font-bold box-content ml-8 text-2xl absolute top-8">
        <h2>Dark Weather</h2>
      </div>

      <div className="flex flex-row justify-center gap-8 p-3 w-1/3 text-white font-bold ml-96 absolute top-8">
        <div className="font-bold">
          <a href="#home">Home</a>
        </div>
        <div className="font-medium">
          <a href="#news">Download App</a>
        </div>
        <div className="font-medium">
          <a href="#contact">Contact Us</a>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <button
          type="button"
          className="text-white bg-slate-500 font-bold mr-16 relative top-8 box-content p-3 rounded-lg font-semibold w-20"
        >
          Sign up
        </button>
      </div>
      <div className="flex flex-row justify-center content-center mt-28 ml-72 font-bold text-white text-2xl h-28 w-3/6 box-content bg-red-500 ">
        <div>
          <p className=" content-center">
            Seeing the weather of the whole world!<br></br>
          </p>
          <p className=" content-center ml-16">
            with <b className="text-cyan-50">Dark Weather!</b>
          </p>
        </div>
      </div>
    </>
  );
};
export default Header;
