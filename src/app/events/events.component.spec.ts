import { TestBed, async } from '@angular/core/testing';
import { EventsComponent } from './events.component';
describe('EventsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(EventsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Events'`, async(() => {
    const fixture = TestBed.createComponent(EventsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Events');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(EventsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Events!');
  }));
});
