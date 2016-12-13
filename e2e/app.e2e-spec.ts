import { Angular2SampleExamplesPage } from './app.po';

describe('angular2-sample-examples App', function() {
  let page: Angular2SampleExamplesPage;

  beforeEach(() => {
    page = new Angular2SampleExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
