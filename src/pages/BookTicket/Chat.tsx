import NavBar from "../../components/NavBar";

const Chat = () => {
  return (
    <div>
      <NavBar
        buttonClass="bg-custom hover:bg-blue-700"
        imageSrc="/img/Logo.png"
      />
      <div>
        <div className="  min-h-screen flex items-center justify-center ">
          <img className="w-full relative" src="/brandticket.png" />

          <img
            className=" absolute bg-custom rounded-3xl p-5 "
            src="/img/whatsapp.svg"
          />
          <h3 className=" absolute bottom-4 text-2xl font-bold text-center">
            Chat with us on WhatsApp to confirm your booking <br />
            and make payment instantly!
          </h3>
        </div>
        <div className="flex items-center justify-center ">
          <button className="absolute text-white font-bold px-20 text-2xl py-4 bottom-20 bg-custom rounded-xl">
            <a href="https://www.whatsapp.com">Open Whatsapp</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chat;
