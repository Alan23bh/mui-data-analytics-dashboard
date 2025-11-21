import { Paper, Typography, IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import scss from "./DataCard.module.scss";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description } = props;
  return (
    <Paper className={scss.dataCard}>
      <div className={scss.header}>
        <Typography color={"grey"}>{title}</Typography>
        <Tooltip
          title={
            <Typography
              fontSize={16}
            >{`${description} which is ${value}`}</Typography>
          }
        >
          <IconButton>
            <InfoOutlined />
          </IconButton>
        </Tooltip>
      </div>
      <Typography fontSize={"h3"}>{value}</Typography>
    </Paper>
  );
};

export default DataCard;
