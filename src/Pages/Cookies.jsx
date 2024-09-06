import { Footer } from "./Home";
import Navigation from "../Button/NavHead";

export default function Cookies() {
  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131111] h-lvh w-full object-cover -z-20" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />

      <div className="h-full flex flex-col justify-between">
        <Navigation />

        <section className="text-start px-6 max-w-[1200px] mx-auto my-10 bg-[transparent] rounded-lg">
          <div className="text-orange-400 font-customNoto text-[20px] sm:text-[28px] my-6">
            Cookies Policy
          </div>
          <div className="whitespace-pre-line text-white font-customNoto text-[13px]">
            {`Last updated: September 06, 2024

This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the Free Cookies Policy Generator.

Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.

We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.`}
          </div>

          <div className="text-orange-400 font-customNoto text-[20px] sm:text-[24px] my-6">
            Interpretation and Definitions
          </div>
          <div className="text-orange-100 font-customNoto text-[18px] my-6">
            Interpretation
          </div>
          <div className="whitespace-pre-line text-white font-customNoto text-[13px]">
            {`The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.`}
          </div>
          <div className="text-orange-100 font-customNoto text-[18px] my-6">
            Definitions
          </div>
          <div className="whitespace-pre-line text-white font-customNoto text-[13px]">
            {`For the purposes of this Cookies Policy:

                • Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to Diablo 4 Pit.

                • Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.

                • Website refers to Diablo 4 Pit, accessible from https://diablo4pit.pages.dev/

                • You means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.`}
          </div>

          <div className="text-orange-400 font-customNoto text-[20px] sm:text-[24px] my-6">
            The use of the Cookies
          </div>
          <div className="text-orange-100 font-customNoto text-[18px] my-6">
            Type of Cookies We Use
          </div>
          <div className="whitespace-pre-line text-white font-customNoto text-[13px]">
            {`Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
            
            We use both session and persistent Cookies for the purposes set out below:`}
          </div>

          <div className="whitespace-pre-line text-white font-customNoto text-[13px]">
            {`• Necessary / Essential Cookies

Type: Session Cookies

Administered by: Us

Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.

• Functionality Cookies

Type: Persistent Cookies

Administered by: Us

Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.`}
          </div>

          <div className="text-orange-400 font-customNoto text-[20px] sm:text-[24px] my-6">
            Your Choices Regarding Cookies
          </div>
          <div className="whitespace-pre-line text-white font-customNoto text-[13px]">
            {`If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.

If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.

If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.

• For the Chrome web browser, please visit this page from Google: https://support.google.com/accounts/answer/32050
• For the Internet Explorer web browser, please visit this page from Microsoft: http://support.microsoft.com/kb/278835
• For the Firefox web browser, please visit this page from Mozilla: https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
• For the Safari web browser, please visit this page from Apple: https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac

For any other web browser, please visit your web browser's official web pages.`}
          </div>

          <div className="text-orange-400 font-customNoto text-[20px] sm:text-[24px] my-6">
            More Information about Cookies
          </div>
          <div className="whitespace-pre-line text-white font-customNoto text-[13px]">
            {`You can learn more about cookies: Cookies: What Do They Do?.`}
          </div>
          <div className="text-orange-400 font-customNoto text-[20px] sm:text-[24px] my-6">
            Contact Us
          </div>
          <div className="whitespace-pre-line text-white font-customNoto text-[13px]">
            {`If you have any questions about this Cookies Policy, You can contact us:
            
            • By email: ycaprice23@gmail.com`}
          </div>
        </section>

        <Footer />
      </div>
    </section>
  );
}
