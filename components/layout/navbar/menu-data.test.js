import {
  BlogDropdownMenus,
  ContactDropdownMenus,
  DemoDropdownMenus,
  ElementsMegaMenu,
  PagesDropdownMenus,
  WhitePaper,
} from './menu-data';

describe('menu-data exports', () => {
  test('DemoDropdownMenus has valid entries', () => {
    expect(Array.isArray(DemoDropdownMenus)).toBe(true);
    DemoDropdownMenus.forEach((item) => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('path');
    });
  });

  test('PagesDropdownMenus has valid entries', () => {
    expect(Array.isArray(PagesDropdownMenus)).toBe(true);
    PagesDropdownMenus.forEach((item) => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('path');
    });
  });

  test('ElementsMegaMenu contains submenu arrays with valid structure', () => {
    expect(Array.isArray(ElementsMegaMenu)).toBe(true);
    ElementsMegaMenu.forEach((section) => {
      expect(section).toHaveProperty('title');
      expect(section).toHaveProperty('path');
      expect(Array.isArray(section.submenu)).toBe(true);
      section.submenu.forEach((subitem) => {
        expect(subitem).toHaveProperty('title');
        expect(subitem).toHaveProperty('path');
      });
    });
  });

  test('WhitePaper array is valid', () => {
    expect(Array.isArray(WhitePaper)).toBe(true);
    WhitePaper.forEach((item) => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('path');
    });
  });

  test('BlogDropdownMenus are properly structured', () => {
    expect(Array.isArray(BlogDropdownMenus)).toBe(true);
    BlogDropdownMenus.forEach((item) => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('path');
    });
  });

  test('ContactDropdownMenus have title and path', () => {
    expect(Array.isArray(ContactDropdownMenus)).toBe(true);
    ContactDropdownMenus.forEach((item) => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('path');
    });
  });
});
