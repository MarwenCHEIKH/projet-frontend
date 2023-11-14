import { Injectable } from '@angular/core';
import { HTTPService } from '../http-service/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {
  constructor(private httpService: HTTPService) {}
  getModels(): Observable<any[]> {
    return this.httpService.get('models/get-models');
  }
  getGeneralModels(models: any[]) {
    return models.filter((m) => m.protocol == 'GENERAL');
  }
  createModel(formDataObject: any) {
    return this.httpService.post(formDataObject, 'models/create-model');
  }
  updateModel(formDataObject: any) {
    return this.httpService.post(formDataObject, 'models/update-model');
  }
  deleteModel(formDataObject: any) {
    return this.httpService.post(formDataObject, 'models/delete-model');
  }
  deleteModelAttributes(formDataObject: any) {
    return this.httpService.post(
      formDataObject,
      'models/delete-model-attributes'
    );
  }
  convertNumericValues(data: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};

    for (const key of Object.keys(data)) {
      const value = data[key];
      result[key] = !isNaN(value) && value !== '' ? +value : value;
    }

    return result;
  }
}
