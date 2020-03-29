import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUniversityDataComponent } from './student-university-data.component';

describe('StudentUniversityDataComponent', () => {
  let component: StudentUniversityDataComponent;
  let fixture: ComponentFixture<StudentUniversityDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUniversityDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUniversityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
