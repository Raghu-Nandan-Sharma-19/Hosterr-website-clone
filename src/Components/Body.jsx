import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex ">
      <div className="flex items-center sm:p-4 justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img src="./assets/Blue Shape.svg" alt="1st" className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px]"/>
        <img src="./assets/Pink Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"/>
        <img src="./assets/Purple Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]" />
        <img src="./assets/Hero Image (Model).png" alt="4th" className="absolute h-64  md:h-72 lg:h-[400px]" />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-4xl font-bold font-playfair leading-tight lg:text-5xl">Host your website in less than 5 minutes.</h1>
        <p className="font-lato text-gray-400 lg:mt-3 lg:text-2xl">With Hosterr, get your website up and running in no less than 5 minutes with 
            the most competitive pricing packages available online.</p>
        <form action="" className="flex flex-col gap-4 md:flex-row lg:mt-5">
            <input type="email" placeholder="Enter email adress" className="rounded-md px-4 py-3 palceholder:text-gray-400 " />
            <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white ">Join waitlist</button>
        </form>
        <div className="flex gap-2 space-y-1 lg:mt-4">
            <img src="./assets/Checkmark.svg" alt="check" className="mt-1 lg:mt-0" />
            <p className="font-lato text-gray-400">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
