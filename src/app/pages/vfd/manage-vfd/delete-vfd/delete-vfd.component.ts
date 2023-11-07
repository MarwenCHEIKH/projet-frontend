import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HTTPService } from 'src/app/services/http.service';

@Component({
  selector: 'app-delete-vfd',
  templateUrl: './delete-vfd.component.html',
  styleUrls: ['./delete-vfd.component.css'],
})
export class DeleteVfdComponent {
  deleteDirectoryForm!: FormGroup;
  directories: any[] = [];
  selectedDirectory!: string;
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HTTPService
  ) {}
  ngOnInit(): void {
    this.deleteDirectoryForm = this.formBuilder.group({
      dir_path: [''],
    });
    this.loadDirectories();
  }
  loadDirectories() {
    this.httpService.get('vfd/get-directories').subscribe(
      (response) => {
        // Handle the successful response here
        console.log('Success:', response);
        this.directories = response as any[];
      },
      (error) => {
        // Handle the error here
        console.error('Error:', error);
      }
    );
  }
  onSubmit() {
    this.deleteDirectoryForm.get('dir_path')?.setValue(this.selectedDirectory);
    if (this.deleteDirectoryForm.valid) {
      const formData = this.deleteDirectoryForm.value;
      console.log(formData);
      const token = localStorage.getItem('jwt_token');

      this.httpService.post(formData, 'vfd/delete-directory').subscribe(
        (response) => {
          // Handle the successful response here
          console.log('Success:', response);
        },
        (error) => {
          // Handle the error here
          console.error('Error:', error);
        }
      );
    }
  }
}
