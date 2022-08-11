import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { isDarkAtom } from "../atom";
import { useRecoilValue } from "recoil";
import { Helmet } from "react-helmet";
interface IHistorical {
  time_open: string;
  time_close: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {
    refetchInterval: 10000,
  });

  const isDark = useRecoilValue(isDarkAtom);

  return (
    <div>
      <Helmet>
        <title>{`${coinId} Chart`}</title>
      </Helmet>
      {isLoading || !data ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => {
                return [price.time_close, price.open, price.high, price.low, price.close];
              }) as any,
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "light" : "dark",
            },
            chart: {
              height: 600,
              width: 750,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#3C90EB",
                  downward: "#DF7D46",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
