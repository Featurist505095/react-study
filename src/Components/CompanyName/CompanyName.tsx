import React, { FunctionComponent } from "react";

import "./CompanyName.scss";

interface CompanyNameProp {
  name?: string;
  className?: string;
}

export const CompanyName: FunctionComponent<CompanyNameProp> = ({
  name = 'netflixroulette', className='company-name'
}) => {
  return (
    <a className={className} href="">
      <h3>{name}</h3>
    </a>
  );
};