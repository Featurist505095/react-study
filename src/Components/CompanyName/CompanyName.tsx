import React, { FunctionComponent } from "react";

import "./CompanyName.scss";

interface CompanyNameProp {
  name?: string;
  className?: string;
}

const CompanyName: FunctionComponent<CompanyNameProp> = ({
  name = 'netflixroulette', className='company-name'
}) => {
  return (
    <a className={className} href="/search">
      <h3>{name}</h3>
    </a>
  );
};

export default CompanyName;