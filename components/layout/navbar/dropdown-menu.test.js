import { render } from "@testing-library/react";
import React from "react";
import DropdownMenu from "./dropdown-menu";

describe("DropdownMenu unit test", () => {
  test("renders without crashing", () => {
    render(<DropdownMenu menuItems={[]} isOpenDropDown={false} handleCloseMobileMenu={() => {}} />);
    // Optionally debug or assert
    // screen.debug();
  });
});
