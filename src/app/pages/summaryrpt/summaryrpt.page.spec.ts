import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SummaryrptPage } from './summaryrpt.page';

describe('SummaryrptPage', () => {
  let component: SummaryrptPage;
  let fixture: ComponentFixture<SummaryrptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryrptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryrptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
