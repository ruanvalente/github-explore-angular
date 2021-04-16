import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let searchComponent: SearchComponent;
  let fixure: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        ToastrModule.forRoot(),
      ],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixure = TestBed.createComponent(SearchComponent);
    searchComponent = fixure.componentInstance;
    fixure.detectChanges();
  });

  it('should be create', () => {
    expect(searchComponent).toBeTruthy();
  });
});
