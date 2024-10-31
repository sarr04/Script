import { useState } from "react";
import NavBar from "../../components/NavBar";
import { useForm, SubmitHandler } from "react-hook-form";
import ScriptBtn from "../../components/ScriptBtn";
import { Link } from "react-router-dom";
import Chat from "./Chat";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  jobTitle: string;
  fieldOfStudy: string;
  instagramHandle: string;
  linkedInHandle: string;
};

const Input = (buttonClass) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <NavBar
        buttonClass="bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-blue-700"
        imageSrc=" ../img/Logo.png"
      />

      <div className=" flex  items-center">
        <div className=" w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-6">
          <span className="text-4xl text-gray-500"></span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-4"
        >
          <input
            placeholder="First Name"
            {...register("firstName", { required: true })}
            className="w-full p-2 border rounded"
          />

          {errors.firstName && (
            <span className="text-red-500">First name is required</span>
          )}

          <input
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.lastName && (
            <span className="text-red-500">Last name is required</span>
          )}

          <input
            placeholder="E-mail"
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}

          <div className="flex">
            <select className="w-1/4 p-2 border rounded-l">
              <option value="+963">+963</option>
              <option value="+123">+123</option>
              <option value="456">+456</option>
            </select>
            <input
              placeholder="Phone Number"
              {...register("phoneNumber", { required: true })}
              className="w-3/4 p-2 border rounded-r"
            />
          </div>
          {errors.phoneNumber && (
            <span className="text-red-500">Phone number is required</span>
          )}

          <input
            placeholder="Job Title"
            {...register("jobTitle")}
            className="w-full p-2 border rounded"
          />

          <input
            placeholder="Field of Study"
            {...register("fieldOfStudy")}
            className="w-full p-2 border rounded"
          />

          <input
            placeholder="Instagram Handle"
            {...register("instagramHandle")}
            className="w-full p-2 border rounded"
          />

          <input
            placeholder="LinkedIn Handle"
            {...register("linkedInHandle")}
            className="w-full p-2 border rounded"
          />
          <Link to="/Chat">
            <ScriptBtn
              className={`text-white  bg-gradient-to-r from-orange-400 to-pink-500 mt-9 bg-transparent backdrop-blur-[150px] rounded-3xl text-center ${buttonClass}`}
            >
              Next
            </ScriptBtn>
          </Link>
        </form>
        {/* <img src="/img/brand.png" className="w-[400pxpx] " /> */}
      </div>
    </div>
  );
};

export default Input;
