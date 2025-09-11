import { Box, Grid, Typography } from "@mui/material";
import background from "../assets/bg-aboutus.jpg";

const BidderTC = () => {
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
              fontWeight: 400,
              textAlign: "right",
              mt: 55,
            }}
          >
            Terms and Conditions
            <Typography>
              TERMS AND CONDITIONS FOR BIDDER ON BOLPATRA NEPAL
            </Typography>
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
          General
        </Typography>
        <ul>
          <li>
            These terms and conditions (<strong>"Agreement"</strong>) govern the
            use of the Bolpatra Nepal tender portal (<strong>"Portal"</strong>)
            by bidders (<strong>"Bidders"</strong>).
          </li>
          <li>
            By registering on the Portal and submitting a bid, the Bidder agrees
            to be bound by these terms and conditions.
          </li>
          <li>
            The Portal is owned and operated by Bolpatra Nepal and provides a
            platform for Private Businesses, Government Sector & Other
            Organizations to advertise the bids / procurement opportunities.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Bid Submission
        </Typography>
        <ul>
          <li>
            All bids submitted on the Portal must be complete and accurate.
          </li>
          <li>
            Bidders are responsible for ensuring that their bids are submitted
            before the deadline specified on the Portal.
          </li>
          <li>
            Bolpatra Nepal is not responsible for any bids that are not received
            due to technical issues or other reasons beyond its control.
          </li>
          <li>
            Bidders are responsible for any costs associated with preparing and
            submitting their bids.
          </li>
          <li>
            Bids may be rejected if they do not comply with the requirements
            specified in the tender documents or if they contain false or
            misleading information.
          </li>
          <li>
            Our system automatically sends the bidder's company documents to the
            publisher when a bid is submitted.Bidders must complete their
            Bolpatra profile with True and Updated Document before submitting
            any bids.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Awarding Tender
        </Typography>
        <ul>
          <li>
            A tender may not only be awarded based on price, Publishers may also
            consider quality and technical evaluation when selecting a bidder.
          </li>
          <li>
            The Publisher is responsible for evaluating the technical and
            financial proposals of bidders. Choosing bidders and awarding
            tenders is the publisher's responsibility.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Refund
        </Typography>
        <ul>
          <li>
            If Bid fee Refund has to be made after tender cancellation. It's
            Publisher responsibility to make a Refund to bidder in a timely
            manner.
          </li>
          <li>
            Publisher has to refund Bid bond security amount to the Bidder in
            the case of Bid cancellation or after the completion of Bidding
            process.
          </li>
          <li>
            In the event of a violation in the bid process, publishers might not
            refund the bidder's security amount (<strong>Bid Bond</strong>).
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Confidentiality
        </Typography>
        <ul>
          <li>
            Bolpatra Nepal keeps confidential all information obtained through
            the Bidder that is marked as confidential.
          </li>
          <li>
            Bidders shall not use any information obtained through the Portal
            for any purpose other than submitting a bid.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Intellectual Property
        </Typography>
        <ul>
          <li>
            All intellectual property rights in the Portal and its contents are
            owned by Bolpatra Nepal.
          </li>
          <li>
            Bidders may not use any of the intellectual property on the Portal
            for any purpose other than submitting a bid.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Limitation of Liability
        </Typography>
        <ul>
          <li>
            Bolpatra Nepal shall not be liable for any damages arising out of or
            in connection with the use of the Portal, including but not limited
            to direct, indirect, incidental, consequential, or punitive damages.
          </li>
          <li>
            Bidders agree to indemnify and hold Bolpatra Nepal harmless from any
            and all claims, liabilities, damages, and expenses arising out of or
            in connection with their use of the Portal.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Governing Law and Jurisdiction
        </Typography>
        <ul>
          <li>
            This Agreement shall be governed by and construed in accordance with
            the laws of Nepal.
          </li>
          <li>
            Any dispute arising out of or in connection with this Agreement
            shall be subject to the exclusive jurisdiction of the courts of
            Nepal.
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default BidderTC;
