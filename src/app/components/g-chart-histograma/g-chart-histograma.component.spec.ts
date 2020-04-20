import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GChartHistogramaComponent } from './g-chart-histograma.component';

describe('GChartHistogramaComponent', () => {
  let component: GChartHistogramaComponent;
  let fixture: ComponentFixture<GChartHistogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GChartHistogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GChartHistogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
