"use client";

import { Grid, Paper, Typography, Card, Box } from "@mui/material";
import scss from "./TransactionsPerDay.module.scss";
import DataChart from "../../DataChart/DataChart";
import { lineChartData } from "../MockData";

const sideStats = [
  { title: "Total Products", value: "1,275", change: "+28.7%" },
  { title: "Buy-to-detail", value: "4.40%", change: "+8.4%" },
  { title: "Refunds", value: "0", change: "Stable" },
];

const TransactionsPerDay = () => {
  return (
    <Paper className={scss.transactions}>
      <div className={scss.chartSection}>
        <div className={scss.chartHeader}>
          <div>
            <Typography className={scss.eyebrow}>Overview</Typography>
            <Typography className={scss.title}>Transactions per day</Typography>
          </div>
          <Typography className={scss.subcopy}>
            Daily transaction activity across the current reporting period.
          </Typography>
        </div>

        <div className={scss.chartArea}>
          <DataChart type="line" data={lineChartData} />
        </div>
      </div>

      <div className={scss.cardWrapper}>
        {sideStats.map((stat) => (
          <Card key={stat.title} className={scss.card} variant="outlined">
            <Typography className={scss.cardLabel}>{stat.title}</Typography>
            <Typography className={scss.cardMetric}>{stat.value}</Typography>
            <Box className={scss.cardMeta}>
              <span className={scss.cardChange}>{stat.change}</span>
              <Typography className={scss.cardContext}>
                vs prior period
              </Typography>
            </Box>
          </Card>
        ))}
      </div>
    </Paper>
  );
};

export default TransactionsPerDay;
