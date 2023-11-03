import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="relative px-6 mb-8 mt-[6rem]">
        <div
          onClick={() => navigate(-1)}
          className="flex flex-row items-center cursor-pointer"
        >
          <BiArrowBack className="text-sm dark:text-white/70" />
          <p className="text-[#08172E] dark:text-white text-lg font-semibold ml-4 ">
            Back
          </p>
        </div>

        <div className="md:mx-16 xs:ml-5 mt-5">
          <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-3xl font-bold mt-4">
            Terms Of Use
          </h2>

          <p className="text-[#141414]/60 dark:text-white/70 mt-1 text-sm">
            Last updated on September 04, 2022
          </p>
          <div className="border-b-[1px] bg-gray-400 mt-3 mb-7" />

          <div className="mt-6">
            <p className="text-[#141414] mt-1 dark:text-white/70 text-sm">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.We use Your Personal data to provide and improve
              the Service. By using the Service, You agree to the collection and
              use of information in accordance with this Privacy Policy.
            </p>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-2xl font-semibold mt-4">
              Interpretation and Definitions
            </h2>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Interpretation
            </h2>
            <p className="text-[#141414] dark:text-white/70 mt-1 text-sm">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Definitions
            </h2>
            <p className="text-[#141414] dark:text-white/70 mt-1 text-sm">
              For the purposes of this Privacy Policy:
            </p>

            <ul className="ml-8 list-disc">
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Account</span> means a unique
                account created for You to access our Service or parts of our
                Service.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Company</span> (referred to as
                either "the Company", "We", "Us" or "Our" in this Agreement)
                refers to KAWAKORG LLC, Headington Road, Oxford OX3 7FT . For
                the purpose of the GDPR, the Company is the Data Controller.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Cookies</span> are small files
                that are placed on Your computer, mobile device or any other
                device by a website, containing the details of Your browsing
                history on that website among its many uses.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Country</span> refers to: United
                Kingdom
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Data Controller, </span> Data
                Controller, for the purposes of the GDPR (General Data
                Protection Regulation), refers to the Company as the legal
                person which alone or jointly with others determines the
                purposes and means of the processing of Personal Data.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Device</span> means any device
                that can access the Service such as a computer, a cellphone or a
                digital tablet.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Personal Data</span> is any
                information that relates to an identified or identifiable
                individual.
              </li>
              <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                For the purposes of GDPR, Personal Data means any information
                relating to You such as a name, an identification number,
                location data, online identifier or to one or more factors
                specific to the physical, physiological, genetic, mental,
                economic, cultural or social identity.
              </p>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Service</span> refers to the
                Website.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Service Provider</span> means any
                natural or legal person who processes the data on behalf of the
                Company. It refers to third-party companies or individuals
                employed by the Company to facilitate the Service, to provide
                the Service on behalf of the Company, to perform services
                related to the Service or to assist the Company in analyzing how
                the Service is used. For the purpose of the GDPR, Service
                Providers are considered Data Processors.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Usage Data</span> refers to data
                collected automatically, either generated by the use of the
                Service or from the Service infrastructure itself (for example,
                the duration of a page visit).
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Website</span> refers to KawaK,
                accessible from{" "}
                <a href="http://www.kawak.org" className="text-blue">
                  http://www.kawak.org
                </a>
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">You</span> means the individual
                accessing or using the Service, or the company, or other legal
                entity on behalf of which such individual is accessing or using
                the Service, as applicable.
              </li>
              <p className="text-[#141414] my-2 text-sm">
                Under GDPR (General Data Protection Regulation), You can be
                referred to as the Data Subject or as the User as you are the
                individual using the Service.
              </p>
            </ul>

            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-2xl font-semibold my-3">
              Collecting and Using Your Personal Data
            </h2>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              Types of Data Collected
            </h2>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              Personal Data
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul className="ml-8 list-disc">
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Email address
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Usage Data
                </p>
              </li>
            </ul>
            <h2 className="justify-center dark:text-white/70 text-[#08172E] m-auto text-xl font-semibold my-3">
              Usage Data
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              Usage Data is collected automatically when using the Service.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </p>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              Tracking Technologies and Cookies
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service. The
              technologies We use may include:
            </p>
            <ul className="ml-8 list-disc">
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Cookies or Browser Cookies.</span>{" "}
                A cookie is a small file placed on Your Device. You can instruct
                Your browser to refuse all Cookies or to indicate when a Cookie
                is being sent. However, if You do not accept Cookies, You may
                not be able to use some parts of our Service. Unless you have
                adjusted Your browser setting so that it will refuse Cookies,
                our Service may use Cookies.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Flash Cookies.</span> Certain
                features of our Service may use local stored objects (or Flash
                Cookies) to collect and store information about Your preferences
                or Your activity on our Service. Flash Cookies are not managed
                by the same browser settings as those used for Browser Cookies.
                For more information on how You can delete Flash Cookies, please
                read &quot;Where can I change the settings for disabling, or
                deleting local shared objects?&quot; available{" "}
                <a
                  href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_"
                  rel="external nofollow noopener"
                  target="_blank"
                  className="cursor-pointer underline"
                >
                  here
                </a>
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Web Beacons.</span> Certain
                sections of our Service and our emails may contain small
                electronic files known as web beacons (also referred to as clear
                gifs, pixel tags, and single-pixel gifs) that permit the
                Company, for example, to count users who have visited those
                pages or opened an email and for other related website
                statistics (for example, recording the popularity of a certain
                section and verifying system and server integrity).
              </li>
            </ul>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
              Cookies. Persistent Cookies remain on Your personal computer or
              mobile device when You go offline, while Session Cookies are
              deleted as soon as You close Your web browser. Learn more about
              cookies on the{" "}
              <a
                href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking"
                target="_blank"
              >
                Privacy Policies website
              </a>{" "}
              article.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              We use both Session and Persistent Cookies for the purposes set
              out below:
            </p>
            <ul className="ml-8 list-disc">
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">
                    Necessary / Essential Cookies
                  </span>
                </p>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Type: Session Cookies
                </p>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Administered by: Us
                </p>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Purpose: These Cookies are essential to provide You with
                  services available through the Website and to enable You to
                  use some of its features. They help to authenticate users and
                  prevent fraudulent use of user accounts. Without these
                  Cookies, the services that You have asked for cannot be
                  provided, and We only use these Cookies to provide You with
                  those services.
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">
                    Cookies Policy / Notice Acceptance Cookies
                  </span>
                </p>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Type: Persistent Cookies
                </p>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Administered by: Us
                </p>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Purpose: These Cookies identify if users have accepted the use
                  of cookies on the Website.w
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">Functionality Cookies</span>
                </p>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Type: Persistent Cookies
                </p>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Administered by: Us
                </p>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  Purpose: These Cookies allow us to remember choices You make
                  when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website.
                </p>
              </li>
            </ul>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </p>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              Use of Your Personal Data
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="ml-8 list-disc">
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">
                    To provide and maintain our Service
                  </span>
                  , including to monitor the usage of our Service.
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">To manage Your Account:</span>{" "}
                  to manage Your registration as a user of the Service. The
                  Personal Data You provide can give You access to different
                  functionalities of the Service that are available to You as a
                  registered user.
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">
                    For the performance of a contract:
                  </span>{" "}
                  the development, compliance and undertaking of the purchase
                  contract for the products, items or services You have
                  purchased or of any other contract with Us through the
                  Service.
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">To contact You:</span> To
                  contact You by email, telephone calls, SMS, or other
                  equivalent forms of electronic communication, such as a mobile
                  application's push notifications regarding updates or
                  informative communications related to the functionalities,
                  products or contracted services, including the security
                  updates, when necessary or reasonable for their
                  implementation.
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">To provide You</span> with news,
                  special offers and general information about other goods,
                  services and events which we offer that are similar to those
                  that you have already purchased or enquired about unless You
                  have opted not to receive such information.
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">To manage Your requests:</span>{" "}
                  To attend and manage Your requests to Us.
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">For business transfers:</span>{" "}
                  We may use Your information to evaluate or conduct a merger,
                  divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of Our assets, whether
                  as a going concern or as part of bankruptcy, liquidation, or
                  similar proceeding, in which Personal Data held by Us about
                  our Service users is among the assets transferred.
                </p>
              </li>
              <li>
                <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
                  <span className="font-medium">For other purposes</span>: We
                  may use Your information for other purposes, such as data
                  analysis, identifying usage trends, determining the
                  effectiveness of our promotional campaigns and to evaluate and
                  improve our Service, products, services, marketing and your
                  experience.
                </p>
              </li>
            </ul>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              We may share Your personal information in the following
              situations:
            </p>
            <ul className="ml-8 list-disc">
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">With Service Providers:</span> We
                may share Your personal information with Service Providers to
                monitor and analyze the use of our Service, to contact You.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">For business transfers:</span> We
                may share or transfer Your personal information in connection
                with, or during negotiations of, any merger, sale of Company
                assets, financing, or acquisition of all or a portion of Our
                business to another company.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">With Affiliates:</span> We may
                share Your information with Our affiliates, in which case we
                will require those affiliates to honor this Privacy Policy.
                Affiliates include Our parent company and any other
                subsidiaries, joint venture partners or other companies that We
                control or that are under common control with Us.
              </li>
              <li className="text-[#141414] dark:text-white/70  my-2 text-sm">
                <span className="font-medium">With business partners:</span> We
                may share Your information with Our business partners to offer
                You certain products, services or promotions.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">With other users:</span> when You
                share personal information or otherwise interact in the public
                areas with other users, such information may be viewed by all
                users and may be publicly distributed outside.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">With Your consent</span>: We may
                disclose Your personal information for any other purpose with
                Your consent.
              </li>
            </ul>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Retention of Your Personal Data
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </p>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Transfer of Your Personal Data
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </p>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-2xl font-semibold my-3">
              Disclosure of Your Personal Data
            </h2>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Business Transactions
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Law enforcement
            </h2>
            <p className="text-[#141414] dark:text-white/70  my-2 text-sm">
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Other legal requirements
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul className="ml-8 list-disc">
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                Comply with a legal obligation
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                Protect and defend the rights or property of the Company
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                Protect against legal liability
              </li>
            </ul>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              Security of Your Personal Data
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              GDPR Privacy
            </h2>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              Legal Basis for Processing Personal Data under GDPR
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              We may process Personal Data under the following conditions:
            </p>
            <ul className="ml-8 list-disc">
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Consent:</span> You have given
                Your consent for processing Personal Data for one or more
                specific purposes.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Performance of a contract:</span>{" "}
                Provision of Personal Data is necessary for the performance of
                an agreement with You and/or for any pre-contractual obligations
                thereof.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Legal obligations:</span>{" "}
                Processing Personal Data is necessary for compliance with a
                legal obligation to which the Company is subject.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Vital interests:</span> Processing
                Personal Data is necessary in order to protect Your vital
                interests or of another natural person.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Public interests:</span>{" "}
                Processing Personal Data is related to a task that is carried
                out in the public interest or in the exercise of official
                authority vested in the Company.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Legitimate interests:</span>{" "}
                Processing Personal Data is necessary for the purposes of the
                legitimate interests pursued by the Company.
              </li>
            </ul>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              In any case, the Company will gladly help to clarify the specific
              legal basis that applies to the processing, and in particular
              whether the provision of Personal Data is a statutory or
              contractual requirement, or a requirement necessary to enter into
              a contract.
            </p>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Your Rights under the GDPR
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              The Company undertakes to respect the confidentiality of Your
              Personal Data and to guarantee You can exercise Your rights.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              You have the right under this Privacy Policy, and by law if You
              are within the EU, to:
            </p>
            <ul className="ml-8 list-disc">
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">
                  Request access to Your Personal Data.
                </span>{" "}
                The right to access, update or delete the information We have on
                You. Whenever made possible, you can access, update or request
                deletion of Your Personal Data directly within Your account
                settings section. If you are unable to perform these actions
                yourself, please contact Us to assist You. This also enables You
                to receive a copy of the Personal Data We hold about You.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">
                  Request correction of the Personal Data that We hold about
                  You.
                </span>{" "}
                You have the right to have any incomplete or inaccurate
                information We hold about You corrected.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">
                  Object to processing of Your Personal Data.
                </span>{" "}
                This right exists where We are relying on a legitimate interest
                as the legal basis for Our processing and there is something
                about Your particular situation, which makes You want to object
                to our processing of Your Personal Data on this ground. You also
                have the right to object where We are processing Your Personal
                Data for direct marketing purposes.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">
                  Request erasure of Your Personal Data.
                </span>{" "}
                You have the right to ask Us to delete or remove Personal Data
                when there is no good reason for Us to continue processing it.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">
                  Request the transfer of Your Personal Data.
                </span>{" "}
                We will provide to You, or to a third-party You have chosen,
                Your Personal Data in a structured, commonly used,
                machine-readable format. Please note that this right only
                applies to automated information which You initially provided
                consent for Us to use or where We used the information to
                perform a contract with You.
              </li>
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                <span className="font-medium">Withdraw Your consent.</span> You
                have the right to withdraw Your consent on using your Personal
                Data. If You withdraw Your consent, We may not be able to
                provide You with access to certain specific functionalities of
                the Service.
              </li>
            </ul>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Exercising of Your GDPR Data Protection Rights
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              You may exercise Your rights of access, rectification,
              cancellation and opposition by contacting Us. Please note that we
              may ask You to verify Your identity before responding to such
              requests. If You make a request, We will try our best to respond
              to You as soon as possible.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              You have the right to complain to a Data Protection Authority
              about Our collection and use of Your Personal Data. For more
              information, if You are in the European Economic Area (EEA),
              please contact Your local data protection authority in the EEA.
            </p>
            <h2 className="justify-center dark:text-white text-[#08172E] m-auto text-xl font-semibold my-3">
              Children's Privacy
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </p>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              Links to Other Websites
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We spanly advise You to
              review the Privacy Policy of every site You visit.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              Changes to this Privacy Policy
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
            <h2 className="justify-center text-[#08172E] dark:text-white m-auto text-xl font-semibold my-3">
              Contact Us
            </h2>
            <p className="text-[#141414] dark:text-white/70 my-2 text-sm">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul className="ml-8 list-disc">
              <li className="text-[#141414] dark:text-white/70 my-2 text-sm">
                By email:{" "}
                <a
                  href="/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="0764686973666473476c6670666c29687560"
                >
                  [email&#160;protected]
                </a>
              </li>
            </ul>
            <script
              data-cfasync="false"
              src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
            ></script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
