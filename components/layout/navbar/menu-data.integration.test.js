import { BlogDropdownMenus, ContactDropdownMenus, DemoDropdownMenus, ElementsMegaMenu, PagesDropdownMenus, WhitePaper } from './menu-data'; // Use lowercase "menu-data"


describe('MenuData Integration Tests', () => {
  test('DemoDropdownMenus should contain correct objects', () => {
    expect(DemoDropdownMenus).toBeInstanceOf(Array);
    expect(DemoDropdownMenus.length).toBeGreaterThan(0);
    
    DemoDropdownMenus.forEach(menu => {
      expect(menu).toHaveProperty('title');
      expect(menu).toHaveProperty('path');
      expect(typeof menu.title).toBe('string');
      expect(typeof menu.path).toBe('string');
    });
  });

  test('PagesDropdownMenus should contain correct objects', () => {
    expect(PagesDropdownMenus).toBeInstanceOf(Array);
    expect(PagesDropdownMenus.length).toBeGreaterThan(0);

    PagesDropdownMenus.forEach(menu => {
      expect(menu).toHaveProperty('title');
      expect(menu).toHaveProperty('path');
      expect(typeof menu.title).toBe('string');
      expect(typeof menu.path).toBe('string');
    });
  });

  test('ElementsMegaMenu should contain correct structure', () => {
    expect(ElementsMegaMenu).toBeInstanceOf(Array);
    expect(ElementsMegaMenu.length).toBeGreaterThan(0);

    ElementsMegaMenu.forEach(menu => {
      expect(menu).toHaveProperty('title');
      expect(menu).toHaveProperty('path');
      expect(menu).toHaveProperty('submenu');
      expect(Array.isArray(menu.submenu)).toBe(true);

      menu.submenu.forEach(subMenu => {
        expect(subMenu).toHaveProperty('title');
        expect(subMenu).toHaveProperty('path');
        expect(typeof subMenu.title).toBe('string');
        expect(typeof subMenu.path).toBe('string');
      });
    });
  });

  test('WhitePaper should contain correct objects', () => {
    expect(WhitePaper).toBeInstanceOf(Array);
    expect(WhitePaper.length).toBeGreaterThan(0);

    WhitePaper.forEach(menu => {
      expect(menu).toHaveProperty('title');
      expect(menu).toHaveProperty('path');
      expect(typeof menu.title).toBe('string');
      expect(typeof menu.path).toBe('string');
    });
  });

  test('BlogDropdownMenus should contain correct objects', () => {
    expect(BlogDropdownMenus).toBeInstanceOf(Array);
    expect(BlogDropdownMenus.length).toBeGreaterThan(0);

    BlogDropdownMenus.forEach(menu => {
      expect(menu).toHaveProperty('title');
      expect(menu).toHaveProperty('path');
      expect(typeof menu.title).toBe('string');
      expect(typeof menu.path).toBe('string');
    });
  });

  test('ContactDropdownMenus should contain correct objects', () => {
    expect(ContactDropdownMenus).toBeInstanceOf(Array);
    expect(ContactDropdownMenus.length).toBeGreaterThan(0);

    ContactDropdownMenus.forEach(menu => {
      expect(menu).toHaveProperty('title');
      expect(menu).toHaveProperty('path');
      expect(typeof menu.title).toBe('string');
      expect(typeof menu.path).toBe('string');
    });
  });
});
