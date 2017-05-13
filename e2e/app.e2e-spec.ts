import { KmErpPage } from './app.po';

describe('km-erp App', () => {
  let page: KmErpPage;

  beforeEach(() => {
    page = new KmErpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
