// import { accordionData } from "../../constants/accordionData";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
export function Accordion() {
  return (
    <>
      <h2 className="mt-16 text-h2 font-bold">Frequently asked questions</h2>

      <div className="flex flex-col gap-5 border-2">
        <div className="flex cursor-pointer justify-between">
          <h4 className="text-h4 font-semibold">
            Why sould I use a password generator?
          </h4>
          <PlusCircleIcon className="h-12 text-neutral-700" />
        </div>

        <p className="text-regular">
          Computers can quickly and easily guess passwords. Any hacker using a
          traditional desktop computer would have the opportunity to test
          billions of different passwords in several seconds. We've developed an
          online password generator to help you keep your private information
          secure. Our free password generator relies on mathematical randomness
          from an algorithm to create truly secure, random passwords.
        </p>
      </div>
    </>
  );
}
