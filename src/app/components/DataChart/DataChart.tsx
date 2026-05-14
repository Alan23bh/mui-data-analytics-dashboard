"use client";

import { ChartConfiguration, Chart, registerables } from "chart.js";
import { useEffect, useMemo, useRef } from "react";
import { useTheme, alpha } from "@mui/material/styles";

Chart.register(...registerables);

const DataChart = ({ type, data, options }: ChartConfiguration) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  const theme = useTheme();

  const mergedOptions = useMemo(() => {
    const gridColor = alpha(
      theme.palette.text.primary,
      theme.palette.mode === "dark" ? 0.08 : 0.06,
    );

    return {
      responsive: true,
      maintainAspectRatio: false,
      ...options,
      scales: {
        x: {
          ticks: {
            color: theme.palette.text.secondary,
          },
          grid: {
            color: gridColor,
          },
          ...(options?.scales?.x ?? {}),
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: theme.palette.text.secondary,
          },
          grid: {
            color: gridColor,
          },
          ...(options?.scales?.y ?? {}),
        },
      },
      plugins: {
        legend: {
          labels: {
            color: theme.palette.text.secondary,
            usePointStyle: true,
          },
          ...(options?.plugins?.legend ?? {}),
        },
        tooltip: {
          backgroundColor: theme.palette.background.paper,
          titleColor: theme.palette.text.primary,
          bodyColor: theme.palette.text.secondary,
          borderColor: alpha(theme.palette.text.primary, 0.12),
          borderWidth: 1,
          ...(options?.plugins?.tooltip ?? {}),
        },
      },
    };
  }, [options, theme]);

  useEffect(() => {
    if (!canvasRef.current || !type) return;

    chartRef.current?.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type,
      data,
      options: mergedOptions,
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [type, data, mergedOptions]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "320px",
        minHeight: "320px",
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DataChart;
