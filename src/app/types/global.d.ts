import { StaticImageData } from "next/image";

interface SupportDataItem {
    icon: React.ComponentType<{ size: number }>,
    h1: string,
    paragraph: string,
    link: string,
}

interface CourselData {
    img: StaticImageData,
    h1: string,
    paragraph: string
}

interface FooterData {
    footer_logo: StaticImageData,
    icons: IconsTypeData[],
    copyright: string,
    NEWSLETTER: DataString[],
    QUICK_LINK: NavbarList[],
    LEGAL: NavbarList[]
}


interface DataString {
    name: string
}


interface IconsTypeData {
   icons: React.ComponentType<{size: number}>
//    instagram: React.ComponentType<{size: number}>
//    p: React.ComponentType<{size: number}>
}

interface OurServicesData {
    sub_heading: string,
    heading: string,
    rParagraph: string,
    data_Of_Paragraph: DataOFOurServices[],
}

interface DataOFOurServices {
    Heading: string,
    Paragraph: string
}

interface NavbarList {
    name: string,
    url: string
}

export { SupportDataItem, CourselData, FooterData, OurServicesData, DataOFOurServices , IconsTypeData , DataString , NavbarList };