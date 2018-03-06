import { UploadPageModule } from './upload-page.module';

describe('UploadPageModule', () => {
    let uploadPageModule: UploadPageModule;

    beforeEach(() => {
        uploadPageModule = new UploadPageModule();
    });

    it('should create an instance', () => {
        expect(uploadPageModule).toBeTruthy();
    });
});
