// AboutUs.jsx
import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Divider,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import HandshakeIcon from "@mui/icons-material/Handshake";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import GavelIcon from "@mui/icons-material/Gavel";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CampaignIcon from "@mui/icons-material/Campaign";
import VerifiedIcon from "@mui/icons-material/Verified";
import SourceIcon from "@mui/icons-material/Source";

import background from "../assets/bg-aboutus.jpg";
import group from "../assets/group.jpeg";
import photo1 from "../assets/Photo1.jpg";
import photo2 from "../assets/Photo2.jpg";
import photo3 from "../assets/Photo3.jpg";
import photo4 from "../assets/Photo4.jpg";
import photo5 from "../assets/Photo5.jpg";
import Marquee from "react-fast-marquee";

/* === Consistent divider spacing === */
const DIVIDER_MY = 4;
const DividerSpacer = () => (
  <Divider variant="middle" sx={{ my: DIVIDER_MY }} />
);

/* Shared horizontal padding container (prevents edge-to-edge text on mobile) */
const PageContainer = ({ children, sx }) => (
  <Box sx={{ mx: "auto", px: { xs: 2, sm: 3, md: 4 }, ...sx }}>{children}</Box>
);

/* Row with responsive spacing */
const Row = ({ children, sx }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: { xs: 2, sm: 3, md: 6 },
      mt: 2.5,
      flexWrap: "wrap",
      width: "100%",
      color: "black",
      ...sx,
    }}
  >
    {children}
  </Box>
);

/* Global paragraph style helpers (justify + hyphenation) */
const JUSTIFY = {
  textAlign: "justify",
  hyphens: "auto",
  WebkitHyphens: "auto",
};

/* Responsive image card (prevents overflow on small screens) */
const ImageCard = ({ src = group, alt = "People", sx }) => (
  <Card
    elevation={0}
    sx={{
      width: { xs: "100%", sm: 360, md: 390 },
      height: { xs: 220, sm: 300, md: 350 },
      borderRadius: 2,
      overflow: "hidden",
      ...sx,
    }}
  >
    <CardMedia
      component="img"
      image={src}
      alt={alt}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  </Card>
);

const FeatureCard = ({ title, children, sx }) => (
  <Box
    sx={{
      backgroundColor: "#F5F6F8",
      width: "100%",
      maxWidth: 390,
      minHeight: 347,
      borderRadius: 2,
      boxShadow: 2,
      p: { xs: 2.5, sm: 3, md: 3.5 }, // comfortable inner padding
      fontFamily: "Nunito Sans",
      ...sx,
    }}
  >
    <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 800, mb: 1.5 }}>
      {title}
    </Typography>
    <Typography
      variant="body2"
      sx={{ ...JUSTIFY, fontSize: 15.5, lineHeight: 1.8, px: 0.25 }}
    >
      {children}
    </Typography>
  </Box>
);

/** === Key Features (Both: Publisher & Bidder) === */
const FEATURES_BOTH = [
  {
    icon: SourceIcon,
    title: "Complete Tender Aggregation",
    desc: "Collects and displays tender notices from national newspapers, local newspapers, and the PPMO portal in one place.",
  },
  {
    icon: DevicesIcon,
    title: "Website + Mobile App Access",
    desc: "Users can view, search, and manage tenders from both a web browser and our dedicated mobile application.",
  },
  {
    icon: BookmarkAddedIcon,
    title: "Save & Manage Favourite Tenders",
    desc: "Save interested tenders and track them easily without having to search again.",
  },
  {
    icon: HandshakeIcon,
    title: "Sub-Contract / Petty Tender Listing",
    desc: "A separate section for petty/sub-contract opportunities to support SMEs and small contractors.",
  },
  {
    icon: NotificationsActiveIcon,
    title: "Timely Notifications & Alerts",
    desc: "Instant notifications when new tenders are published or deadlines are approaching.",
  },
  {
    icon: GavelIcon,
    title: "Secure E-Bidding",
    desc: "Organisations can publish tenders and contractors can submit bids digitally through the platform.",
  },
  {
    icon: PhoneIphoneIcon,
    title: "Mobile Bid Submission",
    desc: "Submit bids directly from mobile—fast, convenient, and secure.",
  },
  {
    icon: AttachMoneyIcon,
    title: "Affordable Subscription Model",
    desc: "Low annual cost so all types of users can access the platform.",
  },
  {
    icon: CampaignIcon,
    title: "Multi-Channel Publication Support",
    desc: "Supports publication of tenders on digital platforms and, where required, in traditional paper media.",
  },
  {
    icon: VerifiedIcon,
    title: "Verified & Accurate Information",
    desc: "All notices are reviewed to ensure reliability and up-to-date information.",
  },
];

export default function AboutUs() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        fontFamily: "Nunito Sans",
        overflowX: "hidden",
        bgcolor: "#ffffff",
      }}
    >
      {/* Load Nunito Sans font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      {/* Hero (text pinned to bottom-right) */}
      <Box
        sx={{
          minHeight: 600,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.546), rgba(0, 0, 0, 0.556)), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          pt: 0,
          pb: { xs: 8, md: 12 },
        }}
      >
        <PageContainer
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 1,
              width: "100%",
              pr: { xs: 0, sm: 2, md: 6, lg: 10 },
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: 32, sm: 40, md: 56 },
                fontWeight: 800,
                textAlign: "right",
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "right",
                fontSize: { xs: 14, sm: 16, md: 18 },
                lineHeight: 1.6,
              }}
            >
              नेपालको पहिलो Private E-Bidding Platform <br /> — सबै टेन्डर एकै
              ठाउँमा —
            </Typography>
          </Box>
        </PageContainer>
      </Box>

      <div>
        <PageContainer>
          {/* Row 1: image left, text right */}
          <Row sx={{ mt: 4 }}>
            <ImageCard />
            <Card elevation={0} sx={{ width: { xs: "100%", md: "60%" }, p: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 26, mb: 1.5 }}>
                Who are we ?
              </Typography>
              <Typography sx={{ ...JUSTIFY, fontSize: 16, lineHeight: 1.8 }}>
                <strong>Bolpatra Nepal</strong> is a tender discovery and
                e-bidding platform built to make procurement simple, transparent
                and accessible across Nepal. The platform aggregates tender
                notices from national and local newspapers as well as the PPMO
                portal, and delivers them through an easy-to-use website and
                mobile app. Users can save interesting tenders, explore
                sub-contracting (petty) opportunities, receive timely alerts,
                and submit bids securely online — including from mobile devices.
                <br />
                We serve contractors, suppliers, consultants, project owners and
                procurement teams of all sizes — especially small and local
                firms that previously faced high costs or fragmented
                information. Guided by the values of accessibility, accuracy,
                affordability and trust, Bolpatra Nepal helps users discover
                opportunities faster, evaluate options with confidence, and
                participate in procurement more effectively. Explore
                BolpatraNepal.com to find relevant tenders, publish notices, or
                start a secure e-bidding process — all from one place.
                <br />
                <strong style={{ display: "flex" }}>
                  We are Innovating, Leading and Inspiring.
                </strong>
              </Typography>
            </Card>
          </Row>

          <DividerSpacer />

          {/* Feature boxes */}
          <Row sx={{ mt: 4 }}>
            <FeatureCard title="Our Achievement">
              Bolpatra Nepal brought together fragmented tender information —
              national and local newspapers plus PPMO notices — into a single,
              easy-to-use platform. The team launched both a website and a
              mobile app, introduced secure e-bidding and mobile bid submission,
              and kept the service affordable so smaller firms can participate.
              Along the way Bolpatra Nepal formed partnerships with local media
              and committed to focused community giving, earning the trust of
              contractors and procurement teams across the country.
            </FeatureCard>

            <FeatureCard title="Our Mission">
              Our mission is to remove barriers to procurement opportunities in
              Nepal. By aggregating notices from newspapers, local press and the
              PPMO portal, and by offering secure E-Bidding and mobile bid
              submission, Bolpatra Nepal aims to create a fairer, faster and
              more inclusive marketplace for Public and Private Tenders.
            </FeatureCard>

            <FeatureCard title="Our Vision">
              We envision a procurement ecosystem where notices are published
              wherever they’re needed — on digital platforms and in paper media
              — and where clients and contractors can quickly discover, evaluate
              and participate in opportunities through secure, user-friendly
              tools.
            </FeatureCard>
          </Row>

          <DividerSpacer />

          {/* Row 2: text left, image right */}
          <Row sx={{ alignItems: "center", mt: -3 }}>
            <Card elevation={0} sx={{ width: { xs: "100%", md: "60%" }, p: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 26 }}>
                Our Story
              </Typography>
              <Typography
                sx={{ ...JUSTIFY, mt: 1.5, lineHeight: 1.8, fontSize: 16 }}
              >
                <strong>Bolpatra Nepal</strong> was created after noticing a
                recurring problem in the construction and procurement community:
                tender information was scattered across multiple sources, and
                checking every source took too much time. Many users relied on
                paid email services that sent notices published in national
                newspapers (at Rs. 3,600/year), but those services still missed
                tenders that appeared on the<strong> PPMO</strong> portal and in{" "}
                <strong>Local Newspapers</strong>.
                <br />
                <br />
                <strong>To solve this</strong>, Bolpatra Nepal was launched with
                a clear goal — bring all tender information into one reliable
                place. From the beginning the team developed both a website and
                a mobile app, introducing features that were not widely
                available in Nepal at the time: users can{" "}
                <strong>Save Interested Tenders</strong>, explore{" "}
                <strong> Community</strong> (sub-contract) opportunities, and
                receive timely alerts. The service was priced affordably at Rs.
                800 per year so it would be accessible to contractors,
                suppliers, and consultants across the country.
                <br />
                <br />
                As the platform grew, Bolpatra Nepal became the first company to
                include tender notices from National Newspapers, Local
                Newspapers, and the PPMO portal in a single feed. Today, the
                platform has evolved beyond aggregation — it now provides full
                <strong> E-Bidding</strong> capabilities. Organizations can
                publish tenders through our system, and contractors can submit
                bids directly online; mobile bidding is now available as well.
                What started as a solution to a personal pain point has grown
                into a service that helps thousands of users access
                opportunities more easily, transparently, and efficiently.
              </Typography>
            </Card>
            <ImageCard sx={{ alignSelf: "center" }} />
          </Row>

          <DividerSpacer />

          {/* Client banner */}
          <Box
            sx={{
              height: { xs: 90, sm: 110, md: 120 },
              width: "100%",
              display: "grid",
              placeItems: "center",
              borderRadius: 2,
              margin: "-30px 0",
              color: "black",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: 18, sm: 20, md: 22 }, fontWeight: 700 }}
            >
              FOR CLIENT
            </Typography>
            <Marquee speed={60}>Hello</Marquee>
          </Box>

          <DividerSpacer />

          {/* Community gallery — responsive tiles */}
          <Row sx={{ mt: -2, bgcolor: "transparent" }}>
            <Card elevation={0} sx={{ width: "88%", p: 2, mx: "auto" }}>
              <Typography sx={{ fontWeight: 700, fontSize: 24 }}>
                Community Involvement & Social Responsibility
              </Typography>
              <Typography
                sx={{ ...JUSTIFY, mt: 1.5, fontSize: 16, lineHeight: 1.8 }}
              >
                <strong>Bolpatra Nepal</strong> believes a healthy procurement
                ecosystem includes caring for the people it touches. As part of
                that belief, the company makes regular donations to social
                organisations across Nepal — including old-age homes, orphan
                care centres and organisations supporting persons with
                disabilities. Rather than spreading resources thinly, Bolpatra
                Nepal chooses one organisation at a time to focus on, providing
                meaningful financial support and material assistance tailored to
                that partner’s needs.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {[photo5, photo2, photo4, photo1, photo3].map((src, i) => (
                  <Card
                    key={i}
                    elevation={0}
                    sx={{
                      flex: {
                        xs: "1 1 100%",
                        sm: "1 1 calc(50% - 16px)",
                        md: "1 1 calc(33.33% - 16px)",
                      },
                      maxWidth: 360,
                      height: { xs: 200, sm: 220, md: 250 },
                      borderRadius: 2,
                      overflow: "hidden",
                      bgcolor: "#f5f5f5",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={src}
                      alt={`Community ${i + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "60% 40%",
                      }}
                    />
                  </Card>
                ))}
              </Box>
            </Card>
          </Row>

          <DividerSpacer />

          {/* === Key Features (Both) — 1 col on mobile, 2 cols on md+ === */}
          <Row sx={{ mt: -1 }}>
            <Card elevation={0} sx={{ width: "88%", p: 2 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 1.5, gap: 1 }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: 24 }}>
                  Key Features
                </Typography>
                {/* <Chip
                  label="Publisher & Bidder"
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: 700 }}
                /> */}
              </Stack>

              <Typography sx={{ ...JUSTIFY, color: "text.secondary", mb: 2 }}>
                Powerful capabilities designed for both sides of
                procurement—publishers and bidders.
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 3,
                  alignItems: "stretch",
                }}
              >
                {/* items */}
                {FEATURES_BOTH.map(({ icon: Icon, title, desc }, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center", // center icon vertically
                      gap: 1.75, // small space between icon & text
                      p: 1.5, // overall padding
                      pl: 2, // space from left box edge
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 2,
                      bgcolor: "background.paper",
                    }}
                  >
                    {/* Enlarged plain vector icon (no background) */}
                    <Icon
                      sx={{
                        fontSize: { xs: 30, sm: 34, md: 36 },
                        flexShrink: 0,
                        lineHeight: 1,
                      }}
                    />

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box sx={{ fontWeight: 700, fontSize: 16, mb: 0.5 }}>
                        {title}
                      </Box>
                      <Box
                        sx={{
                          ...JUSTIFY,
                          color: "text.secondary",
                          fontSize: 14,
                          lineHeight: 1.6,
                        }}
                      >
                        {desc}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Card>
          </Row>
        </PageContainer>
      </div>
    </Box>
  );
}
