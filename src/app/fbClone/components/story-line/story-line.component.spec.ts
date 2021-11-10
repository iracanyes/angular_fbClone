import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryLineComponent } from './story-line.component';

describe('StoryLineComponent', () => {
  let component: StoryLineComponent;
  let fixture: ComponentFixture<StoryLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
