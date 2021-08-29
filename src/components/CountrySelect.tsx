import React, { FC, useState } from "react";
import { Country } from "../types";

type Props = {
  countries: Country[] | undefined;
  callback: (country: Country | undefined) => void;
};

const CountrySelect: FC<Props> = ({ countries, callback }) => {
  const [selected, setSelected] = useState<number>(0);

  return countries === undefined ? (
    <h1 className="text-4xl mt-8 text-center text-red-500">No data found</h1>
  ) : (
    <select
      value={selected}
      onChange={(e) => {
        const country = countries.find(
          (country) => country.ID === e.target.value
        );
        callback(country);
      }}
      className="form-select mt-10 block w-full border p-3 rounded"
    >
      <option value="0">Select Country</option>
      {countries.map((country, idx) => (
        <option value={country.ID} key={idx}>
          {country.Country}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
