import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewServicePage } from './new-service.page';

describe('NewServicePage', () => {
  let component: NewServicePage;
  let fixture: ComponentFixture<NewServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
