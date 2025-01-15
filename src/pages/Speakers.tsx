import NavBar from "../components/NavBar";
import Footer from "../components/home/Footer";
import Speakerss from "../components/home/Speakerss";

const Speakers = () => {
  return (
    <div>
      <NavBar
        imageSrc="/img/Logoblue.svg"
        buttonClass="bg-custom2 hover:bg-blue-700"
      />
      <div className="container mx-auto text-black rounded-2xl bg-white h-150 w-170 relative z-20  ">
        <h4 className="lg:flex hidden  justify-center font-bold items-center lg:text-2xl text-center pt-10 bg-white">
          EVENT CONFERENCE SPEAKERS
        </h4>
        <h2 className="lg:flex hidden justify-center items-center font-bold lg:text-5xl  text-center mb-3">
          THE SPEAKERS
        </h2>
        <h4 className="lg:flex hidden  justify-center items-center text-center pb-5 text-xl">
          Meet the visionaries shaping the <br /> future of social media.
        </h4>
      </div>
      <div className="lg:mx-36 mx-11 ">
        <Speakerss
          speakerss={[
            {
              name: "Ronald Richards",
              work: "influencer",
              followers: "500k Followers",
              img: "/Elliaadffpse 1.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/g.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "public/img/f.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/h.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/b.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/c.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/a.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/d.png",
            },
            {
              name: "aaaa",
              work: "aa",
              followers: "200k folowers",
              img: "/aa.png",
            },
            {
              name: "bbbbbb",
              work: "influencer",
              followers: "10k followers",
              img: "/bb.png",
            },
            {
              name: "ccc",
              work: "content creator",
              followers: "20k followers",
              img: "/cc.png",
            },
            {
              name: "dddddd",
              work: "media",
              followers: "300k followers",
              img: "/dd.png",
            },
            {
              name: "eeeee",
              work: "blogger",
              followers: "20k followers",
              img: "/ee.png",
            },
            {
              name: "fff",
              work: "youtuber",
              followers: "30k followers",
              img: "/ff.png",
            },
            {
              name: "gggg",
              work: "tiktoker",
              followers: "20k followrs",
              img: "/jj.png",
            },
            {
              name: "hhh",
              work: "influncer",
              followers: "3k folloers",
              img: "/mm.png",
            },
            {
              name: "jjj",
              work: "content creator",
              followers: "5k followers",
              img: "/jj.png",
            },
          ]}
          color="blu"
          limit={100}
          buttonClass="btn-primary"
          showAll={true}
        />
      </div>
      <div className="container mx-auto relative z-10 my-10 lg:translate-y-40 ">
        <Footer color="purple" />
      </div>
      <img
        src="/img/ll.png"
        className="absolute left-0 w-full lg:w-full lg:-translate-y-96 -translate-y-28"
      />
    </div>
  );
};
export default Speakers;
