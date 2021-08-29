import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="text-3xl md:text-5xl">Covid-19 Tracker</div>
      <p>
        API by{" "}
        <a
          href="https://covid19api.com"
          className="text-blue-300"
          target="_blank"
        >
          covid19api.com
        </a>
      </p>
    </header>
  );
};
export default Header;
