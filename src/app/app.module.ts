import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './component/app/app.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { PreviewComponent } from './component/preview/preview.component';
import { PhotoComponent } from './component/photo/photo.component';
import { ClickOutsideDirective } from './directive/click-outside.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PreviewComponent,
    PhotoComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
