import { RecursosBasicosService } from './../../shared/services/recursos-basicos.service';
import { ProponenteService } from '../shared/proponente.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Proponente } from '../shared/proponente.model';
import { ProponenteFormComponent } from './proponente-form.component';

describe(ProponenteFormComponent.name, () => {
  let component: ProponenteFormComponent;
  let fixture: ComponentFixture<ProponenteFormComponent>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;
  let proponente: jasmine.SpyObjPropertyNames<Proponente>;
  const proponenteSpy = jasmine.createSpyObj('ProponenteService', ['model']);

  beforeEach(() => {
    locationSpy = jasmine.createSpyObj<Location>('Location', ['path']);
    routerSpy = jasmine.createSpyObj<Router>('Router', ['routerState']);

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProponenteFormComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        RecursosBasicosService,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ProponenteService, useValue: proponenteSpy },
        { provide: Proponente, useValue: proponente },
      ],
    });
    fixture = TestBed.createComponent(ProponenteFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`modelo has default value`, () => {
    expect(component.modelo).toEqual(Proponente);
  });

  it(`#${ProponenteFormComponent.prototype.botaoSalvar.name}
    makes expected calls`, () => {
    const locationStub: Location = fixture.debugElement.injector.get(Location);

    spyOn(component, 'botaoSalvar').and.callThrough();
    component.botaoSalvar();
    component.rota = '';
    fixture.detectChanges();
    component.rota = '';
    expect(locationStub.path).toHaveBeenCalled();
  });

  it(`#${ProponenteFormComponent.prototype.criaRotaImovel.name}
    Should create rotaImovel`, () => {
    spyOn(component, 'criaRotaImovel').and.callThrough();
    component.criaRotaImovel();
    component.rota = '';
    fixture.detectChanges();
    expect(component.criaRotaImovel).toBeTruthy();
  });
});
