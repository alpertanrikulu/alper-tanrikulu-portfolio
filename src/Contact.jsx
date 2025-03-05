import React from "react";
import ContactForm from "./components/ContactForm";
import Form from "./components/Form";
import Space from "./animations/space/Space";
import Alien from "./animations/space/svg/alien.svg";
// import "./components/styles/contact.css";

const Contact = () => {
  return (
    <>
      <section className="pt-30 md:pt-55 text-white px-6 lg:px-20">
        <div className="flex flex-wrap sm:px-15 justify-between">
          {/* <Space /> */}
          <div className="w-full md:w-18/40 bg-midnight p-5 font-roboto flex flex-col justify-around text-md xs:text-lg sm:text-xl lg:text-2xl">
            <div className="flex">
              <div className="w-1/3 opacity-50">Phone:</div>
              <div className="w-2/3">
                <a className="no-underline" href="tel:+905555555555">
                  +90 0541 772 0650
                </a>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3 opacity-50">Email:</div>
              <div className="w-2/3">
                <a
                  className="no-underline"
                  href="mailto:tanriklualper@gmail.com"
                  style={{ wordBreak: "break-all" }}
                >
                  tanriklualper@gmail.com
                </a>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3 opacity-50">Address:</div>
              <div className="w-2/3">
                Osmangazi Mah. Kahraman SK. 15/1 Darica/Kocaeli
              </div>
            </div>
          </div>
          <div className="w-full md:w-21/40">
            <ContactForm />
          </div>
        </div>
      </section>
      <div className="h-25"></div>
      <div className="h-0 p-o m-0 relative hidden md:block -z-1">
        <Space />
      </div>
    </>
  );
};

export default Contact;
