const allProducts = [
  {
    id: 1,
    image: ["src/assets/everydayshirtimg/img1.webp"],
    name: "Orange Punch Patchwork Handblock Shirt",
    currentPrice: 1799,
    originalPrice: 1999,
    discount: "10%",
 
  },
  {
    id: 2,
    image: ["src/assets/everydayshirtimg/img5.webp"],
    name: "Green Patchwork Handblock Shirt",
    currentPrice: 1799,
    originalPrice: 1999,
    discount: "10%",
 
  },
  {
    id: 3,
    image: ["src/assets/everydayshirtimg/img9.webp"],
    name: "Purple FLoral Cotton Flax Shirt",
    currentPrice: 1699,
    originalPrice: 1999,
    discount: "15%",
   
  },
  {
    id: 4,
    image: ["src/assets/everydayshirtimg/img7.webp"],
    name: "Butterfly Handblock Heaven Shirt",
    currentPrice: 2300,
    originalPrice: 2510,
    discount: "8%",

  },
  {
    id: 5,
    image: ["src/assets/everydayshirtimg/img17.webp"],
    name: "Pink Polka Handblock Shirt",
    currentPrice: 2100,
    originalPrice: 2300,
    discount: "9%",
    
  },
  {
    id: 6,
    image: ["src/assets/everydayshirtimg/img2.webp"],
    name: "Cherry Black Handblock Shirt",
    currentPrice: 2150,
    originalPrice: 2350,
    discount: "8%",
    
  },
  {
    id: 7,
    image: ["src/assets/everydayshirtimg/img4.webp"],
    name: "Green Floral Sanganeri Handblock Shirt",
    currentPrice: 2200,
    originalPrice: 2400,
    discount: "8%",
    
  },
  {
    id: 8,
    image: ["src/assets/everydayshirtimg/img29.webp"],
    name: "Bagru Tomatino Handblock Shirt",
    currentPrice: 2000,
    originalPrice: 2200,
    discount: "10%",
  
  },
  {
    id: 9,
    image: ["src/assets/everydayshirtimg/img11.webp"],
    name: "White&Grey Flower Handblock Shirt",
    currentPrice: 2150,
    originalPrice: 2350,
    discount: "8%",
   
  },
  {
    id: 10,
    image: ["src/assets/everydayshirtimg/img16.webp"],
    name: "Blue Block Print Shirt",
    currentPrice: 2200,
    originalPrice: 2400,
    discount: "8%",
   
  },
  {
    id: 11,
    image: ["src/assets/everydayshirtimg/img28.webp"],
    name: "Bottle Green Print Cotton Shirt",
    currentPrice: 2000,
    originalPrice: 2200,
    discount: "10%",
   
  },
  {
    id: 12,
    image: ["src/assets/shirts_kurtisimg/img1.webp"],
    name: "Mud Print Handblock Shirt Kurti",
    currentPrice: 1799,
    originalPrice: 1999,
    discount: "10%",
  
  },
  {
    id: 13,
    image: ["src/assets/shirts_kurtisimg/img5.webp"],
    name: "Indigo Handblock Shirt kurti",
    currentPrice: 1999,
    originalPrice: 2199,
    discount: "10%",
    
  },
  {
    id: 14,
    image: ["src/assets/shirts_kurtisimg/img9.webp"],
    name: "Mango Leaf Bagru Handblock Shirt Kurti",
    currentPrice: 1699,
    originalPrice: 1999,
    discount: "15%",
   
  },
  {
    id: 15,
    image: ["src/assets/shirts_kurtisimg/img13.webp"],
    name: "Laal Ajrakh Natural Dye Shirt Kurti",
    currentPrice: 2300,
    originalPrice: 2510,
    discount: "8%",
    
  },
  {
    id: 16,
    image: ["src/assets/shirts_kurtisimg/img17.webp"],
    name: "Green Ajrakh Handblock Shirt Kurti",
    currentPrice: 2100,
    originalPrice: 2300,
    discount: "9%",
  
  },
  {
    id: 17,
    image: ["src/assets/shirts_kurtisimg/img21.webp"],
    name: "Yellow Ajrakh Handblock Shirt Kurti",
    currentPrice: 2150,
    originalPrice: 2350,
    discount: "8%",
     
  },
  {
    id: 18,
    image: ["src/assets/shirts_kurtisimg/img25.webp"],
    name: "Pink Ajrakh Handblock Kurti",
    currentPrice: 2200,
    originalPrice: 2400,
    discount: "8%",
   
  },
  {
    id: 19,
    image: ["src/assets/shirts_kurtisimg/img29.webp"],
    name: "Blue Ajrakh Handblock Kurti",
    currentPrice: 2000,
    originalPrice: 2200,
    discount: "10%",

  },
  {
    id: 20,
    image: ["src/assets/shirts_kurtisimg/img21.webp"],
    name: "Fabwork Ajrakh Natural Dye Shirt Kurti",
    currentPrice: 2150,
    originalPrice: 2350,
    discount: "8%",
   
  },
  {
    id: 21,
    image: ["src/assets/shirts_kurtisimg/img25.webp"],
    name: "Karigiri Natural Dye Shirt Kurti",
    currentPrice: 2200,
    originalPrice: 2400,
    discount: "8%",
    
  },
  {
    id: 22,
    image: ["src/assets/shirts_kurtisimg/img29.webp"],
    name: "Brown Floral Cotton Shirt Kurti",
    currentPrice: 2000,
    originalPrice: 2200,
    discount: "10%",
    
  },{
    id: 23,
    image: ["src/assets/hearts_hakobaimg/img1.webp"],
    name: "All Hearts Handblock Shirt",
    currentPrice: 1799,
    originalPrice: 1999,
    discount: "10%",
    
  },
  {
    id: 24,
    image: ["src/assets/hearts_hakobaimg/img6.webp"],
    name: "Just Ace It Handblock Shirt",
    currentPrice: 1799,
    originalPrice: 1999,
    discount: "10%",
    
  },
  {
    id: 25,
    image: ["src/assets/hearts_hakobaimg/img9.webp"],
    name: "Hakoba Cream Handblock Shirt",
    currentPrice: 1699,
    originalPrice: 1999,
    discount: "15%",
  
  },
  {
    id: 26,
    image: ["src/assets/hearts_hakobaimg/img13.webp"],
    name: "Green Hakoba Shirt",
    currentPrice: 2300,
    originalPrice: 2510,
    discount: "8%",
 
  },
  {
    id: 27,
    image: ["src/assets/hearts_hakobaimg/img17.webp"],
    name: "Rani Hakoba Shirt",
    currentPrice: 2100,
    originalPrice: 2300,
    discount: "9%",
 
  },
  {
    id: 27,
    image: ["src/assets/shirts_kurtisimg/img20.webp"],
    name: "Yellow Ajrakh Handblock Shirt",
    currentPrice: 2150,
    originalPrice: 2350,
    discount: "8%",
    
  },
  ];
  
  export default allProducts;
  