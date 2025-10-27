import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  short_description: string;
  price: number;
  image_url: string;
  is_featured?: boolean;
}

export const ProductCard = ({
  id,
  name,
  short_description,
  price,
  image_url,
  is_featured,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image_url });
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden hover:shadow-[0_0_30px_hsl(262,83%,58%,0.3)] transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border relative">
        {is_featured && (
          <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 border-0">
            الأكثر مبيعاً
          </Badge>
        )}
        
        <div className="relative overflow-hidden">
          <img
            src={image_url}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground line-clamp-2 mb-4">
            {short_description}
          </p>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">
            {price.toFixed(2)} ريال
          </span>
          <Button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_hsl(262,83%,58%,0.5)] transition-all"
          >
            <ShoppingCart className="ml-2 h-4 w-4" />
            اشتري الآن
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
