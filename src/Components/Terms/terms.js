import classes from "./terms.module.css";

export default function TermsComponent() {
  return (
    <div className={classes.container}>
      <h1>Terms and Conditions</h1>
      <p className={classes.lead}>
        Welcome to DRCFS, a student-led data community based in Nepal. By
        becoming a member of DRCFS, you agree to comply with the following terms
        and conditions. Please read these terms carefully before using our
        services.
      </p>
      <div className={classes["type-container"]}>
        <h3>1. Acceptance of Terms and Conditions</h3>
        <p>
          By using our services, you acknowledge and agree to these terms and
          conditions. If you do not agree to these terms, you may not use our
          services
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>2. Membership</h3>
        <p>
          Membership to DRCFS is open to students worldwide who have a passion
          for data and are willing to contribute to the community. Members must
          provide accurate and complete information when registering for our
          services
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>3. Use of Services</h3>
        <p>
          DRCFS provides various services, including but not limited to
          newsletters, events, and online communities, to its members. Members
          agree to use these services for lawful purposes and not to violate any
          applicable laws or regulations. Members are also expected to treat
          fellow members with respect and not to engage in any form of
          harassment, discrimination, or hate speech.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>4. Ownership of Content</h3>
        <p>
          Members own the content they create and share on DRCFS. However,
          members grant DRCFS a non-exclusive, worldwide, royalty-free license
          to use, reproduce, and distribute their content for the purpose of
          promoting and improving the community.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>5. Confidentiality</h3>
        <p>
          Members agree to keep confidential any information that they receive
          from other members or from DRCFS. Members may not disclose such
          information to third parties without the express consent of the party
          that provided the information.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>6. Modification of Terms and Conditions</h3>
        <p>
          DRCFS reserves the right to modify these terms and conditions at any
          time without notice. Members are encouraged to review these terms
          periodically to ensure compliance
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>7. Termination of Membership</h3>
        <p>
          DRCFS reserves the right to terminate a member's membership at any
          time for violating these terms and conditions or for any other reason
          deemed appropriate by DRCFS.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>8. Disclaimer of Warranties</h3>
        <p>
          DRCFS provides its services on an "as is" and "as available" basis.
          DRCFS does not warrant that its services will meet your requirements
          or be uninterrupted, timely, secure, or error-free.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>9. Limitation of Liability</h3>
        <p>
          DRCFS shall not be liable for any indirect, incidental, special, or
          consequential damages arising out of or in connection with the use of
          its services.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>10. Governing Law</h3>
        <p>
          These terms and conditions shall be governed by and construed in
          accordance with the laws of Nepal.
        </p>
      </div>
      <p className={classes.last}>
        If you have any questions or concerns about these terms and conditions,
        please contact us at <span>mail@drcfs.org</span>
      </p>
    </div>
  );
}
