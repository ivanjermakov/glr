import {Component, OnInit} from '@angular/core'
import {Photo} from '../../model/photo.model'
import {PhotoService} from '../../service/photo.service'
import {faExternalLink, faGrip, faStop} from '@fortawesome/free-solid-svg-icons'
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  multiColumnIcon = faGrip
  singleColumnIcon = faStop

  photos ?: Photo[]
  selected?: Photo
  columns: number = 3

  constructor(
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(photos => this.photos = photos)
  }

}
