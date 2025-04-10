import React from 'react';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import SecondLevelDropdownMenu from "./second-level-dropdown-menu";

export default function DropdownItem({
  navItemText,
  handleCloseMobileMenu,
  submenu,
  path,
}) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
    if (submenu) {
      e.stopPropagation(); // Prevent unnecessary event bubbling if submenu exists
    } else {
      handleCloseMobileMenu(); // Properly close the mobile menu when clicked
    }
  };

  return (
    <li
      className={`sub-menu--item ${submenu ? "nav-item-has-children" : ""}`}
      onClick={handleClick}
    >
      {!submenu ? (
        <Link href={path} legacyBehavior>
          <a className="drop-trigger">
            {navItemText} {submenu && <FontAwesomeIcon icon={faAngleDown} />}
          </a>
        </Link>
      ) : (
        <a href="#" className="drop-trigger">
          {navItemText} {submenu && <FontAwesomeIcon icon={faAngleDown} />}
        </a>
      )}

      {submenu && (
        <SecondLevelDropdownMenu submenu={submenu} isClicked={open} />
      )}
    </li>
  );
}
