import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#0B6EFD", marginTop: 30}}>
      <footer  class="py-3">
        <ul  class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <p class="nav-link px-2 " style={{color: 'white'}}>Home</p>
          </li>
          <li class="nav-item">
            <p class="nav-link px-2" style={{color: 'white'}}>Features</p>
          </li>
          <li class="nav-item">
            <p class="nav-link px-2" style={{color: 'white'}}>FAQs</p>
          </li>
          <li class="nav-item">
            <p class="nav-link px-2" style={{color: 'white'}}>About</p>
          </li>
        </ul>
        <p class="text-center" style={{color: 'white'}}>© 2021 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;