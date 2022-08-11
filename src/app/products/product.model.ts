export class Product {
  id: number;
  title: String;
  description: String;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: String;
  category: String;
  thumbnail: any;
  images: Array<String>;
  
  constructor(id: number,
    title: String,
    description: String,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: String,
    category: String,
    thumbnail: any,
    images: Array<String>){

    this.id = id;
    this.title= title;
    this.description= description;
    this.price=price;
    this.discountPercentage=discountPercentage;
    this.rating=rating;
    this.stock=stock;
    this.brand=brand;
    this.category=category;
    this.thumbnail=thumbnail;
    this.images=images

  }

  
}