import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbancontentComponent } from './kanbancontent.component';

describe('KanbancontentComponent', () => {
  let component: KanbancontentComponent;
  let fixture: ComponentFixture<KanbancontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbancontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbancontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
