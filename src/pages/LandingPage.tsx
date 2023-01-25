import bannerImg from "../assets/banner.png";

export const LandingPage = () => {
  return (
    <div className="container mx-auto  p-4">
      <div className="container flex justify-between  flex-col md:flex-row">
        <div className="flex-1 h-90">
          <img width="100%" height={"100%"} src={bannerImg} alt="banner" />
        </div>
        <div className="flex-1 flex items-center justify-end h-100 w-100">
          <div className="md:text-end texts h-80">
            <h1
              className="text-xl large"
              style={{ width: "400px", fontWeight: "bold" }}
            >
              Imagine if <span className="snap">Snapchat</span>
              <br /> had events.
            </h1>
            <p className="my-5" style={{ width: "400px" }}>
              Easily host and share events with your friends across any social
              media.
            </p>
            <button>Create my event</button>
          </div>
        </div>
      </div>
    </div>
  );
};
