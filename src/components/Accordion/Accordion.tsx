import { Fragment, useState } from "react";
import { accordionData } from "../../constants/accordionData";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
export function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleSectionFold(index: number) {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <>
      <h2 className="mb-8 mt-16 text-h2 font-bold">
        Frequently asked questions
      </h2>

      {accordionData.map((data, index) => {
        const isOpen = openIndex === index;

        return (
          <Fragment key={data.title}>
            <div className="flex flex-col overflow-hidden border-t-2 py-3 last-of-type:border-b-2">
              <div
                className="flex cursor-pointer justify-between "
                onClick={() => handleSectionFold(index)}
              >
                <h4 className="text-h4 font-semibold">{data.title}</h4>
                <PlusCircleIcon
                  className={`h-12 text-neutral-700 transition-transform duration-500 ${isOpen ? "rotate-45 fill-indigo-400" : ""}`}
                />
              </div>

              <div
                style={
                  isOpen
                    ? {
                        maxHeight: "10rem",
                        transition: "max-height 300ms 300ms ease-out",
                      }
                    : {
                        maxHeight: "0rem",
                        transition: "max-height 300ms ease-out",
                      }
                }
              >
                <p className="pb-5 pt-3 text-regular">{data.description}</p>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
