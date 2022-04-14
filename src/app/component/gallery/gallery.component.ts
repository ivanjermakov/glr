import {Component, OnInit} from '@angular/core'
import {Photo} from '../../model/photo.model'
import {environment} from '../../../environments/environment'
import {PhotoService} from '../../service/photo.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  photos?: Photo[]
  selected?: Photo

  constructor(
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(photos => this.photos = photos)
  }

}
