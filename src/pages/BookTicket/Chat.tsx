import NavBar from "../../components/NavBar";

const Chat = () => {
  return (
    <div>
      <NavBar
        buttonClass="bg-custom hover:bg-blue-700"
        imageSrc="/img/Logo.png"
      />
      <div className="">
        <div className="   flex  justify-center ">
          <img
            className="  lg:hidden h-full w-full  absolute  "
            src="/printinput.png"
          />
          <img
            className=" hidden lg:flex  justify-center absolute"
            src="/brandticket.png"
          />

          <img
            className="relative  bg-custom rounded-3xl p-5 mt-28 "
            src="/img/whatsapp.svg"
          />

          <h3 className="  absolute top-96 text-2xl font-bold text-center lg:mt-11">
            Chat with us on WhatsApp to confirm your booking <br />
            and make payment instantly!
          </h3>

          <div className="flex justify-center ">
            <button className=" text-white font-bold px-20 left-4 lg:left-[530px] text-2xl py-4 bottom-28 bg-custom rounded-xl absolute">
              <a href="https://www.whatsapp.com">Open Whatsapp</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
