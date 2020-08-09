import { Component, ChangeDetectionStrategy, ViewEncapsulation, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '@sdk/movie';
import { EntityType } from '@sdk/shared.model';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'mig-sw-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent {

  @HostBinding('class.mig-sw-movie-list') hostCss = true;

  readonly imageType: EntityType = 'films';

  @Input() movies: Movie[] | undefined;

  private _showAdditionalInfo: boolean;

  get showAdditionalInfo(): boolean {
    return this._showAdditionalInfo;
  }

  @Input()
  set showAdditionalInfo(value: boolean) {
    this._showAdditionalInfo = coerceBooleanProperty(value);
  }

  @Output() navigate: EventEmitter<string> =  new EventEmitter<string>();


}
