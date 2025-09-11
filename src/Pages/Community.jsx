// Community.jsx
import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ConstructionIcon from "@mui/icons-material/Construction";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useNavigate } from "react-router-dom";

const Feature = ({ icon: title, subtitle }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 1,
    }}
  >
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: 1.5,
        display: "grid",
        placeItems: "center",
        bgcolor: "error.light",
      }}
    ></Box>
    <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "center" }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", textAlign: "center" }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default function Community() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "#f4f6fa",
        minHeight: "100vh",
        width: "100vw",
        boxSizing: "border-box",
        overflowX: "hidden",
        color: "black",
        padding: "50px 60px",
      }}
    >
      <Box
        sx={{
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 6 },
          // fontFamily: "Nunito Sans",
        }}
      >
        {/* Hero */}
        <Box sx={{ mb: 3, fontFamily: "Nunito Sans" }}>
          <Typography variant="h4" sx={{ lineHeight: 1.2 }}>
            Connect with
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Sub-Contractor & Suppliers
          </Typography>

          <Typography sx={{ mt: 2, fontWeight: 700 }}>
            This is BolpatraCOMMUNITY, here you can post your work and get
            connected with the best Sub-Contractors and Suppliers.
          </Typography>
        </Box>

        {/* Features strip */}
        <Box
          sx={{
            display: "flex",
            height: "165px",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#fff",
            boxShadow: 1,
            p: { xs: 2, md: 3 },
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={3}>
              <Feature
                // icon={UploadFileIcon}
                title="Post"
                subtitle="Your Work"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Feature
                // icon={ConstructionIcon}
                title="Get"
                subtitle="Sub-Contractor"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Feature
                // icon={HandshakeIcon}
                title="Seal"
                subtitle="The Deal"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ textAlign: { xs: "center", md: "right" } }}
            ></Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ height: "60px", width: "315px" }}
            onClick={() => navigate}
          >
            Post Your Work
          </Button>
        </Box>

        <Box sx={{ bgcolor: "pink", mt: "15px", boxSizing: "border-box" }}>
          hi
        </Box>
      </Box>
    </Box>
  );
}
