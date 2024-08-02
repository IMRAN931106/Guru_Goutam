import Image_1 from "@/app/assests/Image_1.jpg";
import Image_2 from "@/app/assests/Image_2.jpg";
import Image_3 from "@/app/assests/Image_3.jpg";
import { BiSupport, BiMessage } from "react-icons/bi";
import { LuMailCheck } from "react-icons/lu";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import FooterLogo from "@/app/assests/footer_logo.png";
import { SiPicpay } from "react-icons/si";
import { CourselData, FooterData, NavbarList, OurServicesData, SupportDataItem } from "../types/global";
// import home from "../pages/Services"



export const heading: string = "An End To End IT Solutions for your business need."
export const Smalltext: string = 'We offer end-to-end IT solutions that may be tailored to your company\'s individual requirements for IT agility and flexibility.'
export const paragraphText: string = 'To satisfy the needs of the specific customer, all of our solutions are configurable, compatible, flexible, and adaptable.'

// CrouselData 
export const courselData: CourselData[] = [
    {
        img: Image_1,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_2,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_3,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_1,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_2,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_3,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_1,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_2,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_3,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_1,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_2,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    },
    {
        img: Image_3,
        h1: "IT Infrastructure Management",
        paragraph: "For on-premises enterprises with security Firewall, Network Gateway Solution, Email Solution, File Management, and Internet Connectivity Solution are available."
    }
];

// Support data with icons
export const support_Data: SupportDataItem[] = [
    {
        icon: BiMessage,
        h1: 'Sales',
        paragraph: 'Talk to Our Sales Team',
        link: '+91 80 4166 9955',
    },
    {
        icon: BiSupport,
        h1: 'Support',
        paragraph: 'Talk to our Support/ Service Team',
        link: '+91 80 2242 9955',
    },
    {
        icon: LuMailCheck,
        h1: 'Business Enquiry',
        paragraph: 'Write to us',
        link: 'info@gurugoutam.com',
    }
];

//Footer_Data
export const Footer_Data: FooterData[] = [
    {
        footer_logo: FooterLogo,
        QUICK_LINK: [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "About us",
                url: "/pages/About_Us"
            },
            {
                name: "Support",
                url: "/pages/Support"
            },
        ],
        LEGAL: [
            {
                name: "Terms & conditions",
                url: "/pages/Terms_Conditions"
            },
            {
                name: "Privacy policy",
                url: "/pages/Privacy_Policy"
            },
            {
                name: "Cookie policy",
                url: "/pages/Cookie_Policy"
            },
        ],
        NEWSLETTER: [
            {
                name: "Receive Technical News updates to your Inbox"
            }
        ],
        copyright: "Copyright @2022. Guru Goutam Infotech Pvt Ltd.",
        icons: [
            {
                icons: FaFacebook,
            },
            {
                icons: FaInstagram
            },
            {
                icons: SiPicpay
            }
        ]
    }
]


//Our_Services
export const OUR_SERVICES: OurServicesData[] = [
    {
        sub_heading: "OUR SERVICES",
        heading: "Next-generation IT Services and Solutions",
        rParagraph: "We offer solutions to the most pressing issues that businesses face today.",
        data_Of_Paragraph: [
            {
                Heading: "Computer Hardware Solution",
                Paragraph: "Laptops/Notebooks, Customized/Branded Desktops, Branded Workstations, and Wireless devices are just few of the items we rent out."
            },
            {
                Heading: "Software & Web Development",
                Paragraph: "Our passion is software development, and we enjoy assisting companies in achieving their objectives."
            },
            {
                Heading: "IT Infrastructure Management",
                Paragraph: "Enterprise Network Managed Services Monitoring and administration of your IT infrastructure that is both cost-effective and adaptable."
            },
            {
                Heading: "Enterprise Email Service",
                Paragraph: "Our Managed Enterprise Email, Webhosting, and Storage Services may be able to assist enterprises in achieving safe data transmission."
            },
        ]
    }
]

//  list for navbar

export const navbarList: NavbarList[] = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Services",
        url: "/pages/Services_"
    },
    {
        name: "Who We Are",
        url: "/pages/Who_We_Are"
    },
    {
        name: "Careers",
        url: "/pages/Careers"
    },
    {
        name: "Contact Us",
        url: "/pages/Contact_Us"
    }
];
