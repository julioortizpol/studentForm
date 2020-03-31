import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFamiliarInfoComponent } from './student-familiar-info.component';

describe('StudentFamiliarInfoComponent', () => {
  let component: StudentFamiliarInfoComponent;
  let fixture: ComponentFixture<StudentFamiliarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFamiliarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFamiliarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
