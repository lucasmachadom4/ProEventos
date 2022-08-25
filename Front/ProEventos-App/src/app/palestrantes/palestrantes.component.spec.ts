/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PalestranstesComponent } from './palestrantes.component';

describe('PalestranstesComponent', () => {
  let component: PalestranstesComponent;
  let fixture: ComponentFixture<PalestranstesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalestranstesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestranstesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
