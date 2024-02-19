import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-blue-100">
      <div className=" h-screen w-auto flex justify-center items-center">
        <div>
          <div className="bg-white p-6 border-2 border-transparent rounded-lg shadow-lg">
            <p className="py-4">Reset Password</p>
            <form action="">
              <div className="flex py-2">
                <p>New Password:</p>
                <input type="text" placeholder="enter your new password" />
              </div>

              <div className="">
                <div className="flex">
                  <p>Confirm new password:</p>
                  <input type="text" placeholder="confirm your new password" />
                </div>

                <div className="flex">
                  <p>Reset Code</p>
                  <input
                    type="number"
                    placeholder="enter the code sent to your email"
                  />
                </div>

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
