import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import { useForm, SubmitHandler } from "react-hook-form";
import ScriptBtn from "../../components/ScriptBtn";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  jobTitle: string;
  fieldOfStudy: string;
  instagramHandle: string;
  linkedInHandle: string;
  Photo: File;
};

interface InputProps {
  buttonClass: string;
}

const Input = ({ buttonClass }: InputProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    navigate("/Chat");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <img
        src="/brandinput.svg"
        className="absolute w-full h-full object-cover block "
      />
      <NavBar
        buttonClass="bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-blue-700"
        imageSrc="../img/Logo.png"
      />

      <div className="mx-6 relative flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-4 container"
        >
          <div className="flex  mb-4">
            <label htmlFor="photoInput" className="cursor-pointer mx-3">
              <div className="relative w-24 h-24 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                {image ? (
                  <img src={image} className="w-full h-full object-cover" />
                ) : (
                  <BsFillPersonFill className="text-gray-600 text-6xl" />
                )}
              </div>
            </label>
            <input
              id="photoInput"
              type="file"
              {...register("Photo", { required: false })}
              className="hidden"
              onChange={handleImageChange}
            />

            <div>
              <input
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full p-2 border rounded"
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}

              <input
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full p-2 mt-2 border rounded"
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <input
            placeholder="E-mail"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <div className="flex">
            <select className="w-1/4 p-2 border rounded-l">
              <option value="+963">+963</option>
              <option value="+123">+123</option>
              <option value="+456">+456</option>
            </select>
            <input
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                minLength: { value: 9, message: "Please enter a valid number" },
                maxLength: {
                  value: 10,
                  message: "Please enter a valid number",
                },
              })}
              className="w-3/4 p-2 border rounded-r"
            />
          </div>
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
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

          <ScriptBtn
            type="submit"
            className={`text-white bg-gradient-to-r from-orange-400 to-pink-500 mt-9 bg-transparent backdrop-blur-[150px] rounded-3xl text-center ${buttonClass}`}
          >
            Next
          </ScriptBtn>
        </form>
      </div>
    </div>
  );
};

export default Input;
