import {
  LinkdinIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  RightTick,
  Location,
  Android,
  Simple,
  Family,
  Webdevice,
  Network,
} from "./Icon";

// ============================== JOIN COMPANIES ==============================
export const joinCompanies = [
  {
    description: "Ideal for freelancers and solopreneurs",
    rightclick: <RightTick />,
    seat: "1 seat",
    projects: "2 projects",
    priceperseat: "$0",
    billmonth: "free forever",
  },
  {
    description: "Perfect for teams, startups, and growing businesses.",
    rightclick: <RightTick />,
    seat: "Unlimited seats",
    projects: "Unlimited projects",
    priceperseat: "$10.80",
    billmonth: "per seat/month (billed annually)",
  },
];

// ================================ FOOTER ================================
export const footerLink = [
  {
    link: "Help",
  },
  {
    link: "Contact us",
  },
  {
    link: "Found Phone",
  },
];
export const footerSocialLink = [
  {
    socialicon: <LinkdinIcon />,
    link: "https://www.linkedin.com/",
    arialable: "linkdin",
  },
  {
    socialicon: <InstagramIcon />,
    link: "https://www.instagram.com/",
    arialable: "instagram",
  },
  {
    socialicon: <FacebookIcon />,
    link: "https://www.facebook.com/",
    arialable: "facebook",
  },
  {
    socialicon: <TwitterIcon />,
    link: "https://x.com/s",
    arialable: "twitter",
  },
];

//-------------cell-tracker-------------
export const cellTrackerData = [
  {
    svg: <Location />,
    heading: "Instant location lookups",
    para: "Check the location of your registered phones whenever you choose. Add up to 5 phones to your account.",
  },
  {
    svg: <Android />,
    heading: "Android & iPhone compatible",
    para: "Our service works with any Android or iPhone device, and takes just minutes to set up.",
  },
  {
    svg: <Simple />,
    heading: "Simple to use",
    para: "Our service has been designed to be simple to use. Just follow our walkthrough wizard to locate your phone.",
  },
  {
    svg: <Family />,
    heading: "Keep your family safe",
    para: "Keep track of your family using our tools. Know that your children or elderly relatives are safe.",
  },
];
export const worksData = [
  {
    svg: <Webdevice />,
    heading: "Locate the people important to you, from any web device",
    para: "Family will always be number one and keeping them safe has never been more important. Locateaphone.com allows you to keep track of up to 5 mobile phones, providing you with accurate location information from any web enabled device. Keep them safe without being invasive.",
  },
  {
    svg: <Network />,
    heading: "Accurate location info for any phone on any network.",
    para: "Instantly track the location of a mobile phone at any time. No apps, no downloads, Locateaphone.com works with any Android or iPhone device. Locateaphone.com uses a range of different tools to find the location of a phone. Our unique phone location walkthrough process will determine the best tools to use for each situation.",
  },
];
