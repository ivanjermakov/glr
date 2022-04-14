import {Component, Input, OnInit} from '@angular/core'
import {Photo} from '../../model/photo.model'
import {environment} from '../../../environments/environment'
import {faExternalLink} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.sass']
})
export class PhotoComponent implements OnInit {

  @Input()
  photo?: Photo

  env = environment
  openIcon = faExternalLink

  loading: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  openUrl(url: string) {
    window.open(url, '_blank')
  }

}
