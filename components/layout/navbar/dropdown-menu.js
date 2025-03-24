import { v4 as uuidv4 } from "uuid";
import DropdownItem from "./dropdown-item";
export default function DropdownMenu({
  isOpenDropDown,
  handleCloseMobileMenu,
  menuItems,
}) {
  return (
    <ul className={`sub-menu ${isOpenDropDown ? "active" : ""}`} id="submenu-2">
      {menuItems?.length &&
        menuItems.map((item) => (
          <DropdownItem
            handleCloseMobileMenu={handleCloseMobileMenu} // Pass the function here
            navItemText={item.title}
            path={item.path}
            key={uuidv4()}
            submenu={item.submenu}
          />
        ))}
    </ul>
  );
}
