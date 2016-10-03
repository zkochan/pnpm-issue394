import { Issue394Page } from './app.po';

describe('issue394 App', function() {
  let page: Issue394Page;

  beforeEach(() => {
    page = new Issue394Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
