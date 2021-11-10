import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPostVisibilityComponent } from './select-post-visibility.component';

describe('SelectPostVisibilityComponent', () => {
  let component: SelectPostVisibilityComponent;
  let fixture: ComponentFixture<SelectPostVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPostVisibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPostVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
