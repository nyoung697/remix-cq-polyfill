import classNames from "classnames";
import "container-query-polyfill";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function InnerContainerQuery() {
  const [isBig, setIsBig] = React.useState(false);

  return (
    <div className="container-type-size m-10">
      <RadioComp />

      {/* <div
        className={classNames(
          "bg-yellow-200 p-4 cq-w-sm:p-2",
          isBig
            ? "text-4xl text-red-500 cq-w-sm:text-blue-500"
            : "text-xl text-purple-500 cq-w-sm:text-green-500"
        )}
      >
        Hi
      </div>

      <button onClick={() => setIsBig((prev) => !prev)}>Toggle Big</button> */}
    </div>
  );
}

const workflows = [
  {
    id: 1,
    title: "From Pickle",
    description: "Upload a pkl file to kick off the workflow",
  },
  {
    id: 2,
    title: "From Centroids",
    description: "Initialize a GridDef from block centroids",
  },
  {
    id: 3,
    title: "From Scattered Data",
    description: "Initialize a GridDef by buffering a scattered PointData",
  },
];

const RadioComp = () => {
  const [selected, setSelected] = React.useState(workflows[0]);

  return (
    <div className="grid grid-cols-1 mt-2 gap-y-2 cq-w-sm:gap-y-6 cq-w-sm:mt-4 cq-w-sm:grid-cols-3 cq-w-sm:gap-x-4">
      {workflows.map((workflow) => {
        let checked = workflow.id === selected.id;
        let active = workflow.id == selected.id;

        return (
          <div
            key={workflow.id}
            onClick={() => setSelected(workflow)}
            className={classNames(
              checked ? "border-transparent" : "border-gray-300",
              active ? "border-blue-500 ring-2 ring-blue-500" : "",
              "relative bg-white border rounded-lg shadow-sm flex cursor-pointer focus:outline-none px-4 py-2 cq-w-sm:py-4"
            )}
          >
            <>
              <span className="flex flex-1">
                <span className="flex flex-col">
                  <span className="block text-xs font-medium text-gray-900 cq-w-sm:text-sm">
                    {workflow.title}
                  </span>
                  <span className="items-center hidden mt-1 text-sm text-gray-500 cq-w-sm:flex">
                    {workflow.description}
                  </span>
                </span>
              </span>
              <CheckCircleIcon
                className={classNames(
                  !checked ? "invisible" : "",
                  "h-5 w-5 text-blue-600"
                )}
                aria-hidden="true"
              />
              <span
                className={classNames(
                  active ? "border" : "border-2",
                  checked ? "border-blue-500" : "border-transparent",
                  "absolute -inset-px rounded-lg pointer-events-none"
                )}
                aria-hidden="true"
              />
            </>
          </div>
        );
      })}
    </div>
  );
};
