import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from 'src/app/common/station';
import { StationService } from 'src/app/services/station.service';
import { StationListComponent } from '../station-list/station-list.component';
@Component({
  selector: 'app-station-update',
  templateUrl: './station-update.component.html',
  styleUrls: ['./station-update.component.css']
})
export class StationUpdateComponent implements OnInit {
  stationFormGroup!: FormGroup;
  id!: number;

  constructor(private formBuilder: FormBuilder,
              private stationService: StationService,
              private router: Router,
              private route: ActivatedRoute,
              /*private list: StationListComponent*/) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id;
    this.stationFormGroup = this.formBuilder.group({
      addStationForm: this.formBuilder.group({
        x: [],
        y: [],
        reach: []
      })
    });
  }

  onSubmit(): void {
    let station = new Station();
    station.x = this.stationFormGroup.get('addStationForm')?.value.x;
    station.y = this.stationFormGroup.get('addStationForm')?.value.y;
    station.reach = this.stationFormGroup.get('addStationForm')?.value.reach;

    this.stationService.updateStation(this.id, station).subscribe(
      res => {
        console.log(res);
        alert(`Station ${this.id} has been successfully updated!`);
      }
    );
    //this.router.navigate(['/stations']);
    this.router.navigateByUrl('/stations');
  }
}
