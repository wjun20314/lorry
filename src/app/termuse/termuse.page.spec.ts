import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermuseComponent } from './termuse.component';

describe('TermuseComponent', () => {
  let component: TermuseComponent;
  let fixture: ComponentFixture<TermuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermuseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
