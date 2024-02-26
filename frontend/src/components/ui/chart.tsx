"use client";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { CSVLink } from "react-csv";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const Chart = (value: any) => {
  const [paramsX, setParamsX] = useState();
  const [paramsY, setParamsY] = useState();
  const [maxY, setMaxY] = useState(0);
  const [dataCSV, setDataCSV] = useState([]);
  const data = value[0];

  useEffect(() => {
    const handleMaxParams = async () => {
      if (value[2] == "iin") {
        setMaxY(5);
        setDataCSV([await data[6]?.iinTotal, await data[6]?.timeTotal] as any);
        setParamsY((await data[0]?.iinMinuts30) as any);
      } else if (value[2] == "i1") {
        setMaxY(10);
        setDataCSV([await data[6]?.i1Total, await data[6]?.timeTotal] as any);
        setParamsY((await data[0]?.i1Minuts30) as any);
      } else if (value[2] == "i2") {
        setMaxY(10);
        setDataCSV([await data[6]?.i2Total, await data[6]?.timeTotal] as any);
        setParamsY((await data[0]?.i2Minuts30) as any);
      }
      if (value[2] == "vin") {
        setMaxY(30);
        setParamsY((await data[0]?.vinMinuts30) as any);
        setDataCSV([await data[6]?.vinTotal, await data[6]?.timeTotal] as any);
      }
      if (value[2] == "vout") {
        setMaxY(30);
        setParamsY((await data[1]?.voutoneHour) as any);
        setDataCSV([await data[6]?.voutTotal, await data[6]?.timeTotal] as any);
      }
    };
    handleMaxParams();
  }, [data, value]);
  const handleSelect = async (type: string) => {
    if (type == "30m") {
      if (value[2] == "iin") {
        setParamsX((await data[0]?.Minuts30) as any);
        setParamsY((await data[0]?.iinMinuts30) as any);
      } else if (value[2] == "i1") {
        setParamsX((await data[0]?.Minuts30) as any);
        setParamsY((await data[0]?.i1Minuts30) as any);
      } else if (value[2] == "i2") {
        setParamsX((await data[0]?.Minuts30) as any);
        setParamsY((await data[0]?.i2Minuts30) as any);
      } else if (value[2] == "vin") {
        setParamsX((await data[0]?.Minuts30) as any);
        setParamsY((await data[0]?.vinMinuts30) as any);
      } else if (value[2] == "vout") {
        setParamsX((await data[0]?.Minuts30) as any);
        setParamsY((await data[0]?.voutMinuts30) as any);
      }
    }
    if (type == "1h") {
      if (value[2] == "iin") {
        setParamsX((await data[1]?.oneHour) as any);
        setParamsY((await data[1]?.iinoneHour) as any);
      } else if (value[2] == "i1") {
        setParamsX((await data[1]?.oneHour) as any);
        setParamsY((await data[1]?.i1oneHour) as any);
      } else if (value[2] == "i2") {
        setParamsX((await data[1]?.oneHour) as any);
        setParamsY((await data[1]?.i2oneHour) as any);
      } else if (value[2] == "vin") {
        setParamsX((await data[1]?.oneHour) as any);
        setParamsY((await data[1]?.vinoneHour) as any);
      } else if (value[2] == "vout") {
        setParamsX((await data[1]?.oneHour) as any);
        setParamsY((await data[1]?.voutoneHour) as any);
      }
    }
    if (type == "12h") {
      if (value[2] == "iin") {
        setParamsX((await data[2]?.twelveHours) as any);
        setParamsY((await data[2]?.iintwelveHours) as any);
      } else if (value[2] == "i1") {
        setParamsX((await data[2]?.twelveHours) as any);
        setParamsY((await data[2]?.i1twelveHours) as any);
      } else if (value[2] == "i2") {
        setParamsX((await data[2]?.twelveHours) as any);
        setParamsY((await data[2]?.i2twelveHours) as any);
      } else if (value[2] == "vin") {
        setParamsX((await data[2]?.twelveHours) as any);
        setParamsY((await data[2]?.vintwelveHours) as any);
      } else if (value[2] == "vout") {
        setParamsX((await data[2]?.twelveHours) as any);
        setParamsY((await data[2]?.vouttwelveHours) as any);
      }
    }
    if (type == "24h") {
      if (value[2] == "iin") {
        setParamsX((await data[3]?.Hours24) as any);
        setParamsY((await data[3]?.iinHours24) as any);
      } else if (value[2] == "i1") {
        setParamsX((await data[3]?.Hours24) as any);
        setParamsY((await data[3]?.i1Hours24) as any);
      } else if (value[2] == "i2") {
        setParamsX((await data[3]?.Hours24) as any);
        setParamsY((await data[3]?.i2Hours24) as any);
      } else if (value[2] == "vin") {
        setParamsX((await data[3]?.Hours24) as any);
        setParamsY((await data[3]?.vinHours24) as any);
      } else if (value[2] == "vout") {
        setParamsX((await data[3]?.Hours24) as any);
        setParamsY((await data[3]?.voutHours24) as any);
      }
    }
    if (type == "7d") {
      if (value[2] == "iin") {
        setParamsX((await data[4]?.Days7) as any);
        setParamsY((await data[4]?.iinDays7) as any);
      } else if (value[2] == "i1") {
        setParamsX((await data[4]?.Days7) as any);
        setParamsY((await data[4]?.i1Days7) as any);
      } else if (value[2] == "i2") {
        setParamsX((await data[4]?.Days7) as any);
        setParamsY((await data[4]?.i2Days7) as any);
      } else if (value[2] == "vin") {
        setParamsX((await data[4]?.Days7) as any);
        setParamsY((await data[4]?.vinDays7) as any);
      } else if (value[2] == "vout") {
        setParamsX((await data[4]?.Days7) as any);
        setParamsY((await data[4]?.voutDays7) as any);
      }
    }
    if (type == "30d") {
      if (value[2] == "iin") {
        setParamsX((await data[5]?.Days30) as any);
        setParamsY((await data[5]?.iinDays30) as any);
      } else if (value[2] == "i1") {
        setParamsX((await data[5]?.Days30) as any);
        setParamsY((await data[5]?.i1Days30) as any);
      } else if (value[2] == "i2") {
        setParamsX((await data[5]?.Days30) as any);
        setParamsY((await data[5]?.i2Days30) as any);
      } else if (value[2] == "vin") {
        setParamsX((await data[5]?.Days30) as any);
        setParamsY((await data[5]?.vinDays30) as any);
      } else if (value[2] == "vout") {
        setParamsX((await data[5]?.Days30) as any);
        setParamsY((await data[5]?.voutDays30) as any);
      }
    }
  };
  return (
    <div className="flex flex-col bg-gray-50 rounded-lg shadow-lg hover:scale-105 duration-300">
      <div className="flex items-end justify-end mt-4 bg-transparent">
        <select
          className="bg-transparent border rounded-sm hover:bg-gray-100"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option>30m</option>
          <option>1h</option>
          <option>12h</option>
          <option>24h</option>
          <option>7d</option>
          <option>30d</option>
        </select>
      </div>
      <div
        className="flex flex-col justify-start items-start "
        style={{
          width: "500px",
          height: "300px",
          padding: "5px",
        }}
      >
        <h1
          className="self-center font-bold"
          style={{
            fontSize: "20px",
          }}
        >
          {value[1]}
        </h1>

        <Line
          options={{
            events: [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ],
            plugins: {
              tooltip: {
                enabled: true,
                mode: "index",
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                offset: true,
                max: maxY,
              },
              x: {
                stacked: true,
                display: false,
              },
            },
          }}
          data={{
            labels: paramsX || data[0]?.Minuts30,
            datasets: [
              {
                data: paramsY,
                backgroundColor: "transparent",
                borderColor: "red",
                pointBorderColor: "white",
                hoverBorderColor: "#000",
                hoverBorderWidth: 4,
                fill: true,
                tension: 0.4,
              },
            ],
          }}
        />
      </div>
      <div className="flex justify-end mr-2 mb-2">
        <CSVLink data={dataCSV}>
          <PiDownloadSimpleBold className="hover:scale-125 duration-300" />
        </CSVLink>
      </div>
    </div>
  );
};

export default Chart;
