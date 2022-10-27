import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { name } = useLoaderData();
  console.log(name);
  return (
    <div>
      <h2 className="display-5 text-center mt-5">{name}</h2>
    </div>
  );
};

export default Checkout;
