import classNames from "classnames";
import "container-query-polyfill";
import React from "react";

export default function InnerContainerQuery() {
  const [selected, setSelected] = React.useState(workflows[0]);

  return (
    <div className="container-type-size m-10">
      <div className="grid gap-y-6 mt-4 grid-cols-3 gap-x-4">
        <div
          className={classNames(
            "relative bg-white border rounded-lg shadow-sm flex cursor-pointer focus:outline-none px-4 py-2 cq-w-sm:py-4",
            selected.id === 1 ? "text-blue-500" : ""
          )}
          onClick={() => setSelected(workflows[0])}
        >
          {workflows[0].title}
        </div>
        <div
          className={classNames(
            "relative bg-white border rounded-lg shadow-sm flex cursor-pointer focus:outline-none px-4 py-2 cq-w-sm:py-4",
            selected.id === 2 ? "text-blue-500" : ""
          )}
          onClick={() => setSelected(workflows[1])}
        >
          {workflows[1].title}
        </div>
        <div
          className={classNames(
            "relative bg-white border rounded-lg shadow-sm flex cursor-pointer focus:outline-none px-4 py-2 cq-w-sm:py-4",
            selected.id === 3 ? "text-blue-500" : ""
          )}
          onClick={() => setSelected(workflows[2])}
        >
          {workflows[2].title}
        </div>
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
