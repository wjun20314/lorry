import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesrptPage } from './salesrpt.page';

describe('SalesrptPage', () => {
  let component: SalesrptPage;
  let fixture: ComponentFixture<SalesrptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesrptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesrptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
