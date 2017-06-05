import { TitlegenAngularPage } from './app.po';

describe('titlegen-angular App', () => {
  let page: TitlegenAngularPage;

  beforeEach(() => {
    page = new TitlegenAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
