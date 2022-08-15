import React from "react";
import { ClientOnly } from "remix-utils";

const InnerContainerQuery = React.lazy(() => import("./InnerContainerQuery"));

export function ContainerQuery() {
  return (
    <ClientOnly fallback={<div>fallback...</div>}>
      {() => <InnerContainerQuery />}
    </ClientOnly>
  );
}
