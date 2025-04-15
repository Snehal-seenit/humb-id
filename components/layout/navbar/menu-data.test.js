import {
  BlogDropdownMenus,
  DemoDropdownMenus,
  ElementsMegaMenu,
  PagesDropdownMenus,
  WhitePaper,
} from "./menu-data";

describe("Menu Data Tests", () => {
  // DemoDropdownMenus
  test("DemoDropdownMenus contains valid menu items", () => {
    expect(Array.isArray(DemoDropdownMenus)).toBe(true);
    DemoDropdownMenus.forEach((item) => {
      expect(item).toHaveProperty("title");
      expect(typeof item.title).toBe("string");
      expect(item).toHaveProperty("path");
      expect(typeof item.path).toBe("string");
    });
  });

  // PagesDropdownMenus
  test("PagesDropdownMenus contains valid menu items", () => {
    expect(Array.isArray(PagesDropdownMenus)).toBe(true);
    PagesDropdownMenus.forEach((item) => {
      expect(item).toHaveProperty("title");
      expect(typeof item.title).toBe("string");
      expect(item).toHaveProperty("path");
      expect(typeof item.path).toBe("string");
    });
  });

  // ElementsMegaMenu
  test("ElementsMegaMenu contains items with submenus", () => {
    expect(Array.isArray(ElementsMegaMenu)).toBe(true);
    ElementsMegaMenu.forEach((menu) => {
      expect(menu).toHaveProperty("title");
      expect(typeof menu.title).toBe("string");
      expect(menu).toHaveProperty("path");
      expect(typeof menu.path).toBe("string");
      expect(menu).toHaveProperty("submenu");
      expect(Array.isArray(menu.submenu)).toBe(true);

      menu.submenu.forEach((subItem) => {
        expect(subItem).toHaveProperty("title");
        expect(typeof subItem.title).toBe("string");
        expect(subItem).toHaveProperty("path");
        expect(typeof subItem.path).toBe("string");
      });
    });
  });

  // WhitePaper
  test("WhitePaper menu is valid", () => {
    expect(Array.isArray(WhitePaper)).toBe(true);
    WhitePaper.forEach((item) => {
      expect(item).toHaveProperty("title");
      expect(typeof item.title).toBe("string");
      expect(item).toHaveProperty("path");
      expect(typeof item.path).toBe("string");
    });
  });

  // BlogDropdownMenus
  test("BlogDropdownMenus contains valid blog menu items", () => {
    expect(Array.isArray(BlogDropdownMenus)).toBe(true);
    BlogDropdownMenus.forEach((item) => {
      expect(item).toHaveProperty("title");
      expect(typeof item.title).toBe("string");
      expect(item).toHaveProperty("path");
      expect(typeof item.path).toBe("string");
    });
  });
});
