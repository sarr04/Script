const colors = {
  orange: "from-orange-400 to-pink-500",
  purple: "from-blue-300 to-purple-500",
};

type FooterProps = {
  color: keyof typeof colors;
};

export default function Footer(props: FooterProps) {
  return (
    <footer>
      <div
        className={`container relative flex flex-col lg:pt-32 lg:pb-32 items-center gap-4 bg-gradient-to-r ${
          colors[props.color]
        } rounded-[2rem] py-8 px-4 lg:flex-row lg:justify-between lg:gap-4 lg:py-16 lg:px-12`}
      >
        <div className="text-center lg:pl-44 lg:text-left">
          <img
            src="/img/Vector.svg"
            className="w-[60%] lg:w-full mx-auto lg:mx-0"
          />
          <p className="text-white text-sm lg:text-base lg:pt-2">
            Syrian Content Creators Conference
          </p>
        </div>

        <div className="text-center lg:pr-44">
          <h3 className="text-white font-bold text-lg lg:text-5xl">
            Follow Us
          </h3>
          <div className="flex space-x-3 pt-3 justify-center">
            <a href="https://www.instagram.com/">
              <img className="w-6 lg:w-8" src="/img/insta.svg" />
            </a>
            <a href="">
              <img className="w-6 lg:w-8" src="/img/fb.svg" />
            </a>
            <a href="">
              <img className="w-6 lg:w-8" src="/img/link.svg" />
            </a>
          </div>
        </div>

        <img
          src="/img/ll.png"
          className="absolute bottom-0 w-full max-w-[650px] lg:bottom-0 -z-10 opacity-20"
        />
      </div>
    </footer>
  );
}
