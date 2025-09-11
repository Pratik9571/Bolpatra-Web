import { Box, Grid, Typography } from "@mui/material";
import background from "../assets/bg-aboutus.jpg";

const BidderPolicy = () => {
  return (
    <Box
      sx={{ minHeight: "100vh", minWidth: "100vw", fontFamily: "Nunito Sans" }}
    >
      {/* Load Nunito Sans font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      {/* Header / Hero */}
      <Box
        sx={{
          minHeight: 600,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.546), rgba(0, 0, 0, 0.556)), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "flex-end", // right side
          alignItems: "flex-start", // keep content from top, we’ll push title down
          pt: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            pr: { xs: 2, sm: 4, md: 8, lg: 12 },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 1.5,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: 36, md: 56 },
              fontWeight: 800,
              textAlign: "right",
              mt: 55,
            }}
          >
            Bidder Policy
            <Typography>POLICY FOR BIDDERS ON BOLPATRA NEPAL</Typography>
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          minHeight: 500,
          fontFamily: "Nunito Sans",
          padding: "20px 20px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Introduction
        </Typography>
        <br />
        <ul>
          <li>
            Bolpatra Nepal (<strong>"Company"</strong> or <strong>"we"</strong>)
            operates a web-based one-stop procurement portal for various
            activities of Nepal procurement lifecycle (
            <strong>"Website"</strong>).
          </li>
          <li>
            This Policy for Bidders on Bolpatra Nepal (<strong>"Policy"</strong>
            ) sets forth the terms and conditions governing your use of the
            Website to participate in procurement activities.
          </li>
          <li>
            By using our Website to participate in procurement activities, you
            agree to the terms of this Policy.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Eligibility
        </Typography>
        <Typography>
          {" "}
          To be eligible to publish tenders on the Website, you must meet the
          following requirements:
        </Typography>
        <ul>
          <li>
            You must be a legal entity or an individual capable of entering into
            binding contracts.
          </li>
          <li>
            You must be in compliance with all applicable laws and regulations .
          </li>
          <li>
            You must provide accurate and complete information about yourself
            and your business.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Procurement Process
        </Typography>
        <ul>
          <li>
            Procurement activities on the Website are conducted in accordance
            with the rules and procedures set forth in the relevant tender
            documents.
          </li>
          <li>
            You must comply with all the requirements and deadlines set forth in
            the tender documents.
          </li>
          <li>
            We reserve the right to reject any bid that does not comply with the
            tender documents or this Policy.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Confidentiality
        </Typography>
        <ul>
          <li>
            {" "}
            You agree to maintain the confidentiality of all information and
            documents provided to you in connection with tender publishing
            activities on the Website.
          </li>
          <li>
            You agree not to disclose any confidential information to any third
            party, except as required by law or with the prior written consent
            of the Company.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Intellectual Property
        </Typography>
        <ul>
          <li>
            You acknowledge and agree that all intellectual property rights in
            the tender documents and any other materials provided to you in
            connection with procurement activities on the Website are owned by
            the Company or its licensors.
          </li>
          <li>
            You agree not to use, reproduce, or distribute any of the tender
            documents or materials without the prior written consent of the
            Company.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Liability
        </Typography>
        <ul>
          <li>
            We are not responsible for any errors or omissions in the content of
            the tenders or any other materials provided to you in connection
            with tender publishing activities on the Website.
          </li>
          <li>
            We are not liable for any direct, indirect, incidental, special, or
            consequential damages arising out of or in connection with your
            participation in procurement activities on the Website.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Termination
        </Typography>
        <ul>
          <li>
            We reserve the right to terminate your access to the Website and
            tender publishing activities at any time and for any reason.
          </li>
          <li>
            Upon termination, you must immediately cease all use of the Website
            and any materials provided to you in connection with tender
            publishing activities.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Changes to this Policy
        </Typography>
        <ul>
          <li>
            We may update this Policy from time to time. The updated policy will
            be posted on the Website and the effective date will be indicated.
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default BidderPolicy;
