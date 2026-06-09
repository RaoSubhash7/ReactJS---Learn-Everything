import React from "react";


const Card = (props) => {
  const { user, img } = props;

  return (
    <div className="w-[350px] bg-zinc-900 border-2 border-zinc-500 rounded-3xl p-8 flex flex-col items-center text-center m-px-4 m-py-8 mt-8 m-2">
      
      <img
        src={img}
        alt="profile"
        className="w-44 h-44 rounded-full object-cover mb-6"
      />

      <h2 className=" !text-white text-4xl font-bold mb-4 text-color-white">
       {user.name} - {user.age}
      </h2>
      <p className="text-gray-300 text-lg mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
        View Profile
      </button>

    </div>
  );
}
export default Card;