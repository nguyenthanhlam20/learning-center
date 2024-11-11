import { Box, SvgIcon, Typography, Stack } from "@mui/material";

export default function ScoreCard({ title, icon, score, color }) {
  return (
    <Box
      width={"100%"}
      p={2}
      sx={{
        borderRadius: "10px",
        backgroundColor: color,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={1}
      >
        <SvgIcon>{icon}</SvgIcon>
        <Typography>{title}</Typography>
        <Typography>{score}</Typography>
      </Stack>
    </Box>
  );
}
