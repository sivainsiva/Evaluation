import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { LeftbarComponent } from './leftbar.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LeftbarComponent,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [SidenavOpenCloseExample],
  declarations: [SidenavOpenCloseExample],
  bootstrap: [SidenavOpenCloseExample],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})

describe('LeftbarComponent', () => {
  let component: LeftbarComponent;
  let fixture: ComponentFixture<LeftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
