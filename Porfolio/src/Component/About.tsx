import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="px-6 py-6">
      <h2 className="text-3xl font-bold py-2 averia-serif-libre-bold font-serif  ">
        About Me
      </h2>
      <hr className="w-[8%] border-[1.4px]    border-green-500  " />

      <p className="py-6 poppins-regular text-[#646464]  text-[1rem] ">
        Hello, I'm a passionate data scientist with a keen interest in building
        machine learning algorithms, tracking and deploying models, data
        analysis, statistical analysis, relational and non-relational databases,
        and data visualization.
      </p>

      <div className="flex justify-between ">
        <div className="space-y-4 ">
          <div className="flex space-x-2 items-start">
            <h6 className="text-xl text-green-500 averia-serif-libre-bold">
              Name:
            </h6>{" "}
            <p className="poppins-regular text-[#646464]  text-[1rem]">
              Aare Adegboyega
            </p>
          </div>
          <div className="flex space-x-2  items-center">
            <h6 className="text-xl text-green-500 averia-serif-libre-bold">
              Phone:
            </h6>{" "}
            <p className="poppins-regular text-[#646464]  text-[1rem]">
              +234 9136 8712 92
            </p>
          </div>

          <div className="flex space-x-2  items-center">
            <h6 className="text-xl text-green-500 averia-serif-libre-bold">
              Address:
            </h6>{" "}
            <p className="poppins-regular text-[#646464]  text-[1rem]">
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className="space-y-4 ">
          <div className="flex items-start space-x-2  ">
            <h6 className="text-xl text-green-500 averia-serif-libre-bold">
              Experience
            </h6>{" "}
            <p className="poppins-regular text-[#646464]  text-[1rem]">
              3+ Years
            </p>
          </div>
          <div className="flex space-x-2  items-center">
            <h6 className="text-xl text-green-500 averia-serif-libre-bold">
              Email:
            </h6>{" "}
            <p className="poppins-regular text-[#646464]  text-[1rem]">
              adegboyegaaare@gmail.com
            </p>
          </div>

          <div className="flex space-x-2 items-center">
            <h6 className="text-xl text-green-500 averia-serif-libre-bold">
              Remote:
            </h6>{" "}
            <p className="poppins-regular text-[#646464]  text-[1rem]">
              Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
