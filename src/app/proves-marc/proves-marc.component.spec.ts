import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvesMarcComponent } from './proves-marc.component';

describe('ProvesMarcComponent', () => {
  let component: ProvesMarcComponent;
  let fixture: ComponentFixture<ProvesMarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvesMarcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvesMarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
