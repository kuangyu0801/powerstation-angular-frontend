import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station-delete',
  templateUrl: './station-delete.component.html',
  styleUrls: ['./station-delete.component.css']
})
export class StationDeleteComponent implements OnInit {
  id!: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private stationService: StationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id;
  }

  onClick(): void {
    this.stationService.deleteStation(this.id).subscribe(
      res => {
        console.log(res);
        alert(`Station ${this.id} has been successfully deleted!`);
      }
    );
    this.router.navigate(['/stations']);
  }

}
