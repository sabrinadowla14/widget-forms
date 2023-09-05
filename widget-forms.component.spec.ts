import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFormsComponent } from './widget-forms.component';

describe('WidgetFormsComponent', () => {
  let component: WidgetFormsComponent;
  let fixture: ComponentFixture<WidgetFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
