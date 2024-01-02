import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNotFoundComponent } from './web-not-found.component';

describe('WebNotFoundComponent', () => {
  let component: WebNotFoundComponent;
  let fixture: ComponentFixture<WebNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
