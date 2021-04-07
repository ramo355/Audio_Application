import React from "react";
import classes from "./Footer.module.css";

// const links = [
//   { to: "https://vk.com/feed", class: "fa-facebook" },
//   { to: "https://www.instagram.com/?hl=ru", class: "fa-instagram" },
//   { to: "https://twitter.com/?lang=ru", class: "fa-twitter" },
//   { to: "https://www.youtube.com/", class: "fa-youtube" },
// ];

// function renderLinks() {
//   return links.map((item, index) => {
//     return (
//       <li key={index}>
//         <i className={item.label} aria-hidden="true" />
//       </li>
//     );
//   });
// }

const Footer = () => (
  <div className={classes.Footer}>
    <div className={classes.Rules}>
      <div>Copyright © 1993-2021 Audio Application</div>
      <div>Политика конфиденциальности</div>
      <div>Лицензионное соглашение</div>
    </div>
    {/* <Icon icons={links}/> */}
  </div>
);

export default Footer;
