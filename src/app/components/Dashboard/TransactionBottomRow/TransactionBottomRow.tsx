"use client";

import { Grid, Paper, Typography, Box } from "@mui/material";
import DataChart from "../../DataChart/DataChart";
import { doughnutChartData } from "../MockData";
import scss from "./TransactionsBottomRow.module.scss";

const cards = [
  { title: "New customers", value: "68%", meta: "Customer mix this month" },
  { title: "Returning users", value: "21%", meta: "Retention segment" },
  { title: "Enterprise leads", value: "8%", meta: "High-value accounts" },
  { title: "Churn risk", value: "3%", meta: "Needs attention" },
];

const TransactionBottomRow = () => {
  return (
    <Grid
      container
      spacing={2}
      className={scss.bottomRow}
      sx={{ width: "100%", margin: "0 auto" }}
    >
      {cards.map((card) => (
        <Grid key={card.title} size={{ xs: 12, sm: 6, xl: 3 }}>
          <Paper className={scss.dataCard}>
            <div className={scss.cardHeader}>
              <Typography className={scss.cardTitle}>{card.title}</Typography>
              <Typography className={scss.cardValue}>{card.value}</Typography>
            </div>

            <div className={scss.chartWrap}>
              <DataChart type="doughnut" data={doughnutChartData} />
            </div>

            <Box className={scss.cardFooter}>
              <Typography className={scss.cardMeta}>{card.meta}</Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TransactionBottomRow;
