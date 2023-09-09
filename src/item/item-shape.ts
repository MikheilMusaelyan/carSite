export class ItemShape {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public mileage: number,
    public make: number,
    public model: string,
    public year: number,
    public animationType: string,
    public horsepower?: number,
    public description?: string,
    // info about listing
    // number
    // listing count
  ) {}
}
