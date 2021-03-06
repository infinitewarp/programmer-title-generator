import { browser, by, element } from 'protractor';

export class TitleGeneratorPage {
  navigateTo() {
    return browser.get('/');
  }

  getFooterGitlabLinkText() {
    return element(by.css('app-title-generator .mastfoot .inner a')).getText();
  }
}
