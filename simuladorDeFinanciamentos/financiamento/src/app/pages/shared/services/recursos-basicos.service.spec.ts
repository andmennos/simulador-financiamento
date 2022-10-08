import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RecursosBasicosService } from './recursos-basicos.service';

describe(RecursosBasicosService.name, () => {
  let service: RecursosBasicosService;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;
  beforeEach(() => {

    locationSpy = jasmine.createSpyObj<Location>("Location", ["path"]);
    TestBed.configureTestingModule({
      providers: [
        RecursosBasicosService,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    service = TestBed.inject(RecursosBasicosService);
  });

  it("can load instance", () => {
    expect(service).toBeTruthy();
  });

  it(`#${RecursosBasicosService.prototype.geraTitulo.name}
    Should geraTitulo() is running`, () => {
    const implementacaoPagina:string = "";
    service.tituloPagina = "tituloHome";
    service.geraTitulo(implementacaoPagina);

    expect(service.geraTitulo).toBeTruthy();
  });
});
