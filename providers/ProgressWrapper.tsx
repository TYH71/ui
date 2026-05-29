"use client";

import { ProgressProvider } from "@bprogress/next/app";

export default function ProgressWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider
      height="2px"
      color="var(--foreground)"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
