import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChgemailComponent } from './chgemail.component';

describe('ChgemailPage', () => {
  let component: ChgemailComponent;
  let fixture: ComponentFixture<ChgemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChgemailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChgemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
