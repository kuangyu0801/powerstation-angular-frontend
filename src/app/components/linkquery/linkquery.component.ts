import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LinkQuery } from 'src/app/common/link-query';
import { LinkQueryService } from 'src/app/services/link-query.service';

@Component({
  selector: 'app-linkquery',
  templateUrl: './linkquery.component.html',
  styleUrls: ['./linkquery.component.css']
})
export class LinkqueryComponent implements OnInit {
  linkQueryFormGroup!: FormGroup;
  
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
    linkQuery.x = this.linkQueryFormGroup.get('linkQuery')?.value.x;
    linkQuery.y = this.linkQueryFormGroup.get('linkQuery')?.value.y;    
    
    // call REST API via LinkQueryService
    this.linkQueryService.query(linkQuery).subscribe(
      {
        next: reponse => {
          alert(`Link Query has been received`);
          console.log(reponse.body);
          //this.resetForm();          
        },
        error: err => {
          alert(`There was an error: ${err.message}`);
        }
      }
    );
  }

  resetForm() {
    this.linkQueryFormGroup.reset();
  }
  
}
