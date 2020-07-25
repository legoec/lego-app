import { Component, OnInit, Input } from '@angular/core';

import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

}
