"use client";

import "./languageDropdown.css";

export default function LanguageDropdown() {
  const selectedOption = {
    name: "English",
    icon: "https://storage.123fakturere.no/public/flags/GB.png",
  };

  return (
    <div style={{ fontWeight: "550", fontSize: "15px" }}>
      <div
        id="dropdownContainer"
        className="flex justify-between cursor-pointer gap-flag-con gap-4"
      >
        <p className=" flag-name">{selectedOption?.name}</p>
        <img
          src={selectedOption?.icon}
          alt=""
          className="h-4 mt-[0.5px] w-[26px] h-[18px] rounded-[4px] icon-flag-nav"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
}
