import { RecursosBasicosService } from './../shared/services/recursos-basicos.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ImovelStorageService } from '../imovel/shared/imovel-storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Imovel } from '../imovel/shared/imovel.model';
import { AprovadoComponent } from './aprovado.component';

xdescribe(AprovadoComponent.name, () => {
  let component: AprovadoComponent;
  let fixture: ComponentFixture<AprovadoComponent>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;
  let imovelStorageServiceSpy: jasmine.SpyObj<ImovelStorageService>;
  const imovel: Imovel = {
    tipo:"",
    renda:"",
    valorImovel:"",
    valorEntrada:"",
    parcelas:"",
    valorTotalAprovado:0,
    parcelaInicial:0,
  }

  beforeEach(() => {

    locationSpy = jasmine.createSpyObj<Location>(
      "Location",
      ["path"]
    );
    routerSpy = jasmine.createSpyObj<Router>("Router", ["routerState"]);
    imovelStorageServiceSpy = jasmine.createSpyObj<ImovelStorageService>(
      "ImovelStorageService",
      ["getImovel"]
    );

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      declarations: [AprovadoComponent],
      providers: [
        RecursosBasicosService,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ImovelStorageService, useValue: imovelStorageServiceSpy },
        { provide: Imovel, useValue: imovel }
      ]
    });
    fixture = TestBed.createComponent(AprovadoComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('makes expected calls', () => {
    const imovelStorageServiceSpy: ImovelStorageService = fixture.debugElement.injector.get(
      ImovelStorageService
    );
    spyOn(component, 'imprimeTitulo').and.callThrough();
    spyOn(imovelStorageServiceSpy, 'getImovel').and.callThrough();
    fixture.detectChanges();
    component.ngOnInit();
    expect(imovelStorageServiceSpy.getImovel).toHaveBeenCalled();
  });

  it(`#${AprovadoComponent.prototype.imprimeTitulo.name}
      Should trigger imprimeTitulo() when called`, () => {
        component.imprimeTitulo();
        expect(component.imprimeTitulo).toHaveBeenCalled();
      }
  )
});
