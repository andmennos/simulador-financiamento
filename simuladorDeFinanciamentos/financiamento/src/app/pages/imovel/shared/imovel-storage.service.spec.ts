import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Imovel } from "./imovel.model";
import { ImovelStorageService } from "./imovel-storage.service";

describe(ImovelStorageService.name, () => {
  let fixture: ComponentFixture<ImovelStorageService>;
  let service: ImovelStorageService;
  let setImovelSpy: jasmine.SpyObj<ImovelStorageService>;
  let imovel: Imovel;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        ImovelStorageService],
     });
    service = TestBed.inject(ImovelStorageService);
  });

  it(`#${ImovelStorageService.prototype.setImovel.name}
    Should return Imovel when called`, () => {
      service.setImovel(imovel);
      expect(service.getImovel()).toHaveBeenCalled;
  });
});
