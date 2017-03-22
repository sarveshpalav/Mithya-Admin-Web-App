import { MithyaPage } from './app.po';

describe('mithya App', () => {
  let page: MithyaPage;

  beforeEach(() => {
    page = new MithyaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
