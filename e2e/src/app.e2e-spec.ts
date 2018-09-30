import { TitleGeneratorPage } from './app.po';

describe('Title Generator App', () => {
  let page: TitleGeneratorPage;

  beforeEach(() => {
    page = new TitleGeneratorPage();
  });

  it('should display gitlab "source" footer', done => {
    page.navigateTo();
    page.getFooterGitlabLinkText()
      .then(msg => expect(msg).toEqual('source'))
      .then(done, done.fail);
  });
});
