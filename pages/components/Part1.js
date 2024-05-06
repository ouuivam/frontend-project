import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, ArrowRightIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Our Experts", href: "#" },
  { name: "Services", href: "#" },
  { name: " Blog", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Part1() {
  return (
    <div className="relative  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full lg:pb-28 xl:pb-2">
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl lg:w-full">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#" className="flex items-center">
                      <img className="h-8 w-auto sm:h-10 mr-2" src="/logo.png" alt="Logo" />
                      <span className="font-bold text-xl font-manrope">Holal</span>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:ml-10 md:pr-20 md:space-x-0.5 flex-grow">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-black-500 hover:text-gray-900 w-1/2">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="hidden md:block space-x-4">
                  <a href="#" className="inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-bold uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900">
                    Get started
                  </a>
                  <a href="#" className="inline-block rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                    en
                  </a>
                </div>
              </nav>
            </div>
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src="/logo.png" alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1 ">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a href="#" className="block w-full px-5 py-3 text-center font-medium text-black bg-gray-50 hover:bg-gray-100 mb-4">
                    Get started
                  </a>
                  <a href="#" className="block w-full px-5 py-3 text-center font-medium text-black bg-gray-50 hover:bg-gray-100 mb-4">
                    en
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
        <main className="flex flex-col md:flex-row gap-8 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="w-full md:w-1/2 sm:text-center lg:text-left sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 sm:px-4 lg:px-4">
            <h1 className="text-4xl tracking-tight font-extrabold text-black-900 sm:text-5xl md:text-7xl ">
              <span className="block xl:inline font-jakarta-sans font-semibold">
                DO YOU NEED A CONSULTATION?<br></br> YOU ARE IN THE RIGHT PLACE {" "}
              </span>{" "}
            </h1>
            <p className="mt-3 mb-6 text-base font-medium text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto sm:pb-4 md:mt-5 md:text-xl lg:mx-0 font-jakarta-sans font-medium text-gray-400">
              Contact the expert that suits you
            </p>
            <div className="mt-3 mb-6 text-base font-jakarta-sans font-semibold text-black-900 text-sm leading-trim-160 text-edge-cap mt-4 flex items-center">
              <p style={{ width: '180px' }}>Trusted by the world's biggest brands</p>
              <img className="w-80 h-auto ml-14" src="/Frame 427321493.png" alt="" />
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-16">
              <div className="rounded-md">
                <a href="#" className="flex justify-center items-center px-8 py-4 gap-10 bg-black text-white rounded-full w-72 h-14">
                  Schedule Call <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-8 sm:mt-0 sm:ml-3 mt-8 sm:mt-0 ">
                <a href="#" className="text-primary font-semibold text-base underline w-32 h-12  ">
                  Become Expert
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex-col gap-40">
              <div className="flex flex-row gap-8 mb-10 mt-10">
                <div className="w-full md:w-1/2 relative ">
                  <img className="mt-10 w-full" src="/Rectangle 23805 (1).png" alt="" />
                  <img className="absolute top-16 right-2 transform -translate-x-2 -translate-y-16" src="Group 427320837 (1).png" alt="" width={200} height={50} style={{ position: "absolute" }} />
                </div>
                <div className="w-full md:w-1/2 mt-6">
                  <img src="/Group 427320838.png" alt="" width={300} height={250} />
                </div>
              </div>
              <div>
                <img className="h-auto" src="Group 427320836.png" alt="" width={900} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
