export default function Aboutt() {
  return (
    <div className="flex justify-center items-center min-h-screen ml-6 mr-6">
      <div className=" text-black rounded-2xl bg-white h-150 w-170">
        <h4 className="items-center flex justify-center p-10">
          ABOUT CONFERENCE
        </h4>
        <h2 className="items-center flex justify-center pb-2">
          WHAT THE STORY ABOUT SCRIPT?
        </h2>
        <p className="flex justify-center items-center font-bold text-center">
          In the early 2010s, we witnessed a major development in the presence
          on social media, which changed the traditional media scene and
          established a new environment for communication. We, the Syrians, have
          an old story with content creation.
        </p>
        <div className="items-center flex justify-center ">
          <button className="bg-pink-700 text-white hover:bg-gray-600 p-30 rounded-2xl p-1">
            Learn More
          </button>
        </div>
        <img src="../public/img/brand.png" className="" />
        <div className="w-170 h-150 rounded-2xl justify-center bg-pink-600"></div>
      </div>
    </div>
  );
}
