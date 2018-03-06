import { ArticlesPageModule } from './articles-page.module';

describe('ArticlesPageModule', () => {
    let articlesPageModule: ArticlesPageModule;

    beforeEach(() => {
        articlesPageModule = new ArticlesPageModule();
    });

    it('should create an instance', () => {
        expect(articlesPageModule).toBeTruthy();
    });
});
