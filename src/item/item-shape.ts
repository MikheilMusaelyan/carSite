export class ItemShape {
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public price: number,
    public vipOffer: boolean = true,
    public oldPrice?: number,
    public reviews?: any[],
    public reviewCount?: number,
    public description?: string,
    public rating?: number,
    public sizes?: any[],
    public vipOfferPrice?: number,
    public selectedSize?: string
  ) {}
}
