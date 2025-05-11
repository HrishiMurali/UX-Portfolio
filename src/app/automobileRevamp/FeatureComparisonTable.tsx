import React from "react";
import BMW from "../../../public/BMW.png";
import benz from "../../../public/benz.png";
import tesla from "../../../public/tesla.png";
import nissan from "../../../public/nissan.png";
import correct from "../../../public/correct.png";
import wrong from "../../../public/wrong.png";
import androidApple from "../../../public/androidApple.png";
import Image from "next/image";

import "./featureComparisonTable.css";

interface FeatureRow {
  feature: string;
  bmw: boolean | "platform";
  tesla: boolean | "platform";
  mercedes: boolean | "platform";
  nissan: boolean | "platform";
}

const data: FeatureRow[] = [
  {
    feature: "Remote Operations",
    bmw: true,
    tesla: true,
    mercedes: true,
    nissan: true,
  },
  {
    feature: "Vehicle alerts",
    bmw: true,
    tesla: false,
    mercedes: true,
    nissan: true,
  },
  {
    feature: "Safety & security",
    bmw: true,
    tesla: false,
    mercedes: true,
    nissan: true,
  },
  {
    feature: "Lifestyle & Utility",
    bmw: true,
    tesla: true,
    mercedes: true,
    nissan: false,
  },
  {
    feature: "Trip planning",
    bmw: true,
    tesla: false,
    mercedes: false,
    nissan: true,
  },
  {
    feature: "Vehicle status",
    bmw: true,
    tesla: true,
    mercedes: true,
    nissan: true,
  },
  {
    feature: "Platform",
    bmw: "platform",
    tesla: "platform",
    mercedes: "platform",
    nissan: "platform",
  },
];

const FeatureComparisonTable: React.FC = () => {
  return (
    <table>
      <thead>
        <tr className="table-row">
          <th className="table-header">
            <span className="table-header-text">Benchmark</span>
          </th>
          <th className="table-header-image ">
            <Image src={BMW} alt="BMW" />
          </th>
          <th className="table-header-image ">
            <Image src={tesla} alt="Tesla" />
          </th>
          <th className="table-header-image ">
            <Image src={benz} alt="Mercedes" />
          </th>
          <th className="table-header-image ">
            <Image src={nissan} alt="Nissan" />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="table-header">
              {" "}
              <span className="table-header-text">{row.feature}</span>
            </td>
            {[row.bmw, row.tesla, row.mercedes, row.nissan].map(
              (value, idx) => (
                <td key={idx} className="table-data">
                  {value === true && <Image src={correct} alt="correct" />}
                  {value === false && <Image src={wrong} alt="wrong" />}
                  {value === "platform" && (
                    <Image src={androidApple} alt="androidApple" />
                  )}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FeatureComparisonTable;
