import Image from "next/image";
import Link from "next/link";
import errorImg from "../public/icon-error.svg";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex lg:flex-row flex-col box-border lg:gap-0 gap-16">
        <div className="lg:w-1/2 my-auto lg:pr-12 lg:pl-44 px-6 mx-auto lg:text-left text-center">
          <h1 className="font-bold text-white lg:text-[50px] text-[28px] lg:leading-[55px] leading-9 lg:tracking-[-0.52px] tracking-[-0.29px] mb-3">
            Learn to code by watching others
          </h1>
          <p className="font-medium text-white leading-[26px]">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6 lg:pr-44 mx-auto px-6">
          <div className="w-full">
            <button className="bg-[#5E54A4] w-full  rounded-xl shadow-[0px_8px_0px_0px_#00000025] text-white text-[15px] leading-[26px] font-medium text-center lg:px-0 px-[67px] py-[18px]">
              Try it free 7 days{" "}
              <span className="pl-1 font-normal">then $20/mo. thereafter</span>
            </button>
          </div>

          <form>
            <div className="bg-white rounded-xl shadow-[0px_8px_0px_0px_#00000025] px-10 py-10 flex flex-col gap-5">
              <div className="flex flex-col relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className="w-full border border-[#DEDEDE] rounded-md focus:outline-none focus:border-[#5E54A4] h-14 lg:pl-8 pl-5"
                  type="text"
                  placeholder="First Name"
                />
                <Image className="absolute top-1/4 right-5" src={errorImg} />
                <p className="text-[#FF7979] font-medium italic text-[11px] leading-4 text-right">
                  First Name cannot be empty
                </p>
              </div>
              <div className="flex flex-col relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className="w-full border border-[#DEDEDE] rounded-md focus:outline-none focus:border-[#5E54A4] h-14 lg:pl-8 pl-5"
                  type="text"
                  placeholder="Last Name"
                />
                <Image className="absolute top-1/4 right-5" src={errorImg} />
                <p className="text-[#FF7979] font-medium italic text-[11px] leading-4 text-right">
                  Last Name cannot be empty
                </p>
              </div>
              <div className="flex flex-col relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className="w-full border border-[#DEDEDE] rounded-md focus:outline-none focus:border-[#5E54A4] h-14 lg:pl-8 pl-5"
                  type="email"
                  placeholder="Email Address"
                />
                <Image className="absolute top-1/4 right-5" src={errorImg} />
                <p className="text-[#FF7979] font-medium italic text-[11px] leading-4 text-right">
                  Looks like this is not an email
                </p>
              </div>
              <div className="flex flex-col relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className="w-full border border-[#DEDEDE] rounded-md focus:outline-none focus:border-[#5E54A4] h-14 lg:pl-8 pl-5"
                  type="password"
                  placeholder="Password"
                />
                <Image className="absolute top-1/4 right-5" src={errorImg} />
                <p className="text-[#FF7979] font-medium italic text-[11px] leading-4 text-right">
                  Password cannot be empty
                </p>
              </div>

              <button className="w-full bg-[#38CC8B] hover:bg-[#77E2B3] h-14 rounded-md text-center uppercase font-semibold text-[15px] leading-[26px] tracking-[1px] text-white shadow-[0px_8px_0px_0px_#00000025]">
                Claim your free trial
              </button>
              <p className="text-center font-bold text-[11px] text-[#BAB7D4]">
                By clicking the button, you are agreeing to our{" "}
                <Link className="font-medium text-[#FF7979]" href="#">
                  Terms and Services
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
