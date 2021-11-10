import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbCloneComponent } from './fb-clone.component';

describe('FbCloneComponent', () => {
  let component: FbCloneComponent;
  let fixture: ComponentFixture<FbCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbCloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
