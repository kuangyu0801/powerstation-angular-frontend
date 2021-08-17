import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Station } from 'src/app/common/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stationFormGroup!: FormGroup;
  stations: Station[] = [];

  // inject dependency of station service
  constructor(private formBuilder: FormBuilder,
    private stationService: StationService) { }

  ngOnInit(): void {
    // subscribe to data async
    this.stationService.getStationList().subscribe(
      data => {
        this.stations = data;
      }
    )
    this.stationFormGroup = this.formBuilder.group({
      addStationForm: this.formBuilder.group({
        x: [],
        y: [],
        reach: []
      })
    });
  }

  onSubmit() {
    let station = new Station();
    station.x = this.stationFormGroup.get('addStationForm')?.value.x;
    station.y = this.stationFormGroup.get('addStationForm')?.value.y;
    station.reach = this.stationFormGroup.get('addStationForm')?.value.reach;
    console.log(station);
    this.stationService.postStation(station).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
