import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import GoogleFontNavItem from "./fonts/googleFontForNavItems";

const ShowUserName = () => {
  const user_details = useSelector((state) => state.userSigning);

  return (
    <div>
      <span>
        <FontAwesomeIcon icon={faUserCircle} color={"#000000"} />
      </span>
      <span style={{ paddingLeft: 4, color: "black" }}>
        <GoogleFontNavItem text={user_details.name} fontfamily={"labelle"} />
      </span>
    </div>
  );
};

export default ShowUserName;
