import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormBase } from './dynamic-form.model';

@Component({
    selector: 'dynamic-form-control',
    templateUrl: './dynamic-form-control.component.html'
})
export class DynamicFormControlComponent {
    @Input() control: DynamicFormBase<any>;
    @Input() form: FormGroup;
    get isValid() {
        return this.form.controls[this.control.key].valid;
    }
}