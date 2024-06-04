import {
  LinkdinIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  RightTick,
} from "./Icon";

// ============================== JOIN COMPANIES ==============================
export const joinCompanies = [
  {
    description: "Ideal for freelancers and solopreneurs",
    rightclick: <RightTick />,
    seat: "1 seat",
    projects: "2 projects",
    billperseat: "$0",
    billmonth: "free forever",
  },
  {
    description: "Perfect for teams, startups, and growing businesses.",
    rightclick: <RightTick />,
    seat: "Unlimited seats",
    projects: "Unlimited projects",
    billperseat: "$10.80",
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
