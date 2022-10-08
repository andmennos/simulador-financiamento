import { RecursosBasicosService } from './../../shared/services/recursos-basicos.service';
import { ImovelStorageService } from './../shared/imovel-storage.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Imovel } from './../shared/imovel.model';
import { ImovelFormComponent } from './imovel-form.component';

describe('ImovelFormComponent', () => {
  let component: ImovelFormComponent;
  let fixture: ComponentFixture<ImovelFormComponent>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;
  let imovelStorageServiceSpy: jasmine.SpyObj<ImovelStorageService>;
  const imovel: Imovel = {
    tipo: '',
    renda: '',
    valorImovel: '',
    valorEntrada: '',
    parcelas: '',
    valorTotalAprovado: 0,
    parcelaInicial: 0,
  };

  beforeEach(() => {
    locationSpy = jasmine.createSpyObj<Location>('Location', ['path']);
    routerSpy = jasmine.createSpyObj<Router>('Router', [
      'routerState',
      'navigate',
    ]);
    imovelStorageServiceSpy = jasmine.createSpyObj<ImovelStorageService>(
      'ImovelStorageService',
      ['setImovel']
    );

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ImovelFormComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        RecursosBasicosService,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ImovelStorageService, useValue: imovelStorageServiceSpy },
        { provide: Imovel, useValue: imovel },
      ],
    });
    fixture = TestBed.createComponent(ImovelFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('makes expected calls', () => {
    spyOn(component, 'imprimeTitulo').and.callThrough();
    component.ngOnInit();
    expect(component.imprimeTitulo).toHaveBeenCalled();
  });

  it(`#${ImovelFormComponent.prototype.validaSimulacao.name}
      Should validate simulation`, () => {
    spyOn(component, 'validaSimulacao').and.callThrough();
    component.validaSimulacao();
    expect(component.validaSimulacao).toHaveBeenCalled();
  });

  it('makes expected calls', () => {
    const routerSpy: Router = fixture.debugElement.injector.get(Router);
    component.rotaParaAprovacaoAprovada();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });

  it('makes expected calls', () => {
    const routerSpy: Router = fixture.debugElement.injector.get(Router);
    component.rotaParaAprovacaoReprovada();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });
});
