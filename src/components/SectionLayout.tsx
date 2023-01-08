import React from "react";

interface Props {
  children: any;
  id: string;
}

const SectionLayout = ({ children, id }: Props) => {
  return (
    <div id={id} className="w-screen h-screen scroll-mt-16">
      {children}
    </div>
  );
};

export default SectionLayout;
