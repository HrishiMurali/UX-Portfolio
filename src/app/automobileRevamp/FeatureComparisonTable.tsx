import React from "react";

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
        <tr>
          <th>Feature</th>
          {/* <th><img src="/path/to/bmw-logo.png" alt="BMW" /></th>
          <th><img src="/path/to/tesla-logo.png" alt="Tesla" /></th>
          <th><img src="/path/to/mercedes-logo.png" alt="Mercedes" /></th>
          <th><img src="/path/to/nissan-logo.png" alt="Nissan" /></th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.feature}</td>
            {[row.bmw, row.tesla, row.mercedes, row.nissan].map(
              (value, idx) => (
                <td key={idx}>
                  {value === true && <span>✅</span>}
                  {value === false && <span>❌</span>}
                  {value === "platform" && (
                    <>
                      {/* <img src="/path/to/android-icon.png" alt="Android" />
                    <img src="/path/to/ios-icon.png" alt="iOS" /> */}
                    </>
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
