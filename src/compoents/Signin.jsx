import React from "react";
import download from "../assets/download.png";


const Signin = () => {
  return (
    <>
      <div className="max-w-screen-lg px-9 mx-auto flex justify-between items-center h-screen ">
        <div class="flex flex-col justify-between sm:flex-row  items-center md:pb-3 h-[250px] bg-slate-50 rounded md:rounded-[10px] lg:rounded-[15px] hover:rounded-[30px] grow p-6">
          <div class="w-auto md:w-1/2 px-3 left_content self-start ">
            <div className="px-3 ">
                <img className="w-12 h-12" src={download}/>
                <h5 className="pt-2.5 text-[32px]font-medium">Sign in</h5>
                <p className="pt-4 font-semibold ">Use your Google Account</p>
            </div>
          </div>
          <div class=" w-auto md:w-1/2 px-3 font-serif">
            <div className="px-3 "></div>
            <label class="block">
  <input type="email" name="email" class=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email or phone" />
</label>
<p className="pt-4 text-xs pl-1 text-blue-800 font-normal">Forget email?</p>
<p className="text-xs pt-4 ">Not your computer? Use Guest mode to sign in privately. <a className="text-blue-500" href="#">Learn more</a></p>
<div >
<button className="rounded-full py-2 mt-[2rem] bg-sky-600 w-32 text-center text-white float-right  space-x-2 ">Save Changes</button>
<button className="rounded-full py-2 mt-[2rem] bg-sky-600 w-32 text-center text-white float-right mr-1">Save Changes</button>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
