
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AdminLayout from "@/layouts/AdminLayout";
import { Book, Calendar, FileText, Newspaper, Settings, Users } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // التحقق من تسجيل الدخول
    const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);
  
  const modules = [
    {
      title: "الأخبار",
      description: "إدارة المقالات والأخبار",
      icon: <Newspaper className="h-8 w-8" />,
      count: 12,
      link: "/admin/news"
    },
    {
      title: "الفعاليات",
      description: "إدارة الأحداث والفعاليات",
      icon: <Calendar className="h-8 w-8" />,
      count: 8,
      link: "/admin/events"
    },
    {
      title: "الخدمات",
      description: "إدارة خدمات المجتمع",
      icon: <Settings className="h-8 w-8" />,
      count: 6,
      link: "/admin/services"
    },
    {
      title: "الدليل",
      description: "إدارة دليل الموارد",
      icon: <Users className="h-8 w-8" />,
      count: 24,
      link: "/admin/directory"
    },
    {
      title: "المكتبة",
      description: "إدارة المستندات والملفات",
      icon: <Book className="h-8 w-8" />,
      count: 15,
      link: "/admin/library"
    }
  ];

  return (
    <AdminLayout>
      <div className="container mx-auto py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <p className="text-muted-foreground">
            مرحبًا، اليوم هو {new Date().toLocaleDateString("ar-EG")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate(module.link)}>
              <CardHeader className="p-4 pb-0">
                <div className="flex justify-between items-center">
                  <div className="p-2 bg-muted rounded-md text-primary">{module.icon}</div>
                  <span className="text-2xl font-bold">{module.count}</span>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl">{module.title}</CardTitle>
                <p className="text-muted-foreground mt-1">{module.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 text-primary text-sm">
                إدارة {module.title}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/30 p-6 rounded-lg mt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">آخر النشاطات</h3>
                <p className="text-sm text-muted-foreground">آخر المنشورات والتغييرات على الموقع</p>
              </div>
            </div>
            <ul className="text-sm space-y-1">
              <li className="text-muted-foreground">قام المسؤول بإضافة خبر جديد - قبل 2 ساعة</li>
              <li className="text-muted-foreground">تم تحديث معلومات الفعالية - قبل 5 ساعات</li>
              <li className="text-muted-foreground">تم إضافة خدمة جديدة - قبل يوم واحد</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
