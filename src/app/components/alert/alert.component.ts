import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  public uploadFile = (files: any) => {
    console.log(files[0].path)
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('https://localhost:44300/api/upload/uploadfile', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        console.log(event)
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / Number(event.total));
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44300/api/upload/getload/${serverPath}`;
  }

}

