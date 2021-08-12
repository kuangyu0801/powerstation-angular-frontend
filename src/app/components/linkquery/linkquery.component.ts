import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-linkquery',
  templateUrl: './linkquery.component.html',
  styleUrls: ['./linkquery.component.css']
})
export class LinkqueryComponent implements OnInit {
  linkQueryFormGroup!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.linkQueryFormGroup = this.formBuilder.group({
      linkQuery: this.formBuilder.group({
        x: [],
        y: []
      })
    });
  }
  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.linkQueryFormGroup.get('linkQuery')?.value);
  }
}
