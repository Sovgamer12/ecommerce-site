import { useState } from 'react';
import { Card, CardContent } from "./components/ui/Card.jsx";
import { Button } from "./components/ui/Button.jsx";
import { ShoppingCart, DollarSign } from 'lucide-react';

const items = [
  { id: 1, name: "Nike Air Force 1", price: 90, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/AIR+FORCE+1+%2707+FRESH.png", brand: "Nike" },
  { id: 2, name: "Adidas Superstar Korn Shoes", price: 180, image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/92278fae44684e88bd4660100cc024f0_9366/adidas_Superstar_Korn_Shoes_Black_IH1313_01_02_standard.jpg", brand: "Adidas" },
  { id: 3, name: "Puma Speedcat OG Sneakers", price: 110, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1000,h_1000/global/398846/02/sv01/fnd/PHL/fmt/png/Speedcat-OG-Sneakers-Unisex", brand: "Puma" },
  { id: 4, name: "Chrome Hearts T-Shirt", price: 1332, image: "https://chromeworld.jp/wp-content/cache/seraphinite-accelerator/s/m/d/img/f2cf67e5e1be61f942e031945986de40.6ab8.webp", brand: "Chrome Hearts" },
  { id: 5, name: "Evisu Jeans", price: 410, image: "https://us.evisu.com/cdn/shop/files/2ESHTM5JE100930DN-INDR_m1_b77a4103-c6c1-4938-ac56-34c746194cb1.jpg?v=1736752125&width=1000", brand: "Evisu" },
  { id: 6, name: "Dice Hoodie Pigment Dyed", price: 130, image: "https://www.stussy.com/cdn/shop/files/1925077_NATL_1_72e03c83-b404-4303-8f67-dac94705ddac.jpg?v=1739819711&width=1920", brand: "Stussy" },
  { id: 7, name: "Air Jordan 4 Retro 'Fear'", price: 195, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6277086f-b7f9-4e91-957c-9fdb4e822ede/AIR+JORDAN+4+RETRO.png", brand: "Jordan" },
  { id: 8, name: "Penton Two-Tone Smooth Leather Loafers", price: 150, image: "https://cdn.media.amplience.net/i/drmartens/41185001.80?$smart768$&fmt=auto", brand: "Dr. Martens" },
  { id: 9, name: "OFF-WHITE X AIR JORDAN 1 RETRO HIGH OG 'CHICAGO'", price: 5450, image: "https://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/WusAAOSwbYBjKxUr/$_57.JPG?set_id=880000500F", brand: "Off-White" },
  { id: 10, name: "Saint Laurent Bag", price: 1165, image: "https://saint-laurent.dam.kering.com/m/10f58d306d8f1565/Medium2-5576620NPKK1000_A.jpg?v=2", brand: "Saint Laurent" },
  { id: 11, name: "Ralph Lauren Jacket", price: 3600, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1414742_lifestyle?$rl_1x1_pdp$", brand: "Ralph Lauren" },
  { id: 12, name: "Adidas Ozweego Raf Simons", price: 1437, image: "https://images.stockx.com/images/adidas-Ozweego-Raf-Simons-Core-Black-Silver-Metallic-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358", brand: "Adidas" },
  { id: 13, name: "Burberry Scarf", price: 572, image: "https://assets.burberry.com/is/image/Burberryltd/83E2C1EA-040A-45DF-929D-297D45507BAD?$BBY_V3_SL_1$&wid=2500&hei=2500", brand: "Burberry" },
  { id: 14, name: "Corteiz Bolo Jacket", price: 380, image: "https://images.stockx.com/images/Corteiz-Bolo-Jacket-Black-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358", brand: "Corteiz" }
];

export default function EcommercePage() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Clothing Store</h1>
  
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-40 h-40 object-cover mx-auto rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-600">Brand: {item.brand}</p>
              <p className="text-gray-600">${item.price}</p>
              <Button className="mt-2 w-full" onClick={() => addToCart(item)}>
                <ShoppingCart className="mr-2" size={16} /> Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
  
      {/* Shopping Cart Section */}
      <div className="cart mt-6 p-4 border rounded-lg bg-white shadow">
        <h2 className="text-xl font-bold">🛒 Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="list-none p-0">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-1 border-b">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="font-semibold mt-2">Total: ${totalPrice}</p>
        <Button className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white">
          <DollarSign className="mr-2" size={16} /> Buy Now
        </Button>
      </div>
  
      {/* Footer Section */}
      <footer className="mt-6 text-center text-gray-500">
        <p>Made by: Yours Truly Je aaarrrr</p>
      </footer>
    </div>
  );
}