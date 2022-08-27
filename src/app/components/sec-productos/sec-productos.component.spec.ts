import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecProductosComponent } from './sec-productos.component';

describe('SecProductosComponent', () => {
  let component: SecProductosComponent;
  let fixture: ComponentFixture<SecProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
