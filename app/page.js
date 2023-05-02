import Image from "next/image";
import Link from "next/link";
import errorImg from "../public/icon-error.svg";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-row box-border mx-40">
        <div className="w-1/2 my-auto pr-12 pl-44">
          <h1 className="font-bold text-white text-[50px] leading-[55px] tracking-[-0.52px] mb-3">
            Learn to code by watching others
          </h1>
          <p className="font-medium text-white leading-[26px]">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="w-1/2 flex flex-col gap-6">
          <div className="w-full">
            <Link
              className="bg-[#5E54A4] w-full h-[60px] flex items-center justify-center rounded-xl shadow-[0px_8px_0px_0px_#00000025] text-white text-[15px] leading-[26px]"
              href={"/"}
            >
              <p className="font-medium">Try it free 7 days</p>
              <span className="px-1"> then $20/mo. thereafter</span>
            </Link>
          </div>

          <form>
            <div className="bg-white rounded-xl shadow-[0px_8px_0px_0px_#00000025] px-10 py-10 flex flex-col gap-5">
              <div className="flex flex-row relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className="w-full border border-[#DEDEDE] rounded-md focus:outline-none focus:border-[#5E54A4] h-14 pl-8"
                  type="text"
                  placeholder="First Name"
                />
                <Image className="absolute top-1/3 right-5" src={errorImg} />
              </div>
              <div className="flex flex-row relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className="w-full border border-[#DEDEDE] rounded-md focus:outline-none focus:border-[#5E54A4] h-14 pl-8"
                  type="text"
                  placeholder="Last Name"
                />
                <Image className="absolute top-1/3 right-5" src={errorImg} />
              </div>
              <div className="flex flex-row relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className="w-full border border-[#DEDEDE] rounded-md focus:outline-none focus:border-[#5E54A4] h-14 pl-8"
                  type="email"
                  placeholder="Email Address"
                />
                <Image className="absolute top-1/3 right-5" src={errorImg} />
              </div>
              <div className="flex flex-row relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className="w-full border border-[#DEDEDE] rounded-md focus:outline-none focus:border-[#5E54A4] h-14 pl-8"
                  type="password"
                  placeholder="Password"
                />
                <Image className="absolute top-1/3 right-5" src={errorImg} />
              </div>

              <button className="w-full bg-[#38CC8B] hover:bg-[#77E2B3] h-14 rounded-md text-center uppercase font-semibold text-[15px] leading-[26px] tracking-[1px] text-white">
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
