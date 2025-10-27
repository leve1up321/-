import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('is_featured', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const { data: reviews } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_reviews')
        .select('*')
        .limit(6);
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary-light bg-clip-text text-transparent">
                  متجر لفل اب
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground">
                💡 ابدأ من الصفر وابنِ أول دخل رقمي لك اليوم!
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                اكتشف كيف تحوّل مهاراتك أو وقتك إلى مصدر دخل مستمر من خلال بيع منتجات رقمية بسيطة تحقق لك أرباحًا حتى أثناء نومك 😴💰
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#products">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_hsl(262,83%,58%,0.7)] transition-all text-lg">
                    ابدأ رحلتك الآن
                  </Button>
                </a>
                <a href="#products">
                  <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 text-lg">
                    تسوق الآن
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800"
                alt="Level Up Store"
                className="rounded-3xl shadow-2xl hover:shadow-[0_0_50px_hsl(262,83%,58%,0.4)] transition-all duration-500 hover:scale-105"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse delay-75" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">من نحن</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            متجر لفل اب – وجهتك لبناء مشروعك الرقمي بأقل التكاليف وأعلى جودة
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '📈', title: 'النمو المستمر', desc: 'تطوير مستمر للأدوات والمميزات' },
              { icon: '🔒', title: 'الأمان', desc: 'حماية متقدمة لبياناتك' },
              { icon: '☁️', title: 'التخزين السحابي', desc: 'وصول سريع وآمن لملفاتك' },
              { icon: '⚡', title: 'السرعة', desc: 'أداء فائق السرعة' },
              { icon: '💬', title: 'الدعم الفني', desc: 'فريق متواجد على مدار الساعة' },
              { icon: '🧠', title: 'التعلم الذكي', desc: 'أدوات تساعدك على النجاح' },
            ].map((feature, idx) => (
              <Card key={idx} className="group hover:shadow-[0_0_20px_hsl(262,83%,58%,0.2)] transition-all hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: '350+', label: 'عميل' },
              { number: '2500+', label: 'زائر' },
              { number: '600+', label: 'عملية بيع' },
            ].map((stat, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">منتجاتنا</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            اكتشف مجموعتنا المميزة من المنتجات الرقمية
          </p>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <Skeleton className="h-64 w-full" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products?.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">آراء عملائنا</h2>
          
          <Card className="max-w-md mx-auto mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
            <CardContent className="p-8 text-center">
              <div className="text-6xl font-bold text-primary mb-2">4.9</div>
              <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
              <p className="text-muted-foreground">من أكثر من 350 تقييم</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews?.map((review) => (
              <Card key={review.id} className="hover:shadow-[0_0_20px_hsl(262,83%,58%,0.2)] transition-all bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-yellow-500 text-xl mb-3">
                    {'★'.repeat(review.rating)}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {review.comment}
                  </p>
                  <div>
                    <strong>{review.user_name}</strong>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">اتصل بنا</h2>
          <h3 className="text-2xl text-center mb-4 text-primary">نحب أن نسمع منك!</h3>
          <p className="text-center text-muted-foreground text-lg mb-12">
            لا تتردد في التواصل معنا عبر أي من الطرق التالية. فريق الدعم جاهز لمساعدتك في كل خطوة من رحلتك الرقمية
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '📧', title: 'البريد الإلكتروني', info: 'info@levelup.zaher.io' },
              { icon: '📱', title: 'واتساب', info: 'تواصل معنا' },
              { icon: '📷', title: 'انستغرام', info: '@levelup_store' },
            ].map((contact, idx) => (
              <Card key={idx} className="hover:shadow-[0_0_20px_hsl(262,83%,58%,0.2)] transition-all hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{contact.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{contact.title}</h4>
                  <p className="text-muted-foreground">{contact.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">🎯 جاهز للبدء؟</h3>
              <p className="text-lg mb-4">
                كل يوم تأجّله هو فرصة ضائعة! ابدأ مشروعك الرقمي اليوم واحصل على دخلك الأول
              </p>
              <p className="text-primary font-semibold">
                تتعب بالشغل ولا ترى نتائج؟ اكتشف كيف تبيع منتجات رقمية بسهولة 💰
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
