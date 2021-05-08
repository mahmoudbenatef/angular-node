import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  images: string[] = [
    '/assets/images/1.jpeg',
    '/assets/images/2.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpeg',
    '/assets/images/5.jpeg',
    '/assets/images/6.jpeg',
  ];
  position = 0;
  isAuto = false;
  interval = NaN ;
  ngOnInit(): void {
  }
  next(): void{
    this.position++;
  }

  prev(): void{
    this.position--;
  }
  auto(): void{
    if (!this.isAuto){
      this.interval = setInterval(() => {
        if (this.position !== this.images.length - 1 )
        {
          this.position++;
        }
        else {
          this.position = 0;
        }
      }, 1000);
    }
    else {
      clearInterval(this.interval);
    }
    this.isAuto = !this.isAuto;
  }

}
