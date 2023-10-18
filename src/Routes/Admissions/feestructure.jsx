import React, { useState } from "react";
import Table from "./table";

const Accordion = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <div>
        {/* First Accordion */}
        <div id="accordion-collapse" data-accordion="open">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className={`flex bg-orange-200 text-black mx-auto my-auto mt-24 items-center justify-between w-3/5 p-5 font-medium text-left  border  border-black border-b-0 rounded-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-[#DCDFB1] hover:text-[#15803D] dark:hover:bg-gray-800 ${activeElement === "accordion-collapse-body-1" ? 'active' : ''
                }`}
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={activeElement === "accordion-collapse-body-1"}
              aria-controls="accordion-collapse-body-1"
              onClick={() => handleClick("accordion-collapse-body-1")}
            >
              <span>Madarsa</span>
              <svg
                data-accordion-icon
                className="w-3 h-2 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>

          <div
            id="accordion-collapse-body-1"
            className={`${activeElement === "accordion-collapse-body-1" ? '' : 'hidden'
              }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <Table />
            {/* <div className="p-5 border border-b-2 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built
                on top of Tailwind CSS including buttons, dropdowns, modals,
                navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{" "}
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div> */}
          </div>
        </div>

        {/* Second Accordion */}
        <div id="accordion-collapse" data-accordion="open">
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className={`flex mx-auto my-auto  bg-orange-200 text-black items-center justify-between w-3/5 p-5 font-medium text-left  border border-black border-b-0 rounded-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-[#DCDFB1] hover:text-[#15803D] dark:hover:bg-gray-800 ${activeElement === "accordion-collapse-body-2" ? 'active' : ''
                }`}
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded={activeElement === "accordion-collapse-body-2"}
              aria-controls="accordion-collapse-body-2"
              onClick={() => handleClick("accordion-collapse-body-2")}
            >
              <span>Primary School</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>

          <div
            id="accordion-collapse-body-2"
            className={`${activeElement === "accordion-collapse-body-2" ? '' : 'hidden'
              }`}
            aria-labelledby="accordion-collapse-heading-2"
          >
            {/* Content for the second accordion body */}
            <Table found1="foundation 1" found2="foundation 2" first="I" second="II" third="III" fourth="IV" fifth="V" monfee="2000" termfee="8000" yearfee="20000"  />
            {/* <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built
                on top of Tailwind CSS including buttons, dropdowns, modals,
                navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{" "}
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div> */}
          </div>
        </div>

        {/* Third Accordion */}
        <div id="accordion-collapse" data-accordion="open">
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className={`flex mx-auto my-auto items-center justify-between w-3/5 p-5 font-medium text-left  bg-orange-200 text-black border  border-black rounded-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-[#DCDFB1] hover:text-[#15803D] dark:hover:bg-gray-800 ${activeElement === "accordion-collapse-body-3" ? 'active' : ''
                }`}
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded={activeElement === "accordion-collapse-body-3"}
              aria-controls="accordion-collapse-body-3"
              onClick={() => handleClick("accordion-collapse-body-3")}
            >
              <span>Secondary School</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>

          <div
            id="accordion-collapse-body-3"
            className={`${activeElement === "accordion-collapse-body-3" ? '' : 'hidden'
              }`}
            aria-labelledby="accordion-collapse-heading-3"
          >
            {/* Content for the third accordion body */}
            <Table found1="VI " found2="VII" first="VIII" second="IX" third="X" fourth="XI" fifth="XII"   monfee="2000" termfee="8000" yearfee="20000" />
            {/* <div className="p-5 border border-b border-black ">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built
                on top of Tailwind CSS including buttons, dropdowns, modals,
                navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{" "}
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      
      <div className="my-auto mt-10 ">
        <div className="w-3/5 mx-auto h-48 bg-[#A1514E] text-start text-white">
          <h3 className="py-8 px-8">Parents are reminded that it is their responsibility to ensure that all fees are paid, even when employers undertake to pay such fees on their behalf. Admission to, or retention in the School is conditional on acceptance of the Terms and Conditions</h3>
          <p className="py-8 px-8">The Board of Governors of the British International School reserve the right to amend these conditions as and when the need arises.</p>
        </div>

        <div className="w-3/5 mx-auto mt-8 text-start text-black">
          <h3 className="py-8 px-8">
            Fees & Payments
            School Fees 2022-23 (Inclusive of VAT)
            School Fees 2023/24 (Inclusive of VAT)
            Other Fees Payable
            Parents are reminded that it is their responsibility to ensure that all fees are paid, even when employers undertake to pay such fees on their behalf. Admission to, or retention in the School is conditional on acceptance of the Terms and Conditions

            The Board of Governors of the British International School reserve the right to amend these conditions as and when the need arises.



            Invoices are sent by email before the end of the current academic term or following acceptance of a place for a new child joining the School during the term. The date that fees are due is clearly indicated on invoices and misplacement or non-receipt of the original invoice cannot be considered a valid reason for failure to pay the fees. A penalty will come into effect if fees are not paid by the date indicated on the invoice. In the event of non-payment two weeks after the due date we will have to suspend the student until the fees are paid. If fees are not paid following suspension, the child’s place will be forfeited unless agreed otherwise by the Principal. Fees will not be refunded if a child is withdrawn from School.</h3>
          <p className="py-8 px-8">Fees are required to be paid in full prior to the admission date offered to your child or prior to the first day of the term. The full term's fees are due even if a student is on roll for only part of the term.</p>
        </div>
      </div>
    </>

  );
};

export default Accordion;
