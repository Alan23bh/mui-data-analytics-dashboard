import { Paper, Typography, IconButton, Tooltip, Box } from "@mui/material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";
import scss from "./DataCard.module.scss";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
  trend?: string;
};

const DataCard = ({
  title,
  value,
  description,
  trend = "+12.4%",
}: DataCardProps) => {
  return (
    <Paper className={scss.dataCard}>
      <div className={scss.topRow}>
        <Typography className={scss.label}>{title}</Typography>
        <Tooltip
          title={<Typography fontSize={14}>{description}</Typography>}
          arrow
        >
          <IconButton size="small" className={scss.infoButton}>
            <InfoOutlined fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </div>

      <Typography className={scss.value}>{value}</Typography>

      <Box className={scss.footerRow}>
        <span className={scss.trend}>
          <TrendingUpRounded fontSize="inherit" />
          {trend}
        </span>
        <Typography className={scss.caption}>vs last period</Typography>
      </Box>
    </Paper>
  );
};

export default DataCard;
