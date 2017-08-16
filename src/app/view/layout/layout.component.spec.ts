import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { LAYOUT_ROUTES } from './layout.routes';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(LAYOUT_ROUTES),
        MdToolbarModule,
      ],
      declarations: [
        LayoutComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
