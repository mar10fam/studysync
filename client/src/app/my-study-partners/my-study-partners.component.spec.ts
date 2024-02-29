import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStudyPartnersComponent } from './my-study-partners.component';

describe('MyStudyPartnersComponent', () => {
  let component: MyStudyPartnersComponent;
  let fixture: ComponentFixture<MyStudyPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyStudyPartnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyStudyPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
