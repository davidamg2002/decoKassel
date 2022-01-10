import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/decorations", text: "decorations" },
  { id: 3, url: "/cosmetics", text: "cosmetics" },
  { id: 4, url: "/accessories", text: "accessories" },
  { id: 5, url: "/contact", text: "contact" },
  { id: 6, url: "/promo", text: "promo" },
];

const social = [
  { id: 1, url: "https://www.twitter.com", icon: <FaTwitter /> },
  { id: 2, url: "https://www.facebook.com", icon: <FaFacebook /> },
  { id: 3, url: "https://www.linkedin.com", icon: <FaLinkedin /> },
  { id: 4, url: "https://www.instagram.com", icon: <FaInstagram /> },
];

export { links, social };
