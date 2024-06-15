import { star, shieldTick, truckFast, support, rating } from "../assets/icons";

import {
  bathroom1,
  bathroom2,
  bathroom3,
  kitchen1,
  kitchen2,
  livingroom1,
  livingroom2,
  livingroom3,
  outdoor1,
} from "../assets/images";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export const statistics = [
  { value: "38", label: "Happy Clients", imgURL: support },
  { value: "32", label: "Awards Won", imgURL: star },
  { value: "191", label: "Ready Equipments", imgURL: truckFast },
  { value: "650+", label: "Completed Projects", imgURL: shieldTick },
];

export const services = [
  {
    label: "Kitchen Renovations",
    imgURL: kitchen1,
    desc: "Transform your kitchen into the heart of your home with custom designs and premium materials.",
  },
  {
    label: "Bathroom Remodels",
    imgURL: bathroom1,
    desc: "Create a luxurious oasis with spa-like features and modern amenities.",
  },
  {
    label: "Living Additions",
    imgURL: livingroom1,
    desc: "Expand your living space and enhance functionality with seamless additions tailored to your lifestyle.",
  },
  {
    label: "Exterior Renovations",
    imgURL: outdoor1,
    desc: "Boost curb appeal and enhance outdoor living areas with durable materials and timeless designs.",
  },
];

export const portfolio = [
  {
    id: 1,
    label: "Modern Kitchen Renovation",
    imgURL: kitchen2,
    location: "Wuse",
    desc: "This sleek and stylish kitchen renovation showcases clean lines, minimalist design, and high-end finishes. The open-concept layout maximizes space and functionality, while the sleek cabinetry and integrated appliances create a seamless look. The addition of a large island with waterfall countertops provides ample workspace and casual seating, perfect for entertaining guests or enjoying family meals.",
  },
  {
    id: 2,
    label: "Contemporary Home Addition",
    imgURL: livingroom2,
    location: "Wuse",
    desc: "This contemporary home addition seamlessly blends modern design with traditional architecture. The addition includes a spacious family room with vaulted ceilings, large windows, and a cozy fireplace, creating a bright and inviting space for gatherings and relaxation. The exterior features a harmonious mix of brick and siding, complementing the existing structure while adding visual interest and curb appeal.    ",
  },
  {
    id: 3,
    label: "Contemporary Home Addition",
    imgURL: livingroom3,
    location: "Wuse",
    desc: "This contemporary home addition seamlessly blends modern design with traditional architecture. The addition includes a spacious family room with vaulted ceilings, large windows, and a cozy fireplace, creating a bright and inviting space for gatherings and relaxation. The exterior features a harmonious mix of brick and siding, complementing the existing structure while adding visual interest and curb appeal.    ",
  },
  {
    id: 4,
    label: "Luxurious Bathroom Remodel",
    imgURL: bathroom2,
    location: "Wuse",
    desc: "Transform your bathroom into a luxurious retreat with this elegant remodel. Featuring a spacious walk-in shower with floor-to-ceiling tile, a freestanding soaking tub, and custom-built vanity with marble countertops, this bathroom exudes sophistication and relaxation. The use of neutral colors and subtle accents creates a timeless and serene atmosphere, perfect for unwinding after a long day.",
  },
  {
    id: 5,
    label: "Modern Exterior Renovation",
    imgURL: outdoor1,
    location: "Wuse",
    desc: "Update your home's exterior with this modern renovation. The sleek lines, minimalist landscaping, and bold color palette give this home a fresh and contemporary look. The addition of large windows and a covered porch enhances curb appeal and creates a welcoming entryway. With durable materials and thoughtful design, this exterior renovation is both stylish and functional, perfect for modern living.",
  },
  {
    id: 6,
    label: "Spa-Inspired Master Bathroom",
    imgURL: bathroom3,
    location: "Wuse",
    desc: "Indulge in luxury with this spa-inspired master bathroom remodel. The focal point of the room is the oversized walk-in shower with multiple shower heads, built-in bench, and floor-to-ceiling glass enclosure. The freestanding tub, surrounded by natural stone tiles and accent lighting, creates a serene and relaxing ambiance. With custom-built vanities, heated floors, and integrated smart technology, this bathroom is designed for ultimate comfort and convenience.",
  },
];

export const testimonials = [
  {
    star: rating,
    user: "Maj Muhammad",
    rating: "4.5",
    text: "At [Your Company Name], they truly exceeded our expectations. From the initial consultation to the final reveal, their professionalism and attention to detail were exceptional.",
  },
  {
    star: rating,
    user: "Juliet Obinna",
    rating: "3.5",
    text: "We couldn't be happier with the results of our kitchen remodel. BuildWise listened to our needs and delivered a space that is both beautiful and functional.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  {
    href: "#",
    text: "Head Office - P.O Box 125 Plot “E” MMMMMM Road, KKKKKK Kaduna South – Kaduna",
  },
  { href: "#", text: "Mobile: + 234 123 456 7890" },
  { href: "#", text: "Email: example@hotmail.com" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "ABUJA" },
  { href: "#", text: "P.O. Box No: 5783," },
  { href: "#", text: "Plot NO. 8888, ABCD, Diamon." },
  { href: "#", text: "Phone number: +234 1234567890" },
  { href: "#", text: "KANO" },
  { href: "#", text: "P.O. Box No: 435," },
  { href: "#", text: "Plot NO. 8888, ABCD, Diamon." },
  { href: "#", text: "Phone number: +234 1234567890" },
  { href: "#", text: "LAGOS" },
  { href: "#", text: "Plot NO. 8888, ABCD, Diamon." },
  { href: "#", text: "Phone number: +234 1234567890" },
];
