import { Box, Grid, Typography } from "@mui/material";
import background from "../assets/bg-aboutus.jpg";

const PrivacyPolicy = () => {
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
            Company Policy
            <Typography>PRIVACY POLICY FOR BOLPATRA NEPAL</Typography>
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          //   backgroundColor: "beige",
          minHeight: 500,
          fontFamily: "Nunito Sans",
          padding: "20px 20px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Introduction
        </Typography>

        <ul>
          <li>
            <strong>Bolpatra Nepal</strong> (<strong>"Company"</strong> or{" "}
            <strong>"we"</strong>) is committed to protecting the privacy of its
            users (<strong>"Bidders"</strong> or <strong>"Publisher"</strong>).
          </li>
          <li>
            This Privacy Policy explains how we collect, use, and disclose
            information from and about our Users, including personal
            information.
          </li>
          <li>
            By using our website, bolpatranepal.com (<strong>"Website"</strong>)
            or any services provided by Bolpatra Nepal, you agree to the terms
            of this Privacy Policy.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Information We Collect
        </Typography>
        <ul>
          <li>
            Personal Information. We may collect personal information from
            Users, such as name, email address, phone number, and other official
            information & Documents, when Users register for an account or use
            certain features of the Website.
          </li>
          <li>
            Usage Information. We may collect usage information about Users,
            including IP address, browser type, operating system, pages viewed,
            and the time and date of visits to the Website.
          </li>
          <li>
            Cookies. We may use cookies, web beacons, and other similar
            technologies to collect information about Users and their usage of
            the Website.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          How we use Information
        </Typography>
        <Typography>
          We may use the information we collect for the following purposes:
        </Typography>
        <ul>
          <li> To provide and improve our services and Website.</li>
          <li> To respond to User inquiries and requests.</li>
          <li>To personalize User experience on the Website.</li>
          <li>To send email and messages to Users.</li>
          <li>To enforce our policies and comply with legal requirements.</li>
        </ul>
        <Typography>
          We may also use de-identified information or aggregate information for
          research, statistical analysis, and other purposes.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          How we share Information
        </Typography>
        <ul>
          <li>
            We may share information with third-party service providers who
            perform services on our behalf, such as hosting, Server, Cloud
            Storage and other services.
          </li>
          <li>
            We may disclose information in response to a subpoena, court order,
            or other legal requirement, or to protect our rights or the rights
            of others.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Data Security
        </Typography>
        <ul>
          <li>
            We take reasonable measures to protect the information we collect
            from and about Users from unauthorized access, disclosure,
            alteration, and destruction.
          </li>
          <li>
            However, no data transmission or storage system can be guaranteed to
            be 100% secure. Users are responsible for maintaining the
            confidentiality of their account information and password.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Your Choices
        </Typography>
        <ul>
          <li>
            Users may choose to opt-out of receiving messages or email from us
            by following the unsubscribe option to our support team.
          </li>
          <li>
            Users may also choose to disable cookies in their browser settings,
            but this may affect their ability to use certain features of the
            Website.
          </li>
          <li>
            Users have the right to request that their account and any
            associated data acquired by our website be deleted. Users can
            initiate the account deletion procedure by sending an email to our
            administration at <strong>info@bolpatranepal.com</strong> requesting
            the deletion of their account and personal information or visit page
            Request Account Deletion.
          </li>
          <li>
            When we receive a valid deletion request, we shall take reasonable
            steps to remove the User's account and any related personal
            information from our active databases. Please keep in mind that
            certain data may be retained in our backups or archives for a
            limited time as required by relevant legislation or for legitimate
            business purposes.
          </li>
          <li>
            Users should be informed that canceling their account may result in
            the loss of access to certain Bolpatra Nepal features and services.
            Furthermore, some information may be maintained in aggregated or
            de-identified form that does not directly identify the User.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Children's Privacy
        </Typography>
        <ul>
          <li>
            Our Website and services are not intended for children under the age
            of 13. We do not knowingly collect personal information from
            children under the age of 13.
          </li>
        </ul>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Changes to this Privacy Policy
        </Typography>
        <ul>
          <li>
            We may update this Privacy Policy from time to time. The updated
            policy will be posted on the Website and the effective date will be
            indicated.
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default PrivacyPolicy;
