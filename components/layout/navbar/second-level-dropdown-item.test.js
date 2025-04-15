import { render } from "@testing-library/react";
import SecondLevelDropdownItem from "./second-level-dropdown-item";

describe("SecondLevelDropdownItem", () => {
  test("renders without crashing", () => {
    render(<SecondLevelDropdownItem navItemText="Test Item" path="/test" />);
    // screen.debug(); // Uncomment for debugging output if needed
  });
});
