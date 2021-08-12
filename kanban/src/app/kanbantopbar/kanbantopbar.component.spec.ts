import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbantopbarComponent } from './kanbantopbar.component';

describe('KanbantopbarComponent', () => {
  let component: KanbantopbarComponent;
  let fixture: ComponentFixture<KanbantopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbantopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbantopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
