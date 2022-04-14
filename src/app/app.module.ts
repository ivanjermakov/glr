import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './component/app/app.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { PreviewComponent } from './component/preview/preview.component';
import { PhotoComponent } from './component/photo/photo.component'

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PreviewComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
