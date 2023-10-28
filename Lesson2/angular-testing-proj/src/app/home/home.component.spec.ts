import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Home Component'`,waitForAsync(() => {
    //fixture = TestBed.createComponent(HomeComponent);
    //component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Home Component');
  }))

  const mySpy = jasmine.createSpy('myFunction');

  // Using the spy in a test or setup
  it('should call a function', () => {
    // Using the spy as a function
    mySpy();
    
    // Verifying the spy's call
    expect(mySpy).toHaveBeenCalled();
  });

  function doSomethingAsync(input: number): Promise<number>{
    return new Promise((resolve,reject) =>{
      if(input >=0){
        setTimeout(()=> resolve(input *2),1000);
      }
      else{
        reject("Non negative input expected");
      }
    })
  }

  describe('Promise Test',()=>{
    it('should resolve the promise', async() => {
      const result = await doSomethingAsync(5);
      expect(result).toEqual(10);
    });

    it('should reject the promise', async()=>{
      try{
        await doSomethingAsync(-1)
        fail('The promise has been rejcetd');
      }
      catch(error){
        expect(error).toEqual('Non negative input expected');
      }
    })
  })
});
