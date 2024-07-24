import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-full max-w-5xl flex-col items-start gap-y-6 px-6 pb-4 pt-48 md:px-12 lg:px-24">
        {children}
      </div>
    </section>
  );
}
