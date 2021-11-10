import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhotoVideoComponent } from './add-photo-video.component';

describe('AddPhotoVideoComponent', () => {
  let component: AddPhotoVideoComponent;
  let fixture: ComponentFixture<AddPhotoVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhotoVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhotoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
