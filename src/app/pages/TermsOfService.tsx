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
        <Terms>
        <div className="header-flex">
          <h1>Terms of Service</h1>
          <h3>Last updated: April 04, 2022</h3>
        </div>
          <hr />
          <div className="content">
            <div className="section">
              <h4>1. About these terms</h4>
              <p>
                Hello! Welcome to the BwinoHQ Terms of Service. These Terms of
                Service (or “Agreement” for short) explain what you can and
                cannot do with BwinoHQ’s Services (which we explain below).
              </p>
              <p>
                The terms of this agreement govern the relationship between you
                and BwinoHQ Ltd (incorporated and registered in Nigeria) with
                company number 1914572 (hereinafter "BwinoHQ" or "Us" or "We")
                regarding your use of BwinoHQ’s games, websites, and other
                related services (the "Service").
              </p>
              <p>
                Use of the Services is also governed by BwinoHQ’s{" "}
                <Link to="/privacy-policy"> Privacy Policy</Link>, which is
                incorporated by reference. Before accessing or using the
                Service, including browsing any BwinoHQ website or downloading,
                playing, or accessing a game, you must agree to these Terms of
                Service and the{" "}
                <Link to="/privacy-policy"> Privacy Policy</Link>. If you do not
                agree to these terms or any future updated version of them then
                you must not access and/or use, and must cease all access and/or
                use of, any of our Services.
              </p>
              <p>
                You understand that the Service is an evolving one. BwinoHQ
                reserves the right, at its discretion, to change, modify, add or
                remove portions of these Terms of Service by posting a new
                version on{" "}
                <Link to="terms-of-service">bwinohq.com/terms-of-service</Link>.
                We may also inform you of any changes by other means that are
                appropriate to the significance of the changes prior to the
                change becoming effective and update the Last Updated date at
                the top of this agreement.
              </p>
            </div>

            <div className="section">
              <h4>2. Using the Service</h4>
              <p>
                If you accept this Agreement, you represent that you are age 13
                or older. If you are between the ages of 13 and 17 or otherwise
                and you do not have the authority to enter into agreements such
                as these Terms of Service, you represent that your legal
                guardian, or a holder of parental responsibility, has reviewed
                and agreed to these Terms of Service.
              </p>
              <h5>2.1. Your Right to Use the Service</h5>
              <ul>
                <li>
                  Subject to your agreement and continuing compliance with these
                  Terms of Service and any other relevant BwinoHQ policies, you
                  have a non-exclusive, non-transferable, non-sub-licensable,
                  revocable, and limited right to access and use the Service for
                  your own personal, non-commercial entertainment purposes. You
                  agree not to use the Service for any other purpose.
                </li>
                <li>
                  You agree that you have no right or title in or to any content
                  that appears in the Service, including, but not limited to,
                  the Virtual goods or currency appearing in or originating from
                  the Services, whether earned in the Services or purchased from
                  BwinoHQ or third parties.
                </li>
                <li>
                  You are responsible for the internet connection and/or mobile
                  charges that you may incur for accessing and/or using our
                  Services. You should ask your mobile operator or internet
                  service provider if you are unsure what these charges will be
                  before you access and/or use our Services.
                </li>
                <li>
                  There may be times when our Services or any part of them are
                  not available for technical or maintenance-related or other
                  payment instruments reasons, whether on a scheduled or
                  unscheduled basis.
                </li>
                <li>
                  You accept full responsibility for any unauthorized use of the
                  Service by minors. You are responsible for any use of your
                  credit card or other payment instruments (such as Paypal) by
                  minors.
                </li>
              </ul>

              <h5>2.2. User Accounts</h5>
              <ul>
                <li>
                  In order to access the BwinoHQ Services, you may need to
                  create a user account or use an existing account (if you have
                  one). You are responsible for protecting your user account and
                  for your account activities. In particular, keep your account
                  and password secure. In order to protect the BwinoHQ Services,
                  users, and BwinoHQ itself, we reserve the right if necessary
                  to reject any user account if it would breach this Agreement
                  or other applicable rules.
                </li>
                <li>
                  You agree that you will not give your Login Information to
                  anyone else or allow anyone else to use your Login Information
                  or Account. You are solely responsible for maintaining the
                  confidentiality of the Login Information, and you are
                  responsible for all uses thereof, including purchases. BwinoHQ
                  may assume that anyone logging into your Account using your
                  Login Information is either you or someone logging in with
                  your permission.
                </li>
                <li>
                  BwinoHQ reserves the right to delete your Account if BwinoHQ
                  observes no activity by you in relation to the Account for 180
                  days or more. In such event, you may no longer be able to
                  access and/or use any Virtual Content associated with that
                  Account and no refund will be offered to you.
                </li>
                <li>
                  BwinoHQ reserves the right to stop offering and/or supporting
                  the Service or a particular game or part of the Service at any
                  time, at which point your right to use the Service or a part
                  thereof will be automatically terminated. In such an event,
                  BwinoHQ shall not be required to provide refunds, benefits, or
                  other compensation to users in connection with such
                  discontinued Service. Termination of your Account can include
                  disabling your access to the Service or any part thereof
                  including any content you submitted or others submitted.
                </li>
              </ul>

              <h5>2.3. Early Access Services</h5>
              <ul>
                <li>
                Some BwinoHQ Services may be released in alpha, closed beta, open beta, or other pre-release versions before their full commercial release (“Early Access” or “beta” for short). This is usually to test the features, capabilities, and performance of the product.
                </li>
                <li>
                If you access any BwinoHQ Services in beta or other pre-full release versions, you accept that they may not be complete and may not work fully. You accept them “as is”. There may be server/progress resets/other changes during the process. We will not be responsible or liable for these matters (which are inherent to you being able to join in the beta process). Basically: you can get access to cool stuff early, but it might not work fully yet. 
                </li>
                <li>
                We will set the conditions and requirements for your beta access. Providing and maintaining a beta, and who can use a beta, is at our discretion.
                </li>
                <li>
                We will likely ask you to register for the beta. There may be some waiting time depending on the number of people registering, the load on our servers, and other technical aspects.
                </li>
                <li>Betas will be time-limited and we will decide on when to end them and what happens next.</li>
                <li>Between beta versions, we may perform one or more complete server/progress reset(s). After the reset, your account will likely go back to a previous or new state. This may involve a wipe or other change to Virtual Goods or Virtual Currency (we will explain how this will work at the time). No cash refunds will be provided in connection with any reset or change.</li>
                <li>We may change, modify or remove features as part of testing and improving the product.</li>
                <li>If appropriate, we may apply confidentiality restrictions to the beta, which will be notified to you at the time.</li>
                <li>We may ask you to provide feedback on the beta – this is optional (but appreciated!).</li>
                <li>Betas will be provided “as is” without any promises from us or any liability on us if it is not complete or does not work fully or causes issues.</li>
                <li>You must not attempt to ‘sell’ or transfer your access to a beta. It is for you, not anyone else.</li>
                <li>We may issue additional terms regarding BwinoHQ Service betas. We will notify you in advance if so.</li>
              </ul>

              <h5>2.4. Code of Conduct</h5>
              <ul>
                <li>
                  Subject to your agreement and continuing compliance with these
                  Terms of Service and any other relevant BwinoHQ policies, you
                  agree that you will use the BwinoHQ Services for your personal
                  enjoyment and not for any commercial or political purposes.
                </li>
                <li>
                  You will not, under any circumstances use or take part, either
                  directly or indirectly, in the use of any cheats, exploits,
                  automation software, bots, hacks, mods, or any unauthorized
                  third-party software designed to modify or interfere with the
                  Services, any BwinoHQ game or any BwinoHQ game experience.
                </li>
                <li>
                  You will not share, ‘buy’, ‘sell’, -transfer, gift, lend,
                  steal or misappropriate the BwinoHQ Services (including any
                  user accounts or access keys/codes - all of which are our
                  property).
                </li>
                <li>
                  You shall not (or attempt to) purchase, sell, rent or give
                  away your Account, create an Account using a false identity or
                  information, or on behalf of someone other than yourself. If
                  you are concerned that any of this has happened to you,
                  -please contact <Link to="">games@bwinohq.com</Link>.
                </li>
                <li>
                  You shall not use the Service if you have previously been
                  removed by BwinoHQ, or previously been banned from playing any
                  BwinoHQ game.
                </li>
                <li>
                  You shall not use the Service to advertise, solicit, or
                  transmit any commercial advertisements, including chain
                  letters, junk or spam e-mail, or repetitive or misleading
                  messages to anyone.
                </li>
                <li>
                  You shall not use BwinoHQ, the names of any BwinoHQ Services,
                  or other BwinoHQ names or logos, or trademarks for any
                  unauthorized purposes. You shall not do anything in connection with BwinoHQ Services
                  that infringes any copyright, trademark, patent, trade secret,
                  privacy, publicity, or other rights of others, such as images,
                  photographs, sound files, text files, graphics files, and any
                  other material or information.
                </li>
                <li>
                  You will not institute, assist, or become involved in any type
                  of attack, including without limitation distribution of a
                  virus, denial of service attacks upon the Service, or other
                  attempts to disrupt the Service or any other person's use or
                  enjoyment of the Service.
                </li>
                <li>
                  You will not post any information that is abusive,
                  threatening, obscene, defamatory, libelous, or racially,
                  sexually, religiously, or otherwise objectionable or offensive
                  or engage in ongoing toxic behavior, such as by repeatedly
                  posting information on an unsolicited basis.
                </li>
                <li>
                  You will not post any information that contains nudity,
                  excessive violence, or offensive subject matter or that
                  contains a link to such content.
                </li>
                <li>
                  You shall not attempt to, or harass, abuse, harm, or advocate
                  or incite harassment, abuse, or harm of another person, or
                  group, including BwinoHQ employees, including BwinoHQ's
                  customer service representatives.
                </li>
                <li>
                  You will not reverse engineer, decompile, disassemble,
                  decipher or otherwise attempt to derive the source code for
                  any underlying software or other intellectual property used to
                  provide the Service or any BwinoHQ game or to obtain any
                  information from the Service or any BwinoHQ game using any
                  method not expressly permitted by BwinoHQ.
                </li>
                <li>
                  You will not solicit or attempt to solicit Login Information
                  or any other login credentials or personal information from
                  other users of the Service or any BwinoHQ game.
                </li>
                <li>
                  You will not collect or post anyone's private information,
                  including personally identifiable information (whether in
                  text, image, or video form), identification documents, or
                  financial information through the Service.
                </li>
                <li>
                  You will not use any BwinoHQ game for gambling, betting, or
                  any similar activity in which prizes or rewards can be won
                  (directly or indirectly), including betting on the outcome of
                  matches in which you participate as a player, irrespective of
                  whether or not there is a fee or stake involved.
                </li>
                <li>
                  If you have a dispute with one or more users, you release us
                  (and our officers, directors, agents, subsidiaries, joint
                  ventures, and employees) from claims, demands, and damages
                  (actual and consequential) of every kind and nature, known and
                  unknown, arising out of or in any way connected with such
                  disputes.
                </li>
                <li>
                  You must follow any applicable geographic or regional,
                  language, or location-based restrictions, requirements, or
                  rules regarding the BwinoHQ Services.
                </li>
                <li>
                  You will not use our Services in any other way not permitted
                  by these terms or in violation of any applicable law or
                  regulation.
                </li>
                <p>
                  BwinoHQ reserves the right to determine what conduct it
                  considers to be in violation of the rules of use or otherwise
                  outside the intent or spirit of these Terms of Service or the
                  Service itself. BwinoHQ reserves the right to take action as a
                  result, which may include terminating your Account and
                  prohibiting you from using the Service in whole or in part.
                </p>
              </ul>
            </div>

            <div className="section">
              <h4>3. Virtual Goods and Virtual Money</h4>
              <p>
                BwinoHQ may license to you certain virtual goods to be used
                within the Service and which you may purchase with “real world”
                money or which you may earn or redeem via gameplay (“Virtual
                Content“).
              </p>
              <ul>
                <li>
                  You agree that once purchased Virtual Money, Virtual Goods
                  and/or Subscriptions have no monetary value and can never be
                  exchanged for real money, real goods, or real services from us
                  or anyone else.
                </li>
                <li>
                  You agree that Virtual Money, Virtual Goods, and/or
                  Subscriptions are not transferrable to anyone else and you
                  will not transfer or attempt to transfer any Virtual Money,
                  Virtual Goods, and/or Subscriptions to anyone else.
                </li>
                <li>
                  If you buy Virtual Goods and/or Virtual Money, you agree to
                  the pricing, payment, and billing policies applicable to them,
                  as notified to you at the time of purchase (price and
                  availability of Virtual Content are subject to change without
                  notice). You are responsible for ensuring that you have the
                  authorization to use any chosen payment method, which includes
                  obtaining account-holder/parent/guardian approval if
                  applicable. You are responsible for ensuring that this
                  authorization is maintained at all material times.
                </li>
                <li>
                  Subject to the laws of your geographic location and terms of
                  any applicable device/platform via which you access the
                  BwinoHQ Services: all purchases are final and no refunds will
                  be made or returns accepted.
                </li>
                <li>
                  If you ask for your personal data to be deleted as described
                  in BwinoHQ’s <Link to="/privacy-policy">Privacy Policy</Link>,
                  you will permanently forfeit all of your Virtual Content
                  without the right to refund, as BwinoHQ will no longer be able
                  to associate such Virtual Content with you.
                </li>
                <li>
                  BwinoHQ may manage, control, modify or eliminate Virtual
                  Content at any time, with or without notice.
                </li>
              </ul>
            </div>

            <div className="section">
              <h4>4. User Generated Content</h4>
              <p>
                BwinoHQ Services may allow you to create content, including, but
                not limited to, gameplay maps, characters, screenshots, or
                videos of your gameplay (collectively “User Generated Content”).
              </p>
              <p>
                If you do share User Generated Content, then it is at your
                responsibility and risk. We have the right (but not the
                obligation) to check and remove any inappropriate or illegal
                User Generated Content.
              </p>
              <p>
                When you make your User Generated Content available through the
                BwinoHQ Services, you hereby grant BwinoHQ a non-exclusive,
                royalty-free, perpetual, irrevocable, fully transferable, and
                sub-licensable worldwide right and license to use your User
                Generated Content in any way and for any purposes including, but
                not limited to, the right to reproduce, copy, adapt, modify,
                perform, display, publish, broadcast, transmit, or otherwise
                communicate to the public by any current or future means and to
                distribute your User Contributions without any further notice or
                compensation to you of any kind.
              </p>
              <p>
                Where not expressly prohibited by law, you hereby waive any
                moral rights of paternity, publication, reputation, or
                attribution with respect to BwinoHQ’s and other players’ use and
                enjoyment of your User Contributions in connection with the
                Services and related goods and services under applicable law.
                This grant of license to BwinoHQ, and the foregoing waiver of
                any applicable moral rights, survives any termination of this
                agreement.
              </p>
              <p>
                BwinoHQ, its directors, officers, and employees do not accept or
                consider any unsolicited idea or product submissions of any kind
                (e.g. game or other product ideas, stories, screenplays,
                artwork, musical or audiovisual works, concepts, or any other
                creative materials) in any format, by means of any transmission
                (“Unsolicited Content”). Please do not submit any Unsolicited
                Content to BwinoHQ or its directors, officers, or employees.{" "}
              </p>
              <p>
                However, if you submit Unsolicited Content to us, you agree that
                such Unsolicited Content will not be treated as confidential,
                regardless of what you otherwise state in your accompanying
                message. You further agree that such Unsolicited Content may be
                used and exploited by BwinoHQ without compensation to you or any
                third party and you grant BwinoHQ a perpetual, non-exclusive,
                irrevocable, fully-paid, royalty-free, sub-licensable, and
                transferable (in whole or in part) worldwide license to use,
                exploit, reproduce, transmit, amend, display and exhibit
                Unsolicited Content in all current or future media for any
                purpose and to create derivative works based upon the
                Unsolicited Content.
              </p>
              <p>
                Your use of the Services is at your own risk. By using the
                Services, you may be exposed to content or conduct that is
                offensive, indecent, or otherwise not in line with your values.
                BwinoHQ assumes no responsibility for the conduct of other users
                of the Services and assumes no responsibility for monitoring the
                Services for inappropriate content or conduct. BwinoHQ does not,
                and cannot, pre-screen or monitor all content or conduct of
                users.{" "}
              </p>
            </div>
            <div className="section">
              <h4>5. Applicable Law</h4>
              <p>
                You agree that any claim or dispute arising out of or related to
                these Terms of Service, the{" "}
                <Link to="/privacy-policy"> Privacy Policy</Link>, or the
                Service shall be interpreted and governed by the laws currently
                in force in the Federal Republic of Nigeria without regard to
                conflict of law provisions.
              </p>
              <p>
                You and BwinoHQ agree that if any portion of these Terms of
                Service or of the BwinoHQ{" "}
                <Link to="/privacy-policy"> Privacy Policy</Link> is found
                illegal or unenforceable, in whole or in part by any court of
                competent jurisdiction, such provision shall, as to such
                jurisdiction, be ineffective solely to the extent of such
                determination of invalidity or unenforceability without
                affecting the validity or enforceability thereof in any other
                manner or jurisdiction and without affecting the remaining
                provisions of the terms, which shall continue to be in full
                force and effect.
              </p>
              <p>
                These Terms of Service, any supplemental policies, and any
                documents expressly incorporated by reference herein (including
                the BwinoHQ <Link to="/privacy-policy"> Privacy Policy</Link>),
                contain the entire understanding of you and BwinoHQ, and
                supersede all prior understandings of the parties hereto
                relating to the subject matter hereof, whether electronic, oral
                or written, or whether established by custom, practice, policy
                or precedent, between you and us with respect to the Service.
              </p>
              <p>
                You can terminate this Agreement by permanently stopping the use
                of all BwinoHQ Services at any time. Termination will not affect
                already existing rights or obligations of us or you. We may
                cancel or suspend (temporarily or permanently) your access to
                any and/or all of the BwinoHQ Services if you materially breach
                this Agreement, which includes but is not limited to a breach of
                this Agreement which is serious and/or which could cause real
                harm to the BwinoHQ Services, other BwinoHQ Services users,
                BwinoHQ or other matters governed under this Agreement.
              </p>
              <p>
                The failure of BwinoHQ to require or enforce strict performance
                by you of any provision of these Terms of Service or the BwinoHQ{" "}
                <Link to="/privacy-policy"> Privacy Policy</Link> or failure to
                exercise any right under them shall not be construed as a waiver
                or relinquishment of BwinoHQ's right to assert or rely upon any
                such provision or right in that or any other instance.
              </p>
              <p>
                The express waiver by BwinoHQ of any provision, condition, or
                requirement of these Terms of Service or the BwinoHQ{" "}
                <Link to="/privacy-policy"> Privacy Policy</Link> shall not
                constitute a waiver of any future obligation to comply with such
                provision, condition, or requirement.
              </p>
              <p>
                BwinoHQ shall not be liable for any delay or failure to perform
                resulting from Force Majeure. Force Majeure means causes outside
                the reasonable control of BwinoHQ, including without limitation
                any failure to perform hereunder due to unforeseen circumstances
                or cause beyond BwinoHQ's control such as acts of God, war,
                terrorism, riots, embargoes, acts of civil or military
                authorities, fire, floods, accidents, strikes, or shortages of
                transportation facilities, fuel, energy, labor or materials.
              </p>
              <p>
                You and BwinoHQ agree that, regardless of any statute or law to
                the contrary, any claim arising out of or related to the BwinoHQ
                Services must be made within one (1) year after the claim arose;
                otherwise, such claim is permanently barred.
              </p>
              <p>
                We and you agree to resolve all disputes and claims between us
                on an individual basis through binding arbitration (upon giving
                30 days’ notice to begin arbitration), including without
                limitation any claims arising from or relating to this
                Agreement, any part of the relationship between you and us, or
                your use of the BwinoHQ Services governed by the Arbitration and
                Conciliation Act (Chapter 18, Laws of the Federation of Nigeria
                2004) (the “ACA”), which is deemed to incorporate the 1985
                UNCITRAL Model Law on International Commercial Arbitration
                (“UNCITRAL Model Law”).{" "}
              </p>
              <p>
                "Arbitration" is a consensual dispute resolution process where
                both sides present their case to a neutral arbitrator rather
                than a judge or jury. Arbitration is less formal than court
                litigation and review of an arbitrator’s decision by a court is
                limited. To be clear: by choosing arbitration you and we give up
                the right to have any dispute between us heard in court before a
                judge and/or jury.
              </p>
              <p>
                You and we have the legal right to commence legal claims against
                each other if we consider it necessary. Normally we would
                suggest that this dispute resolution period lasts 30 days unless
                exceptional circumstances exist. If you have concerns or issues
                with us, we hope we can resolve them quickly and amicably – you
                can contact us at <Link to="#">games@bwinohq.com</Link>. We and
                you both agree to make reasonable and good faith efforts to
                resolve any dispute between us informally.
              </p>
            </div>
          </div>
        </Terms>
      </motion.div>
    </Layout>
  );
};

const Terms = styled.div`
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
    color: #F87D26;
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
  @media screen and (min-width: 850px){
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
