import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LinkQuery } from 'src/app/common/link-query';
import { LinkQueryService } from 'src/app/services/link-query.service';
import { LinkQueryResponse } from 'src/app/common/link-query-response';
@Component({
  selector: 'app-linkquery',
  templateUrl: './linkquery.component.html',
  styleUrls: ['./linkquery.component.css']
})
export class LinkqueryComponent implements OnInit {
  linkQueryFormGroup!: FormGroup;
  response!: LinkQueryResponse;
  message : string = "No Query";

  constructor(private formBuilder: FormBuilder,
    private linkQueryService: LinkQueryService) { }

  ngOnInit(): void {
    this.linkQueryFormGroup = this.formBuilder.group({
      linkQueryForm: this.formBuilder.group({
        x: [],
        y: []
      })
    });
  }

  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.linkQueryFormGroup.get('linkQueryForm')?.value);
    
    // setting LinkQuery
    let linkQuery = new LinkQuery();
    linkQuery.x = this.linkQueryFormGroup.get('linkQueryForm')?.value.x;
    linkQuery.y = this.linkQueryFormGroup.get('linkQueryForm')?.value.y;    
    console.log(linkQuery);
    // call REST API via LinkQueryService
    this.linkQueryService.query(linkQuery).subscribe(
      res => {
        console.log(res)
        this.response = res;
        console.log(this.response);
        if (this.response.isLinkFound) {
          this.message = `Best link station for point (${this.response.xquery}, ${this.response.yquery})
          is (${this.response.xstation}, ${this.response.ystation}) with power ${this.response.power}`;
        } else {
          this.message = `No link station within reach for point (${this.response.xquery}, ${this.response.yquery})`;
        }
        
      }
    );
  }

  resetForm() {
    this.linkQueryFormGroup.reset();
  }
  
}
