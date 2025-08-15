import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        height: "355px",
        padding: "1rem",
        color: "black",
        boxSizing: "border-box",
        display: "flex",
        gap: "2rem",
      }}
    >
      <section style={{ display: "flex", flexDirection: "column" }}>
        <img
          src="/Images/Logo.svg"
          alt="Logo"
          style={{ height: "22px", width: "150px" }}
        />
        <span>
          <Typography variant="subtitle1" gutterBottom>
            Best Tender Notice app in Nepal. Get access to over 200+ daily
            <br />
            tender related notices from National & Local Newspaper & PPMO
          </Typography>
        </span>
      </section>

      <section>
        <span>Name</span>
      </section>

      <span>Footer</span>
    </footer>
  );
};

export default Footer;
