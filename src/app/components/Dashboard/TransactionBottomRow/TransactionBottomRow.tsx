"use client";
import { Grid, Paper } from "@mui/material";

import DataChart from "../../DataChart/DataChart";
import { doughnutChartData } from "../MockData";
import scss from "./TransactionsBottomRow.module.scss";

const TransactionBottomRow = () => {
  return (
    <Grid
      spacing={2}
      container
      className={scss.bottomRow}
      sx={{
        margin: "0 auto",
        width: "100%",
        maxWidth: "1400",
        justifyContent: "center",
        alignItems: "center",
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid
        size={{ xs: 12, sm: 6, md: 3 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;
