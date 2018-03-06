import { ArticlePageModule } from './article-page.module';

describe('ArticlePageModule', () => {
    let articlePageModule: ArticlePageModule;

    beforeEach(() => {
        articlePageModule = new ArticlePageModule();
    });

    it('should create an instance', () => {
        expect(articlePageModule).toBeTruthy();
    });
});
