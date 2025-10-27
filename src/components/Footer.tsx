import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              متجر لفل اب
            </h3>
            <p className="text-muted-foreground">
              وجهتك لبناء مشروعك الرقمي
            </p>
            <p className="text-muted-foreground mt-2">
              💡 ابدأ من الصفر وابنِ أول دخل رقمي لك اليوم
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#home" className="text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="/#products" className="text-muted-foreground hover:text-primary transition-colors">
                  المنتجات
                </a>
              </li>
              <li>
                <a href="/#reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  التقييمات
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">تواصل معنا</h4>
            <p className="text-muted-foreground mb-2">
              📧 info@levelup.zaher.io
            </p>
            <p className="text-muted-foreground mb-2">
              📱 واتساب
            </p>
            <p className="text-muted-foreground">
              📷 @levelup_store
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 متجر لفل اب. جميع الحقوق محفوظة.</p>
          <p className="mt-2">موثوق به من قبل أكثر من 350+ عميل | 600+ عملية بيع ناجحة</p>
        </div>
      </div>
    </footer>
  );
};
