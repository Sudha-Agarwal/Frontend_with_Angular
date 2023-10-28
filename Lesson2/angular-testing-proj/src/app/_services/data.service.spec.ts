import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a POST request',waitForAsync(inject([HttpTestingController, DataService],
    (httpClient:HttpTestingController, service:DataService) =>{

      const newproduct = {id:7,name:'product7', description:'product7', category:'Mobiles'};

      service.addProduct(newproduct).subscribe(response => {
        expect(response).toEqual(newproduct);        
      });
      const req = httpMock.expectOne('http://localhost:3000/products');
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(newproduct);
        req.flush(newproduct,{status:201, statusText:'created'});
        httpMock.verify();

  })));
});
