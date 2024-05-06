import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from 'next/link';

export default function Plan() {
  return (
    <div className="container mx-auto px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-10 lg:mt-20">
        <div className="w-full lg:w-2/3">
          <p className="mt-10 font-jakarta-semibold font-semibold text-3xl lg:text-5xl">Get The latest News about how we help our clients</p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <button type="button" className="text-gray-900 mt-10 bg-white border border-gray-900 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold rounded-full text-base px-10 py-4 lg:py-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">See More</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 mb-30 mt-20">
        <NewsCard color="blue" title="How a Digital Marketing Agency Can Boost Your Business" text="We are the top digital marketing agency for branding corp. We offer a full range of engine ...." />
        <NewsCard color="red" title="The Latest Trends and Strategies with Businesses" text="Working with this digital marketing agency has been a true partnership. They have taken the time to understand our business and industry" />
        <NewsCard color="purple" title="Maximizing ROI with the Expertise of a Digital Marketing Agency" text="What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way," />
      </div>
    </div>
  );
}

const NewsCard = ({ color, title, text }) => {
  const truncateText = (text, maxLength) => {
    if (text.split(' ').length > maxLength) {
      return text.split(' ').slice(0, maxLength).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="w-full lg:w-1/3 flex justify-center">
      <div className={`max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-10`}>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center gap-24">
            <div className={`w-4 h-4 rounded-full bg-${color}-600`}></div>
            <p className="text-gray-400 dark:text-gray-300 font-jakarta-semibold">5 min read</p>
          </div>
          <h5 className="text-xl lg:text-3xl font-jakarta-semibold font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="font-jakarta-semibold text-gray-400 dark:text-gray-400">{truncateText(text, 10)}</p>
          <div className="flex items-center gap-42">
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
              <button type="button" className="text-gray-900 bg-white border border-gray-900 focus:outline-none hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-6 py-3 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <ArrowRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


