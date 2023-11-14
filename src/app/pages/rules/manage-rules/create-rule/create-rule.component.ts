import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RulesService } from 'src/app/services/rules-service/rules.service';

@Component({
  selector: 'app-create-rule',
  templateUrl: './create-rule.component.html',
  styleUrls: ['./create-rule.component.css'],
})
export class CreateRuleComponent {
  myForm!: FormGroup;
  argumentNames: string[] = [];

  operators: string[] | undefined;
  outputValue: string = '';
  conditions: string[] = [];

  constructor(private fb: FormBuilder, private rulesService: RulesService) {}

  ngOnInit() {
    this.argumentNames = this.rulesService.getArgumentNames();
    this.createForm();
  }
  createForm() {
    const formControls: { [key: string]: any } = {};
    this.argumentNames.forEach((argumentName) => {
      formControls[argumentName] = [''];
    });
    formControls['name'] = ['', Validators.required];
    formControls['linkTransfers'] = ['y'];
    formControls['comments'] = [''];
    formControls['arguments'] = [''];
    formControls['operators'] = [''];
    formControls['value'] = [''];
    formControls['executionType'] = ['NONE'];
    formControls['condition'] = [''];

    this.myForm = this.fb.group(formControls);
  }

  getOperators(): string[] | undefined {
    const selectedArgument = this.myForm.get('arguments')?.value;
    return this.rulesService.getOperatorsForArgument(selectedArgument);
  }
  onArgumentChange() {
    // Update operators when argument changes
    const selectedArgument = this.myForm.get('arguments')?.value;
    this.operators =
      this.rulesService.getOperatorsForArgument(selectedArgument);
  }
  onSubmit() {
    // Add your form submission logic here
  }
  addCondition() {
    const selectedArgument = this.myForm.get('arguments')?.value;
    const selectedOperator = this.myForm.get('operators')?.value;
    const selectedValue = this.myForm.get('value')?.value;
    const condition = `${selectedArgument} ${selectedOperator} ${selectedValue};`;

    this.conditions.push(condition);

    this.myForm.get('condition')?.setValue(this.conditions.join('\n'));
    this.myForm.get('arguments')?.reset();
    this.myForm.get('operators')?.reset();
    this.myForm.get('value')?.reset();
  }
  clearConditions() {
    this.myForm.get('condition')?.reset();
  }
}
