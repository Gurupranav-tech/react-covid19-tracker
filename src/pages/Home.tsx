import React, { FC, useEffect, useState } from "react";
import { Country, CovidSummary, Global } from "../types";
import Spinner from "../components/Spinner";
import DataTitle from "../components/DataTitle";
import DataBoxes from "../components/DataBoxes";
import CountrySelect from "../components/CountrySelect";

const Home: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CovidSummary>();
  const [title, setTitle] = useState<string>("");
  const [stats, setStats] = useState<Country | Global>();

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await fetch("https://api.covid19api.com/summary");
      const json = (await res.json()) as CovidSummary;
      setData(json);
      setTitle("Global");
      setStats(data?.Global);
      setLoading(false);
    };

    fetchItems();
  }, []);

  return !loading ? (
    <div>
      <DataTitle title={title} dataDate={data?.Date} />
      <DataBoxes stats={stats} />
      <CountrySelect
        countries={data?.Countries}
        callback={(country) => {
          if (country === undefined) {
            setTitle("Global");
            setStats(data?.Global);
          } else {
            setTitle(country.Country);
            setStats(country);
          }
        }}
      />
      <button
        className="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600"
        onClick={() => {
          const fetchItems = async () => {
            setLoading(true);
            const res = await fetch("https://api.covid19api.com/summary");
            const json = (await res.json()) as CovidSummary;
            setData(json);
            setTitle("Global");
            setStats(data?.Global);
            setLoading(false);
          };

          fetchItems();
        }}
      >
        Clear Country
      </button>
    </div>
  ) : (
    <Spinner />
  );
};

export default Home;
