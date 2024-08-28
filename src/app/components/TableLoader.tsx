import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const TableLoader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-12 bg-primary bg-opacity-100 opacity-55" />
      <Skeleton className="h-12 bg-primary bg-opacity-0 opacity-55" />
      <Skeleton className="h-12 bg-primary bg-opacity-20  opacity-55" />
      <Skeleton className="h-12 bg-primary bg-opacity-20  opacity-55" />
      <Skeleton className="h-12 bg-primary bg-opacity-20  opacity-55" />
      <Skeleton className="h-12 bg-primary bg-opacity-20  opacity-55" />
    </div>
  );
};
