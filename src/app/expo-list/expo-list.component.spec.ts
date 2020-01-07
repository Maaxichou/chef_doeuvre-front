import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoListComponent } from './expo-list.component';

describe('ExpoListComponent', () => {
  let component: ExpoListComponent;
  let fixture: ComponentFixture<ExpoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
