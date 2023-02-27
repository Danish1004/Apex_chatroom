import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
const DashboardLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack direction="column" sx={{ width: "100%" }}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            {" "}
            <img src={Logo} alt="logo" />
          </Box>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;