import { Grid, Box, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss";
import DataRibbon from "../components/Dashboard/DataRibbon/DataRibbon";
import TransactionsPerDay from "../components/Dashboard/TransactionsPerDay/TransactionsPerDay";
import TransactionBottomRow from "../components/Dashboard/TransactionBottomRow/TransactionBottomRow";

export const Dashboard = () => {
  return (
    <Box>
      <Grid
        container
        spacing={4}
        mt={2}
        justifyContent={"center"}
        alignItems={"flex-start"}
        sx={{ width: "100%" }}
      >
        <Grid size={{ xs: 12 }}>
          <DataRibbon />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TransactionsPerDay />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TransactionBottomRow />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
