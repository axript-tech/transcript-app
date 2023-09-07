import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTranscriptsComponent } from './manage-transcripts.component';

describe('ManageTranscriptsComponent', () => {
  let component: ManageTranscriptsComponent;
  let fixture: ComponentFixture<ManageTranscriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTranscriptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTranscriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
