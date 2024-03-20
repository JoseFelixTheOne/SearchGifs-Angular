import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsPageComponent } from './gifs-page.component';

describe('GifsPageComponent', () => {
  let component: GifsPageComponent;
  let fixture: ComponentFixture<GifsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifsPageComponent]
    });
    fixture = TestBed.createComponent(GifsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
