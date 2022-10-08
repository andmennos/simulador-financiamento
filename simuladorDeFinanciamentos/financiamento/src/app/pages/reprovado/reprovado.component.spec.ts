import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ReprovadoComponent } from './reprovado.component';
import { Injector } from '@angular/core';

describe(ReprovadoComponent.name, () => {
  let component: ReprovadoComponent;
  let fixture: ComponentFixture<ReprovadoComponent>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    locationSpy = jasmine.createSpyObj<Location>('Location', ['path']);

    await TestBed.configureTestingModule({
      declarations: [ReprovadoComponent],
      providers: [
        ReprovadoComponent,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
