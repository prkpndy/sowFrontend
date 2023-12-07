import { NavLink as Link } from "react-router-dom";

import LanguageDropdown from "../../LanguageDropdown/LanguageDropdown";
// import MobileMenu from "./MobileMenu";

import "./styles/dashNavbar.css";

export default function DashNavbar({ translatedData }) {
  return (
    <nav className="dashnav">
      <header className="w-[75%] m-auto py-4">
        <section className="flex place-content-between">
          <>
            {translatedData?.price_list?.user_name && (
              <div className="flex gap-2 user-details">
                <Link href={"/dashboard"}>
                  <img
                    src={translatedData?.price_list?.user_profile_pic}
                    alt={translatedData?.price_list?.user_name}
                    className="h-14 rounded-[50%] "
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                      border: "1.5px solid #fff",
                    }}
                  />
                </Link>
                <div className="my-3">
                  <p className="text-white text-[17px]">
                    {translatedData?.price_list?.user_name}
                  </p>
                  <div className="-mt-1">
                    <p className="text-white text-[12px]">
                      {translatedData?.price_list?.user_address}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
          {/* <MobileMenu /> */}
          <div className="my-5 text-white">
            <LanguageDropdown />
          </div>
        </section>
      </header>
    </nav>
  );
}
