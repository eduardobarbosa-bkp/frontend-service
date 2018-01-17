export class Room {

  id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  recurrency: string = '';
  provider: string = '';
  url: string = '';
  monthly_price: number = 0;
  property_size: string = '';
  area: Area;
  is_visible: boolean = true;
  coordinates: Coordinates;
  images: ImageUrl[];


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}

export class Area {

  id: string = '';
  name:string = '';
  coordinates: Coordinates;
  country: string = '';
  city: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}

export class Coordinates {

  lat: number = 0;
  lon: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}

export class ImageUrl {

  url:string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}



