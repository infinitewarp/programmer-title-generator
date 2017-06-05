import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleGeneratorComponent } from './title-generator.component';

describe('TitleGeneratorComponent', () => {
  let component: TitleGeneratorComponent;
  let fixture: ComponentFixture<TitleGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render something in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TitleGeneratorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBeDefined();
    // TODO mock and check that appropriate text is set with something like:
    // .toContain('Entry-level Agile Quality Sales Programmer');
  }));
});
