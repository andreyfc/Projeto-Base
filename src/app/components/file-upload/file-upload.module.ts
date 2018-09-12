import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    
  ],
  declarations: [
    FileSelectDirective
  ]
})
export class FileUploadModule { }
