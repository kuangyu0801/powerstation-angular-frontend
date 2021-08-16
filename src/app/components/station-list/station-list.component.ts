import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/common/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  stations: Station[] = [];

  // inject dependency of station service
  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    // subscribe to data async
    this.stationService.getStationList().subscribe(
      data => {
        this.stations = data;
      }
    )
  }
}
