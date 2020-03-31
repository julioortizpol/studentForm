import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPersonalFormComponent } from './student-personal-form.component';

describe('StudentPersonalFormComponent', () => {
  let component: StudentPersonalFormComponent;
  let fixture: ComponentFixture<StudentPersonalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPersonalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
