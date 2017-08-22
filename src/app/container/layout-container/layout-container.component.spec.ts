import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { LAYOUT_CONTAINER_ROUTES } from './layout-container.routes';
import { LayoutContainerComponent } from './layout-container.component';

describe('LayoutContainerComponent', () => {
  let component: LayoutContainerComponent;
  let fixture: ComponentFixture<LayoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(LAYOUT_CONTAINER_ROUTES),
        MdToolbarModule,
      ],
      declarations: [
        LayoutContainerComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
