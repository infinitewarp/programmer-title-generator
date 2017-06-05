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
});
