import { AngularSimpleChatPage } from './app.po';

describe('angular-simple-chat App', () => {
  let page: AngularSimpleChatPage;

  beforeEach(() => {
    page = new AngularSimpleChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
