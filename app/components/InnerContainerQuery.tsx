import classNames from "classnames";
import "container-query-polyfill";
import React from "react";

export default function InnerContainerQuery() {
  const [selected, setSelected] = React.useState(workflows[0]);

  return (
    <div className="container-type-size m-10">
      <div className="grid grid-cols-1 mt-2 gap-y-2 cq-w-sm:gap-y-6 cq-w-sm:mt-4 cq-w-sm:grid-cols-3 cq-w-sm:gap-x-4">
        {workflows.map((workflow) => (
          <div
            key={workflow.id}
            className={classNames(
              "relative bg-white border rounded-lg shadow-sm flex cursor-pointer focus:outline-none px-4 py-2 cq-w-sm:py-4",
              selected.id === workflow.id ? "text-blue-500" : ""
            )}
            onClick={() => setSelected(workflow)}
          >
            {workflow.title}
          </div>
        ))}
      </div>
    </div>
  );
}

const workflows = [
  {
    id: 1,
    title: "From Pickle",
  },
  {
    id: 2,
    title: "From Centroids",
  },
  {
    id: 3,
    title: "From Scattered Data",
  },
];
