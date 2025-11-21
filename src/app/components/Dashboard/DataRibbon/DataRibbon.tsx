import { IconButton, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import DataCard from "../DataCard/DataCard";

const DataRibbon = () => {
  return (
    <Grid
      spacing={3}
      container
      gap={1.5}
      sx={{ width: "100%", mt: 2, mb: 5 }}
      justifyContent="center"
      alignItems="stretch"
    >
      {/* Card 1 */}
      <Grid
        textAlign={"center"}
        columns={{ xs: 12, sm: 6, md: 3, lg: 3 }}
        size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
      >
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={
            "The totals of all DataSoft products in the current financial year"
          }
        />
      </Grid>

      <Grid
        textAlign={"center"}
        columns={{ xs: 12, sm: 6, md: 3, lg: 3 }}
        size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
      >
        <DataCard
          title={"Total Value"}
          value={"$25,732.53"}
          description={"The total sales of the current financial year"}
        />
      </Grid>

      <Grid
        textAlign={"center"}
        columns={{ xs: 12, sm: 6, md: 3, lg: 3 }}
        size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
      >
        <DataCard
          title={"Avg. Order Value"}
          value={"$159.30"}
          description={
            "The average order value for all sales this current financial year"
          }
        />
      </Grid>

      <Grid
        textAlign={"center"}
        columns={{ xs: 12, sm: 6, md: 3, lg: 3 }}
        size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
      >
        <DataCard
          title={"Conversion Rate"}
          value={"0.61%"}
          description={"How many pitches become sales"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;

{
  /* <Paper sx={{ padding: "1rem", height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontSize={"h6"} color={"lightslategrey"}>
            Total Sales
          </Typography>
          <Tooltip
            title={
              <Typography fontSize={"16"}>
                The totals of all DataSoft products in the current financial
                year which is 462
              </Typography>
            }
          >
            <IconButton>
              <InfoOutlined />
            </IconButton>
          </Tooltip>
        </div>
        <Typography fontSize={"h4"}>462</Typography>
      </Paper> */
}
