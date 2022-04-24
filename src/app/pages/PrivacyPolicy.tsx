import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <Layout backgroundColor="#FCFBFB">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Privacy>
          <div className="header-flex">
            <h1>Privacy Policy</h1>
            <h3>Last updated: April 04, 2022</h3>
          </div>
          <hr />
          <div className="content">
            <div className="section">
              <h4>1. Introduction</h4>
              <p>
                Hello! Welcome to the BwinoHQ Privacy Policy. This policy
                describes BwinoHQ’s policies and procedures on the collection,
                use, and disclosure of Your data when you use BwinoHQ Services
                and tells You about your privacy rights and how the law protects
                you.
              </p>
              <p>
                This Privacy Policy applies to all of our games, websites, user
                accounts, customer and technical support, social media services,
                marketing and advertising, and related services, which we here
                collectively refer to as the Service. The expression Your Data
                is used when referring to personal data that relates to you as
                an identified or identifiable individual.
              </p>
              <p>
                We may periodically update this Privacy Policy by posting a new
                version on{" "}
                <Link to="/privacy-policy">bwinohq.com/privacy-policy</Link>. We
                may also inform you of any changes by other means that are
                appropriate to the significance of the changes prior to the
                change becoming effective and update the Last Updated date at
                the top of this Privacy Policy.
              </p>
              <p>
                It is important that you read this notice before accessing or
                using the Services so that you are aware of how and why we may
                use data relating to you. We encourage you to carefully review
                our <Link to="/terms-of-service">Terms of Service</Link>, which
                govern your use of our Services.
              </p>
            </div>
            <div className="section">
              <h4>2. About us</h4>
              <p>
                We are BwinoHQ Ltd (incorporated and registered in Nigeria) with
                company number 1914572. With regard to activities described in
                this Privacy Policy, BwinoHQ is the data controller. By “data
                controller”, we mean an entity that determines how and why
                personal data is processed.
              </p>
              <p>
                If you have any questions or concerns about any of the matters
                in relation to this Privacy Policy, including to exercise any of
                your rights, we encourage you to reach us by email at{" "}
                <Link to="#">games@bwinohq.com</Link>.
              </p>
            </div>
            <div className="section">
              <h4>3. The data we collect</h4>
              <p>
                We may collect your data when you use the BwinoHQ Services.
                BwinoHQ will not receive, process, or store any of your payment
                details. The information that we collect varies depending on the
                particular BwinoHQ Services used, but this may include:
              </p>
              <h5>3.1. Data you provide us directly</h5>
              <ul>
                <li>
                  Contact information (such as name and email address or phone
                  numbers).
                </li>
                <li>
                  Data you provide in connection with surveys, promotions,
                  sweepstakes, competitions, and other events.
                </li>
                <li>
                  Other data you choose to give us (such as when you participate
                  in our early access programs).
                </li>
                <li>
                  If you contact us (e.g. via email for customer support), we
                  may collect and maintain a record of your contact details and
                  the content of your communications.
                </li>
              </ul>

              <h5>3.2. Data we collect automatically</h5>
              <ul>
                <li>
                  Data about your account and game progress, including in most
                  cases an automatically created internal account ID.
                </li>
                <li>Data we collect with cookies and similar technologies.</li>
              </ul>

              <h5>3.3. Data we collect from our partners</h5>
              <ul>
                <li>
                  Online identifiers such as your device details, IP address,
                  identifiers we assign to your account, or hardware or
                  operating system-based identifiers including your Advertising
                  ID.
                </li>
                <li>
                  Data from platforms that the games run on or data from payment
                  service providers (such as payment verification data).
                </li>
                <li>
                  Data that you have made available to us from a third-party
                  service (such as Facebook) via your privacy settings.
                </li>
              </ul>
            </div>

            <div className="section">
              <h4>4. How your data is used</h4>
              <p>
                We will use your information to run, maintain and improve the
                BwinoHQ Services to provide the BwinoHQ services to you, for our
                legitimate commercial interests, as well as to communicate with
                you (e.g. with newsletters, emails, or push notifications).
              </p>
              <p>
                Our Service is global by nature and your data can therefore be
                transferred to anywhere in the world but within our company only
                where only authorized data analyst or processors will have
                access to the data. Because different countries may have
                different data protection laws than your own country, we take
                steps to ensure adequate safeguards are in place to protect your
                data as explained in this Privacy Policy.
              </p>
              <p>
                Sometimes we may share information with partners in order to run
                our services, but we ensure that our partners are bound by
                confidentiality in the safeguard of the data by striving to
                ensure our partners have the necessary safeguards in place. We
                will never share your data with third parties for their own
                marketing purposes without first obtaining your consent. With
                your consent, we may process your data for additional purposes.
              </p>
            </div>
            <div className="section">
              <h4>5. How long we keep your data</h4>
              <p>
                We will keep your data for as long as necessary to achieve the
                purpose(s) for which it was collected, including to provide you
                with the Services or to comply with any legal, accounting, or
                reporting requirements and to enforce our agreements.
              </p>
            </div>
            <div className="section">
              <h4>6. How we keep your data secure</h4>
              <p>
                In order to help ensure a secure and safe experience with
                BwinoHQ services, we are continuously developing and
                implementing administrative and technical security measures to
                protect your data against accidental or unlawful destruction,
                loss, or alteration as well as unauthorized disclosure or
                access.
              </p>
            </div>
            <div className="section">
              <h4>7. Your rights</h4>
              <p>
                You have certain rights in connection with your personal
                information and how we handle it. If we are processing your
                data, you have the right to:
              </p>
              <ul>
                <li>Access, correct, or have your data deleted.</li>
                <li>
                  You may at any time opt-out from receiving push notifications,
                  marketing emails, and other direct marketing.
                </li>
                <li>
                  Where technically feasible, request a copy of the personal
                  data you have provided to us in a machine-readable format.
                </li>
                <li>
                  Where our processing of your data is based on your consent,
                  you also have the right to withdraw your consent at any time.
                  Please be aware that we may continue processing your data
                  despite your withdrawal of consent if we have a lawful basis
                  for doing so.
                </li>
              </ul>
              <p>
                If you would like to exercise any of these rights or have any
                queries regarding them, please contact {" "}
                <Link to="#">games@bwinohq.com</Link>.
              </p>
            </div>
            <div className="section">
              <h4>8. For children</h4>
              <p>
                Generally, our Services are not directed to children under 13
                (or other age as required by local law), and we do not knowingly
                collect or solicit personal information from, or direct or
                target interest-based advertising to children, or knowingly
                allow such persons to use our Services.
              </p>
              <p>
                If you are under 13 years of age, please do not provide your
                personal data (including your name, address, telephone number,
                or email address) to us or use the Services to make your data
                available to others.
              </p>
              <p>
                If we discover that we hold personal data relating to a user
                under 13 years of age, we will take appropriate measures to
                ensure that we process that data according to the requirements
                of applicable laws and regulations or promptly delete the data
                from our records.
              </p>
              <p>
                If you believe that we might have any information from or about
                a child, please contact <Link to="#">games@bwinohq.com</Link>.
              </p>
            </div>
          </div>
        </Privacy>
      </motion.div>
    </Layout>
  );
};

const Privacy = styled.div`
  padding: 1rem 2rem;
  .header-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    flex-direction: column;
  }
  h1 {
    font-weight: 700;
    font-size: 23px;
    line-height: 36px;
    text-align: center;
    color: #f87d26;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #9e9d9d;
  }
  h4 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #080707;
  }
  h5 {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #080707;
  }
  hr {
    border: 1px solid #c5c5c5;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #080707;
  }
  a {
    color: #e96d16;
  }
  li {
    line-height: 30px;
    font-size: 15px;
  }
  .content {
    max-height: 60vh;
    overflow: scroll;
  }

  @media screen and (min-width: 901px) and (max-width: 1000px) {
    .content {
      max-height: 80vh;
      overflow: scroll;
    }
  }

  @media screen and (min-width: 390px) and (max-width: 900px) {
    .content {
      max-height: 70vh;
      overflow: scroll;
    }
  }

  @media screen and (min-width: 850px) {
    padding: 1rem 10rem;

    .header-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 65px;
      flex-direction: row;
    }

    h1 {
      font-size: 32px;
      line-height: 36px;
    }

    h3 {
      font-size: 18px;
      line-height: 30px;
    }
    h4 {
      font-size: 32px;
      line-height: 36px;
    }
    h5 {
      font-size: 18px;
      line-height: 30px;
    }
    p {
      font-size: 18px;
    }
    li {
      font-size: 18px;
      line-height: 30px;
    }
  }
`;

export default PrivacyPolicy;
