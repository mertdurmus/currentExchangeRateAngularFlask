import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcurrenciesComponent } from './showcurrencies.component';

describe('ShowcurrenciesComponent', () => {
  let component: ShowcurrenciesComponent;
  let fixture: ComponentFixture<ShowcurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcurrenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
