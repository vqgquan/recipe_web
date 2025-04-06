import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="grid grid-col-1 flex flex-col justify-center items-center min-h-screen">
      <div className="text-3xl text-center">
        <h1><b>404 Not Found</b></h1>
      </div>
      <div className="flex justify-center items-start">
        <Link to={`/home`}>
          <button className="btn btn-soft btn-info">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
