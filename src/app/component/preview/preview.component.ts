import {Component, Input, OnInit} from '@angular/core'
import {environment} from '../../../environments/environment'
import {Photo} from '../../model/photo.model'

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  @Input()
  photo?: Photo

  @Input()
  selected: boolean = false

  env = environment

  constructor() { }

  ngOnInit(): void {
  }

}
