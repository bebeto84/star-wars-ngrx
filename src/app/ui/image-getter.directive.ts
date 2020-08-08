import { EntityType } from '@sdk/shared.model';

import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'img[migSwImageSrc]'
})
export class ImageGetterDirective implements OnInit{

  @Input() migSwImageSrc: string;
  @Input() migSwImageGetterType: EntityType = 'films';

  constructor(
    private elementRef: ElementRef<HTMLImageElement>
  ) { }


  ngOnInit() {
    const img = this.elementRef.nativeElement;
    img.src = `/assets/images/${this.migSwImageGetterType}/${this.migSwImageSrc}.jpg`;
  }



}
