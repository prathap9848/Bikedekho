import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlaunchedComponent } from './newlaunched.component';

describe('NewlaunchedComponent', () => {
  let component: NewlaunchedComponent;
  let fixture: ComponentFixture<NewlaunchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlaunchedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlaunchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
