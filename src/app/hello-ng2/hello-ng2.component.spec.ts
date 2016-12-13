/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelloNG2Component } from './hello-ng2.component';

describe('HelloNG2Component', () => {
  let component: HelloNG2Component;
  let fixture: ComponentFixture<HelloNG2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloNG2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloNG2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
