import React from "react";
import whatsup from "../../assets/whatsapp.png";
const Whatsup = () => {
  return (
    <div className="what">
      <a href="https://wa.me/8801812959878" target="_blank">
        <img
          src={whatsup}
          class="rounded-circle   position-fixed bottom-0 end-0 me-5 mb-5"
          alt="img"
        />
      </a>
    </div>
  );
};

export default Whatsup;
