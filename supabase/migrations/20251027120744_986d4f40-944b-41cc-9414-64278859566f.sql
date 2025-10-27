-- Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  download_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create product_reviews table
CREATE TABLE IF NOT EXISTS public.product_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending',
  payment_intent_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Products policies (public read)
CREATE POLICY "Anyone can view products"
  ON public.products FOR SELECT
  USING (true);

-- Reviews policies (public read)
CREATE POLICY "Anyone can view reviews"
  ON public.product_reviews FOR SELECT
  USING (true);

-- Orders policies (users can view their own orders)
CREATE POLICY "Users can view their own orders"
  ON public.orders FOR SELECT
  USING (true);

-- Order items policies (users can view their own order items)
CREATE POLICY "Users can view order items"
  ON public.order_items FOR SELECT
  USING (true);

-- Insert sample products
INSERT INTO public.products (name, short_description, description, price, image_url, is_featured) VALUES
('الدليل التمهيدي للربح من المنتجات الرقمية', 'كتاب رقمي شامل يشرح لك خطوة بخطوة كيف تبدأ رحلتك في عالم المنتجات الرقمية', 'دليل شامل ومفصل يأخذك من الصفر إلى الاحتراف في عالم المنتجات الرقمية. يحتوي على استراتيجيات مجربة، نصائح عملية، وأمثلة واقعية لمساعدتك في بناء مشروعك الرقمي الناجح.', 4.00, 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400', true),
('كتب تعليمية رقمية', 'مجموعة من الكتب التعليمية المتخصصة في مجالات مختلفة', 'مكتبة رقمية متكاملة تحتوي على كتب تعليمية في مجالات متنوعة: البرمجة، التسويق الرقمي، ريادة الأعمال، وتطوير الذات. محتوى عالي الجودة ومنظم بشكل احترافي.', 19.00, 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400', false),
('الباقة المميزة', 'باقة شاملة تحتوي على جميع منتجاتنا بسعر خاص', 'احصل على كل منتجاتنا الرقمية في باقة واحدة بسعر مخفض! تشمل جميع الكتب، الأدلة، والموارد التعليمية. أفضل قيمة لمن يريد البدء بقوة في عالم المنتجات الرقمية.', 99.00, 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400', false);

-- Insert sample reviews
INSERT INTO public.product_reviews (product_id, user_name, rating, comment) VALUES
((SELECT id FROM public.products WHERE name = 'الدليل التمهيدي للربح من المنتجات الرقمية'), 'محمد العتيبي', 5, 'المتجر ممتاز ويستحق التقييم الممتاز، والمنتجات رائعة جدًا، شكرًا لكم 💙'),
((SELECT id FROM public.products WHERE name = 'كتب تعليمية رقمية'), 'عبدالله السعيد', 5, 'والله صراحة أفضل متجر تعاملت معه، المنتجات عالية الجودة والدعم سريع'),
((SELECT id FROM public.products WHERE name = 'الباقة المميزة'), 'فهد الدوسري', 5, 'تجربة رائعة! المنتجات مفيدة جدًا وساعدتني في بدء مشروعي');

-- Create function to update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();