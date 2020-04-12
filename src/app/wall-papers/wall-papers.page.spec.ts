import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WallPapersPage } from './wall-papers.page';

describe('WallPapersPage', () => {
  let component: WallPapersPage;
  let fixture: ComponentFixture<WallPapersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallPapersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WallPapersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
