import { months } from "@/app/helper/Util";

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Transactions",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: true,
      borderColor: "#4CC9F0",
      backgroundColor: "rgba(76, 201, 240, 0.12)",
      pointBackgroundColor: "#4CC9F0",
      pointBorderColor: "#4CC9F0",
      pointRadius: 3,
      pointHoverRadius: 5,
      borderWidth: 2,
      tension: 0.38,
    },
  ],
};

export const doughnutChartData = {
  labels: ["New", "Returning", "Enterprise"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [68, 21, 8],
      backgroundColor: ["#8B7CFF", "#4CC9F0", "#34D399"],
      borderColor: "rgba(11,16,32,0.9)",
      borderWidth: 2,
      hoverOffset: 6,
      cutout: "64%",
    },
  ],
};
