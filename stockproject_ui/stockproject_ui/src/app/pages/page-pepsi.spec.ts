import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePepsi } from './page-pepsi';

describe('PagePepsi', () => {
  let component: PagePepsi;
  let fixture: ComponentFixture<PagePepsi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePepsi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePepsi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
