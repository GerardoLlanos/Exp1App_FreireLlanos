import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacionVidaSubmarinaPage } from './informacion-vida-submarina.page';

describe('InformacionVidaSubmarinaPage', () => {
  let component: InformacionVidaSubmarinaPage;
  let fixture: ComponentFixture<InformacionVidaSubmarinaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionVidaSubmarinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionVidaSubmarinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
