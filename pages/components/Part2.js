import Image from 'next/image';

export default function Statistics() {
  return (
    <section className="text-gray-600 body-font my-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row text-center lg:text-left lg:items-center lg:justify-between w-full mb-20 lg:gap-16">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h1 className="text-justify sm:text-5xl text-3xl font-semibold title-font text-gray-900">
              Provide the best service with out of the box ideas
            </h1>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mr-4">
            <p className="text-justify leading-relaxed text-base">
              Holal is a platform designed to connect individuals seeking expert advice and consultation services with experienced professionals across various fields.
            </p>
          </div>
        </div>

        
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <a href="#" className="block mx-auto max-w-sm p-6 bg-black border border-gray-200 rounded-3xl shadow hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full">
              <h5 className="text-left mb-2 text-4xl sm:text-6xl font-bold tracking-tight text-white dark:text-white">920  
                <Image
                  src="/+.png"
                  alt="Description de l'image"
                  width={30}
                  height={30}
                />
              </h5>
              <p className="font-normal text-gray-400 dark:text-gray-400 mb-4">Project finish with superbly</p>
              <div className="flex justify-center space-x-4">
                <Image
                  src="/Ellipse 1.png"
                  alt="Description de l'image"
                  width={60}
                  height={60}
                />
                <Image
                  src="/Ellipse 1.png"
                  alt="Description de l'image"
                  width={60}
                  height={60}
                />
                <Image
                  src="/Ellipse 1.png"
                  alt="Description de l'image"
                  width={60}
                  height={60}
                />
                <Image
                  src="/Ellipse 1.png"
                  alt="Description de l'image"
                  width={60}
                  height={60}
                />
                <div className="w-50 h-50">
                  <Image
                    src="/+.png"
                    alt="Description de l'image"
                    width={50}
                    height={40}
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="p-4 md:w-3/4 sm:w-full w-full relative">
            <div className="h-full border-2 border-gray-200  bg-gray-300 rounded-3xl relative rounded-br-6xl">
              <h2 className="title-font font-medium text-5xl text-white mt-16 mb-16 text-center sm:text-center">HOW WE WORK</h2>
              <div className="absolute bottom-0 right-0 mx-auto ">
                <a href='#'><Image
                 
                  src="/Group 427320837.png"
                  alt="Description de l'image"
                  width={65}
                  height={65}
                /></a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
