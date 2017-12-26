import { Injectable } from '@angular/core';
import { DynamicFormBase, DynamicTextbox, DynamicDropdown } from '../components';

@Injectable()
export class QuestionService {
    constructor() { }

    getQuestions() {
        let questions: DynamicFormBase<any>[] = [

            new DynamicDropdown({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new DynamicTextbox({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new DynamicTextbox({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}