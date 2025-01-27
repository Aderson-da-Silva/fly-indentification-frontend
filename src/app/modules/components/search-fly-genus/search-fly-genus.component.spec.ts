import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlyGenusComponent } from './search-fly-genus.component';

describe('SearchFlyGenusComponent', () => {
  let component: SearchFlyGenusComponent;
  let fixture: ComponentFixture<SearchFlyGenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFlyGenusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFlyGenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
