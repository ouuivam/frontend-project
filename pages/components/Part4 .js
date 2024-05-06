import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-8 md:py-12 lg:py-16 mx-auto">
        <p className="leading-loose text-justify font-plus-jakarta sm:text-4xl text-2xl font-semibold title-font mb-10 md:mb-20 text-gray-900">
          “They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”
        </p>
        <div className="flex flex-col md:flex-row  relative">
          <div className="flex items-center mb-6 md:mb-0">
            <Image
              src="/Ellipse 1.png"
              alt="Description de l'image"
              width={70}
              height={70}
            />
            <div className="ml-4">
              <h2 className="text-gray-900 tracking-wider text-sm mb-1 md:mb-2 font-plus-jakarta font-bold">
                Michael Kaizer
              </h2>
              <p className="text-gray-400 text-xs md:text-sm">CEO of Basecamp Corp</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 flex items-center justify-center gap-2 md:gap-4 mt-4 sm:mt-0 ">
            <button className="flex items-center justify-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 border border-black rounded-full transform -rotate-y-180">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex items-center">
              <a href="#" className="font-semibold text-base md:text-lg leading-6 text-black underline hover:text-gray-700">01</a>
              <span className="text-gray-500">/05</span>
            </div>
            <button className="flex items-center justify-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-black border border-black rounded-full">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
