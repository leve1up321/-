import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email) {
      toast.error('الرجاء ملء جميع الحقول المطلوبة');
      return;
    }

    // Here you would integrate with Stripe
    toast.info('نظام الدفع قيد التطوير! سيتم دمج Stripe قريباً');
    
    // For now, simulate successful checkout
    toast.success('تم استلام طلبك! سيتم التواصل معك قريباً');
    clearCart();
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowRight className="h-4 w-4" />
          العودة للسلة
        </Link>

        <h1 className="text-4xl font-bold mb-8">إتمام الشراء</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>معلومات الدفع</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الجوال</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background"
                      dir="ltr"
                    />
                  </div>

                  <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
                    <CardContent className="p-4">
                      <p className="text-sm">
                        💡 <strong>ملاحظة:</strong> نظام الدفع الإلكتروني قيد التطوير. 
                        يمكنك إرسال بياناتك الآن وسيتم التواصل معك لإتمام عملية الدفع.
                      </p>
                    </CardContent>
                  </Card>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_hsl(262,83%,58%,0.7)] transition-all"
                  >
                    إرسال الطلب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <CardHeader>
                <CardTitle>ملخص الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-semibold">
                        {(item.price * item.quantity).toFixed(2)} ريال
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-lg font-bold">
                    <span>المجموع الكلي</span>
                    <span className="text-primary">{total.toFixed(2)} ريال</span>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground space-y-2 pt-4 border-t border-border">
                  <p>✓ تحميل فوري بعد الدفع</p>
                  <p>✓ دفع آمن ومحمي 100%</p>
                  <p>✓ ضمان استرجاع المال</p>
                  <p>✓ دعم فني 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
