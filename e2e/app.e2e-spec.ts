import { Angular2HNPage } from './app.po';

describe('angular2-hn App', () => {
  let page: Angular2HNPage;

  beforeEach(() => {
    page = new Angular2HNPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
