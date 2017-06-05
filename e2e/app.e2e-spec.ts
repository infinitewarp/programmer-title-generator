import { TitleGeneratorPage } from './app.po';

describe('Title Generator App', () => {
  let page: TitleGeneratorPage;

  beforeEach(() => {
    page = new TitleGeneratorPage();
  });

  it('should display github "source" footer', done => {
    page.navigateTo();
    page.getFooterGtihubLinkText()
      .then(msg => expect(msg).toEqual('source'))
      .then(done, done.fail);
  });
});
