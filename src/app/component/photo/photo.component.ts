import {Component, Input, OnInit} from '@angular/core'
import {Photo} from '../../model/photo.model'
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.sass']
})
export class PhotoComponent implements OnInit {

  @Input()
  photo?: Photo

  env = environment

  constructor() { }

  ngOnInit(): void {
  }

}
