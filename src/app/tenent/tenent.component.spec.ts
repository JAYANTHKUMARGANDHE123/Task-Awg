import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenentComponent } from './tenent.component';

describe('TenentComponent', () => {
  let component: TenentComponent;
  let fixture: ComponentFixture<TenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
