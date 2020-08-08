import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, HostBinding } from '@angular/core';
import { MovieAction, MovieSelector, Movie } from '@sdk/movie';
import { CoreSwapiState, EntityType } from '@sdk/shared.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mig-sw-movies',
  templateUrl: './movies.container.html',
  styleUrls: ['./movies.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MoviesContainer implements OnInit {

  @HostBinding('class.mig-sw-movies') hostCss = true;

  readonly imageType: EntityType = 'films';

  movies$: Observable<Movie[]> = this.store.pipe(
    select(MovieSelector.selectAll()),
    filter(movies => !!movies?.length)
  );

  isLoading$: Observable<boolean> = this.store.pipe(
    select(MovieSelector.selectIsBusy())
  );

  constructor(
    private store: Store<CoreSwapiState>,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.store.dispatch(MovieAction.getAll());
  }

  navigate(id: string) {
    this.router.navigate(['/movies/details', id]);
  }
}
