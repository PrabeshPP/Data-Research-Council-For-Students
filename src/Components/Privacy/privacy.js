import React from "react";
import classes from "./privacy.module.css";

export default function PrivacyComponent() {
  return (
    <div className={classes.container}>
      <h1>Privacy Policy</h1>
      <p className={classes.lead}>
        At Data Research Council for Students (DRCFS), we are committed to
        protecting the privacy of our members, including student members located
        around the world. This privacy policy describes how we collect, use, and
        protect personal information collected through our website and other
        platforms.
      </p>
      <h2>Types of Data Collected</h2>
      <div className={classes["type-container"]}>
        <h3>1. Personal Data</h3>
        <p>
          We may collect personal information that is voluntarily provided by
          our members, such as name, email address, and school affiliation. We
          may also collect non-personal information, such as IP address, browser
          type, and device information.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>2. Use of Personal Information</h3>
        <p>
          We may use personal information to communicate with our members, to
          provide services to our members, and to improve our website and other
          platforms. We may also use personal information for research purposes.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>3. Disclosure of Personal Information</h3>
        <p>
          We do not sell or rent personal information to third parties. We may
          disclose personal information to third parties who provide services to
          us, such as website hosting and email services. We may also disclose
          personal information if required by law or if necessary to protect our
          rights or the rights of others.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>4. Security of Personal Information</h3>
        <p>
          We take reasonable measures to protect personal information from
          unauthorized access, disclosure, or misuse. However, no security
          measure can provide absolute protection.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>5. Links to Other Websites</h3>
        <p>
          Our website and other platforms may contain links to third-party
          websites. We are not responsible for the privacy practices of these
          websites.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>6. Children's Privacy</h3>
        <p>
          We do not knowingly collect personal information from children under
          the age of 13. If we become aware that we have collected personal
          information from a child under the age of 13, we will take steps to
          delete the information as soon as possible.
        </p>
      </div>
      <div className={classes["type-container"]}>
        <h3>7. Changes to Privacy Policy</h3>
        <p>
          We may update this privacy policy from time to time. We encourage our
          members to review this policy periodically. If you have any questions
          or concerns about this privacy policy, please contact us at
          mail@drcfs.org
        </p>
      </div>
    </div>
  );
}
