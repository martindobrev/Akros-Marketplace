import { FieldTypeResponse } from '../data/models/FieldTypeResponse';
import { Injectable } from '@angular/core';
import { FormFieldBase } from 'src/app/shared/form/form-field-base';

@Injectable()
export class FormFieldsBuilderService {
  public searchFieldsToFormFields(
    searchFields: FieldTypeResponse[]
  ): FormFieldBase<string>[] {
    const formFields: FormFieldBase<string>[] = [];
    searchFields.forEach((searchField) => {
      const field = new FormFieldBase<string>({
        key: searchField.shortDescription,
        label: searchField.description,
        required: false,
        type: searchField.fieldTypeDefinitionId,
        min: searchField.minvalue,
        max: searchField.maxValue,
        options: searchField.fieldTypeChooses,
        offer: searchField.offer,
        search: searchField.search,
      });
      formFields.push(field);
    });

    return formFields;
  }
}