import React from "react";

const experienceContent = [
  {
    year: "2020 - 2023",
    position: "CEO & Founder",
    compnayName: "Appliance Pro",
    details: `Honed my skills in business development, marketing, and customer service while navigating the dynamic landscape of the appliance repair industry. This experience reinforced my ability to identify opportunities, foster connections, and execute strategies that drive growth.`,
  },
  {
    year: "2016 - 2020",
    position: "CEO & Founder",
    compnayName: "Diamond In-Home Service",
    details: `Built a skilled team of technicians, developed efficient operations, and established a strong customer-oriented reputation. Ensured profitable growth through partnerships with different vendors.
    Implemented effective marketing strategies that enhanced brand visibility, leading to a substantial increase in revenue.`,
  },
  {
    year: "2015 - 2016",
    position: "Office Manager",
    compnayName: "Sammy Home Tek",
    details: `I was responsible for managing the office, scheduling appointments, and dispatching technicians. I made sure technicians had all necessary parts for the day. I also handled all the billing and invoicing.`,
  },
  {
    year: "2012 - 2015",
    position: "Manager",
    compnayName: "Tasty Grill",
    details: `In my role as a Manager, I oversaw the implementation of new software that significantly boosted revenue. I also set up a security system for the restaurant, ensuring data protection and building trust with customers.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
