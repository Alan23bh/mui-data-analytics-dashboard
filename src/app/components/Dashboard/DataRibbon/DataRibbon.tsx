import Grid from "@mui/material/Grid";
import DataCard from "../DataCard/DataCard";

const DataRibbon = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100%", mt: 0.5, mb: 3 }}
      alignItems="stretch"
    >
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <DataCard
          title="Total sales"
          value="462"
          description="Total completed sales recorded in the current financial year."
          trend="+8.2%"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <DataCard
          title="Total value"
          value="$25,732.53"
          description="Total revenue generated during the current financial year."
          trend="+12.6%"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <DataCard
          title="Avg. order value"
          value="$159.30"
          description="Average value of completed purchases in the current financial year."
          trend="+4.1%"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <DataCard
          title="Conversion rate"
          value="0.61%"
          description="Share of pitches that convert into completed sales."
          trend="+1.3%"
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
