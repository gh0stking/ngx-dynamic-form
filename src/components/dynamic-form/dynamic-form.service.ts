import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DynamicFormBase } from './dynamic-form.model';

@Injectable()
export class DynamicFormService {
    constructor() { }

    toFormGroup(controls: DynamicFormBase<any>[]) {
        let group: any = {};
        controls.forEach(c => {
            group[c.key] = c.required ? new FormControl(c.value || '', Validators.required) : new FormControl(c.value || '');
        });

        return new FormGroup(group);
    }
}