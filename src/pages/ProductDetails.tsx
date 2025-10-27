import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const { data: reviews } = useQuery({
    queryKey: ['product-reviews', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_reviews')
        .select('*')
        .eq('product_id', id);
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid md:grid-cols-2 gap-12">
            <Skeleton className="h-96 w-full rounded-2xl" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">المنتج غير موجود</h1>
          <Link to="/">
            <Button>العودة للرئيسية</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
    });
  };

  const averageRating = reviews && reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowRight className="h-4 w-4" />
          العودة للرئيسية
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-[0_0_50px_hsl(262,83%,58%,0.4)] transition-all"
            />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4 leading-tight">{product.name}</h1>
              {reviews && reviews.length > 0 && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-yellow-500 text-xl">
                    {'★'.repeat(Math.round(averageRating))}
                    {'☆'.repeat(5 - Math.round(averageRating))}
                  </div>
                  <span className="text-muted-foreground">
                    ({reviews.length} تقييم)
                  </span>
                </div>
              )}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">السعر</p>
                    <p className="text-4xl font-bold text-primary">
                      {product.price.toFixed(2)} ريال
                    </p>
                  </div>
                  <Button
                    size="lg"
                    onClick={handleAddToCart}
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_hsl(262,83%,58%,0.7)] transition-all"
                  >
                    <ShoppingCart className="ml-2 h-5 w-5" />
                    أضف للسلة
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <h3 className="font-semibold text-lg">✨ مميزات المنتج:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ تحميل فوري بعد الدفع</li>
                <li>✓ دعم فني متواصل</li>
                <li>✓ تحديثات مجانية</li>
                <li>✓ ضمان استرجاع المال</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {reviews && reviews.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">تقييمات العملاء</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-[0_0_20px_hsl(262,83%,58%,0.2)] transition-all bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-yellow-500 text-xl mb-3">
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {review.comment}
                    </p>
                    <div className="font-semibold">{review.user_name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
