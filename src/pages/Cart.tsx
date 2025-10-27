import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Trash2, Plus, Minus } from 'lucide-react';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold">السلة فارغة</h1>
          <p className="text-muted-foreground text-lg">لم تقم بإضافة أي منتجات بعد</p>
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
              تصفح المنتجات
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowRight className="h-4 w-4" />
          متابعة التسوق
        </Link>

        <h1 className="text-4xl font-bold mb-8">سلة المشتريات ({itemCount} منتج)</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-[0_0_20px_hsl(262,83%,58%,0.2)] transition-all bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      
                      <p className="text-2xl font-bold text-primary mb-4">
                        {item.price.toFixed(2)} ريال
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4 ml-2" />
                          حذف
                        </Button>
                      </div>
                    </div>

                    <div className="text-left">
                      <p className="text-sm text-muted-foreground mb-1">المجموع</p>
                      <p className="text-2xl font-bold">
                        {(item.price * item.quantity).toFixed(2)} ريال
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-bold">ملخص الطلب</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>المجموع الفرعي</span>
                    <span>{total.toFixed(2)} ريال</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>الضريبة</span>
                    <span>0.00 ريال</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>المجموع الكلي</span>
                      <span className="text-primary">{total.toFixed(2)} ريال</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_hsl(262,83%,58%,0.7)] transition-all text-lg"
                  onClick={() => navigate('/checkout')}
                >
                  إتمام الشراء
                </Button>

                <div className="text-sm text-muted-foreground text-center space-y-2">
                  <p>✓ تحميل فوري بعد الدفع</p>
                  <p>✓ دفع آمن ومحمي</p>
                  <p>✓ دعم فني على مدار الساعة</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
