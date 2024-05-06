import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from 'next/image';

export default function Parttwo() {
  return (
    <div className="bg-black rounded-3xl mt-16 w-full px-4 py-8 sm:py-12 md:py-16 lg:w-1440 lg:px-0" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-plus-jakarta text-white text-6xl sm:text-5xl font-semibold tracking-tight leading-snug text-center lg:text-left mb-10 ">
          Discover the experts who achieved the highest number of consultations in the past month.
        </h2>
        <div className="flex flex-col sm:flex-row gap-10 mb-10 flex justify-center items-center ">
          <a href="#" className="px-8 py-4 bg-green-500 rounded-full flex items-center justify-center gap-2 sm:gap-4 space-y-10" style={{ backgroundColor: '#99CF63' }}>
            <span className="font-manrope font-bold text-base sm:text-lg text-white">All services [80]</span>
          </a>
          <button className="px-8 py-4 border border-white rounded-full flex items-center justify-center gap-2 sm:gap-4" style={{ borderColor: '#FFFFFF' }}>
            <span className="font-manrope font-bold text-base sm:text-lg text-white">Web Design [20]</span>
          </button>
          <button className="px-8 py-4 border border-white rounded-full flex items-center justify-center gap-2 sm:gap-4" style={{ borderColor: '#FFFFFF' }}>
            <span className="font-manrope font-bold text-base sm:text-lg text-white">Digital Marketing [5]</span>
          </button>
          <button className="px-8 py-4 border border-white rounded-full flex items-center justify-center gap-2 sm:gap-4" style={{ borderColor: '#FFFFFF' }}>
            <span className="font-manrope font-bold text-base sm:text-lg text-white">Branding [5]</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 ml-4 sm:ml-0 mr-4 sm:mr-0 ">
        <div className="relative flex-grow w-full sm:w-1/3">
          <Image
            src="/hey.png"
            alt="Description de l'image"
            layout="responsive"
            width={600}
            height={600}
            className="object-cover w-full h-full rounded-3xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/Rectangle 23806.png"
              alt="Overlay image"
              width={180}
              height={180}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-black text-2xl w-48 h-13 left-0 top-44 sm:left-16 sm:top-224 font-semibold text-18 leading-126% tracking-tighter font-plus-jakarta-sans text-center">See More</p>
            </div>
          </div>
        </div>
        <div className="relative flex-grow w-full sm:w-1/3">
          <Image
            src="/carre.png"
            alt="Description de l'image"
            layout="responsive"
            width={600}
            height={600}
            className="object-cover w-full h-full rounded-3xl"
          />
          <div className="absolute top-10 left-8 flex flex-col items-start">
            <div className="flex items-center">
              <div className="w-10 border-t-2 border-white"></div>
              <p className="text-white text-lg ml-2 font-plus-jakarta-sans">Software Engineering</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-8 mb-4">
            <p className="text-white text-2xl text-bold font-plus-jakarta-sans">El Youssfi Mohammed</p>
          </div>
        </div>
        <div className="relative flex-grow w-full sm:w-1/3">
          <Image
            src="/carre.png"
            alt="Description de l'image"
            layout="responsive"
            width={600}
            height={600}
            className="object-cover w-full h-full rounded-3xl"
          />
          <div className="absolute top-10 left-8 flex flex-col items-start">
            <div className="flex items-center">
              <div className="w-10 border-t-2 border-white"></div>
              <p className="text-white text-lg ml-2 font-plus-jakarta-sans">Software Engineering</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-8 mb-4">
            <p className="text-white text-2xl text-bold font-plus-jakarta-sans">El Youssfi Mohammed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
