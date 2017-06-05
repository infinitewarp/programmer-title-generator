import { browser, by, element } from 'protractor';

export class TitleGeneratorPage {
  navigateTo() {
    return browser.get('/');
  }

  getFooterGtihubLinkText() {
    return element(by.css('app-title-generator .mastfoot .inner a')).getText();
  }
}
