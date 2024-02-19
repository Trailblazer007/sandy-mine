import React from "react";

const page = () => {
  return (
    <div className="bg-blue-100">
      <div className="p-4 text-right">
        <p>Forgot Password</p>
      </div>

      <div className=" h-screen w-auto flex justify-center items-center">
        <div>
          <div className="bg-white p-6 border-2 border-transparent rounded-lg shadow-lg">
            <p className="text-center py-4">Forgot Password</p>
            <form action="">
              <div className="flex py-2">
                <p>Email:</p>
                <input type="text" placeholder="enter your email" />
              </div>

              <div className="">
                <button className="mt-2 p-2 bg-green-400 rounded-lg text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
