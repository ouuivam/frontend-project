import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';

export default function Blan() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 rounded-3xl">
      <div className="lg:w-1/2 lg:mx-10 my-10 lg:my-14">
        <p className="font-jakarta-semibold text-black text-5xl font-semibold mb-10">Holal FAQs</p>
        <p className="font-jakarta-semibold text-gray-400 text-base lg:text-xl mb-10">Holal is a platform designed to connect individuals seeking expert advice and consultation services with experienced professionals across various fields.</p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 items-center justify-center lg:justify-start">
          <button type="button" className="text-gray-900 bg-white border border-gray-900 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold rounded-full text-base lg:text-lg px-10 lg:px-20 py-3 lg:py-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">More Questions</button>
          <a href="#" className="font-semibold text-base lg:text-lg leading-tight underline text-black hover:text-gray-600 lg:mt-0">
            Contacts Us
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 lg:mx-10 my-14">
        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
          <AccordionItem
            index={1}
            activeAccordion={activeAccordion}
            toggleAccordion={toggleAccordion}
            question="How can I become an expert on Holal?"
            answer="If you're an experienced professional with valuable expertise to share, you can apply to become an expert on Holal. Simply visit our website and complete the expert application process. Our team will review your qualifications, and if approved, you'll be able to create your profile and start offering consultation services to our users."
          />
          <AccordionItem
            index={2}
            activeAccordion={activeAccordion}
            toggleAccordion={toggleAccordion}
            question="How does Holal work?"
            answer="Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file."
          />
          <AccordionItem
            index={3}
            activeAccordion={activeAccordion}
            toggleAccordion={toggleAccordion}
            question="What types of experts are available on Holal?"
            answer="The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages."
          />
          <AccordionItem
            index={4}
            activeAccordion={activeAccordion}
            toggleAccordion={toggleAccordion}
            question="How can I find the right expert for my needs?"
            answer="The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages."
          />
        </div>
      </div>
    </div>
  );
}

const AccordionItem = ({ index, activeAccordion, toggleAccordion, question, answer }) => {
  return (
    <div key={index} id={`accordion-flush-heading-${index}`}>
      <button
        type="button"
        className={`flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black border-b border-gray-900 dark:border-gray-700 ${activeAccordion === index ? 'active' : ''}`}
        onClick={() => toggleAccordion(index)}
        aria-expanded={activeAccordion === index}
        aria-controls={`accordion-flush-body-${index}`}
      >
        <span className="text-2xl text-left font-semibold">{question}</span>
        {activeAccordion === index ? (
          <MinusIcon className="w-6 h-6 text-gray-500" />
        ) : (
          <PlusIcon className="w-6 h-6 text-gray-500" />
        )}
      </button>
      <div id={`accordion-flush-body-${index}`} className={activeAccordion === index ? '' : 'hidden'} aria-labelledby={`accordion-flush-heading-${index}`}>
        <div className="py-5 border-b border-gray-900 dark:border-gray-700">
          <p className="mb-2 text-gray-400 text-base lg:text-lg font-medium">{answer}</p>
        </div>
      </div>
    </div>
  );
};
