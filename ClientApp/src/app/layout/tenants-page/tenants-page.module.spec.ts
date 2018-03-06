import { TenantsPageModule } from './tenants-page.module';

describe('TenantsPageModule', () => {
    let tenantsPageModule: TenantsPageModule;

    beforeEach(() => {
        tenantsPageModule = new TenantsPageModule();
    });

    it('should create an instance', () => {
        expect(tenantsPageModule).toBeTruthy();
    });
});
