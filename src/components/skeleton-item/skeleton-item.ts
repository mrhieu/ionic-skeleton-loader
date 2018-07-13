/**

  # Ionic 3 Skeleton Loader component

  ## Setup

  After clone or download this project.

  Install Ionic CLI

  ```
  $ npm install -g ionic
  ```

  Install dependencies

  ```
  $ cd <project>
  $ npm install
  ```

  Run the app on Localhost

  ```
  $ ionic serve
  ```

  See more at [Get started with Ionic](https://ionicframework.com/getting-started/)

  ## skeleton-item
  `<skeleton-item>` is the main block to build more complex skeleton-style loading screen

  ### Usage

  ```
  <skeleton-item height="50px" width="50px" rounded></skeleton-item>
  ```

  You can add CSS classes or inline CSS as normal HTML element

  ```
  <skeleton-item class="pin-image" height="50px" width="50px" rounded style="margin-bottom: 16px"></skeleton-item>
  ```

  ### Available attributes

  - {height: string} can be px or %, default value is '16px'
  - {width: string} can be px or %, default value is '100%'
  - {radius: string} set border-radius, default value is '4px'
  - {rounded} set border-radius to 999em to make rounded block when the height and width have the same value
  - {no-animated} disable animation effect

 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'skeleton-item',
  templateUrl: 'skeleton-item.html'
})
export class SkeletonItemComponent {
  @Input() width: any;
  @Input() height: any;
  @Input() radius: any;
  styles: any = {};

  ngOnInit() {
    this.styles = {
      width: this.width ? this.width : '100%',
      height: this.height ? this.height : '16px'
    }

    if (typeof this.radius !== 'undefined' && this.radius !== '') {
      this.styles.borderRadius = this.radius;
    }
  }
}
