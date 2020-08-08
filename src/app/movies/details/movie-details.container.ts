import { EntityType } from '@sdk/shared.model';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewEncapsulation, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAction, MovieSelector, Movie } from '@sdk/movie';
import { Store, select } from '@ngrx/store';
import { CoreSwapiState } from '@sdk/shared.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'mig-sw-movie-details',
  templateUrl: './movie-details.container.html',
  styleUrls: ['./movie-details.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailsContainer implements OnInit {

  @HostBinding('class.mig-sw-movie-details') hostCss = true;

  readonly characterImageType: EntityType = 'characters';

  movie$: Observable<Movie> | undefined = this.store.pipe(
    select(MovieSelector.selectCurrent)
  );

  constructor(
    private store: Store<CoreSwapiState>) {
  }

  ngOnInit() {
    debugger;
    this.store.dispatch(MovieAction.getDetail());
  }
}
