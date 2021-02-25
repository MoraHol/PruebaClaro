import {Component, Input, OnInit} from '@angular/core';
import {CharacteristicModel} from '../../Core/models/characteristic.model';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  @Input('characteristics')
  characteristics: CharacteristicModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
