import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent {

  filterGroup: FormGroup;

  constructor(fb: FormBuilder) {

    this.filterGroup = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', [Validators.maxLength(5)]]
    });

    this.filterGroup.valueChanges.subscribe(val => console.log(val));

  }

  applyFilter(): void {
    console.log('Form Submitted', this.filterGroup.value);
  }
}
