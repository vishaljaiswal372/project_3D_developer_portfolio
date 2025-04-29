import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-white text-[100px] font-bold text-center cursor-pointer'>Tech Stack</h1>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="text-center">{technology.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
