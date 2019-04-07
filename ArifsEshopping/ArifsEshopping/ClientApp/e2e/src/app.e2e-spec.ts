// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';

describe('ArifsEshopping App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display application title: ArifsEshopping', () => {
        page.navigateTo();
        expect(page.getAppTitle()).toEqual('ArifsEshopping');
    });
});
