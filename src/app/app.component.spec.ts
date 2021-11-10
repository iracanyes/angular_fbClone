import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  /*
   * beforeAll is called once before all spec.
   * Variables defined in the `this` object aren't reset between each spec
   */
  // beforeAll(() => {});

  /*
   * afterAll is called once after all spec (test) described
   * Variables defined in the `this` object aren't reset between each spec
   */
  //afterAll(() => {});

  /*
   * beforeEach is called before each spec (test)
   * Variables defined in `this.` object are reset to empty for the next spec
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fbClone'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fbClone');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('fbClone app is running!');
  });
});
