import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormBase } from './dynamic-form.model';
import { DynamicFormService } from './dynamic-form.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
    @Input() controls: DynamicFormBase<any>[] = [];
    form: FormGroup;
    payload = '';

    constructor(
        private dynamicFormService: DynamicFormService,
    ) { }

    ngOnInit() {
        this.form = this.dynamicFormService.toFormGroup(this.controls);
    }

    onSubmit() {
        this.payload = JSON.stringify(this.form.value);
    }
}