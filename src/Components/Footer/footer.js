import classes from "./footer.module.css";
import FooterDescription from "./FooterDesc";
import FooterCompany from "./FooterCompany";
import FooterOtherLinks from "./OtherLinks";
import FooterContacts from "./FooterContacts";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <FooterDescription />
      <FooterCompany />
      <FooterOtherLinks />
      <FooterContacts />
    </footer>
  );
};

export default Footer;
