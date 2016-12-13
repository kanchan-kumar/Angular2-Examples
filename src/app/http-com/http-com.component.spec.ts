/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpComComponent } from './http-com.component';

describe('HttpComComponent', () => {
  let component: HttpComComponent;
  let fixture: ComponentFixture<HttpComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
