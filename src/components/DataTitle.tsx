import React, { FC } from "react";
import moment from "moment";

type Props = {
  title: string;
  dataDate: string | Date | undefined;
};

const DataTitle: FC<Props> = ({ title, dataDate }) => {
  const timestamp = moment(
    new Date(dataDate?.toString() as string),
    "DD MM YYYY, hh:mm:ss a"
  );

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="text-2xl mt-4 mb-10">{timestamp.toString()}</div>
    </div>
  );
};

export default DataTitle;
