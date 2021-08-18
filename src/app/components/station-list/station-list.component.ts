import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  baseUrl: string = "http://localhost:8080/api/stations";

  // inject dependency of station service
  constructor(private formBuilder: FormBuilder,
              private stationService: StationService,
              private router: Router,
              private route: ActivatedRoute) { }

  reloadList(): void {
      // subscribe to data async
      this.stationService.getStationList().subscribe(
        data => {
          this.stations = data;
          // preprocessing to get id from links
          for (let station of this.stations) {
              station.id = +station._links.self.href.substring(this.baseUrl.length + 1);
          }
        }
      );
  }

  ngOnInit(): void {
    this.reloadList();
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
    this.reloadList();
  }

  onReload() {
    //window.location.reload();
    this.reloadList();
  }

  onDelete(targetId: number) {
    this.router.navigate(['delete'], 
                          {relativeTo: this.route, 
                           queryParams: {id: targetId}}
                        );
  }

  onUpdate(targetId: number) {
    this.router.navigate(['update'], 
                          {relativeTo: this.route, 
                           queryParams: {id: targetId}}
                        );
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
