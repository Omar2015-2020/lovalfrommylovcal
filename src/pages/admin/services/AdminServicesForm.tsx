
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, BookOpen, Briefcase, FileText, Loader2, Save, UserPlus } from "lucide-react";
import { servicesData } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const iconOptions = [
  { value: "BookOpen", label: "كتاب", icon: <BookOpen className="h-5 w-5" /> },
  { value: "FileText", label: "مستند", icon: <FileText className="h-5 w-5" /> },
  { value: "Briefcase", label: "حقيبة", icon: <Briefcase className="h-5 w-5" /> },
  { value: "UserPlus", label: "مستخدم", icon: <UserPlus className="h-5 w-5" /> },
];

const AdminServicesForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("BookOpen");
  const [link, setLink] = useState("/services/details");
  
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isEditing = !!id;
  
  useEffect(() => {
    if (isEditing) {
      const serviceItem = servicesData.find((item) => item.id === id);
      if (serviceItem) {
        setTitle(serviceItem.title);
        setDescription(serviceItem.description);
        setLink(serviceItem.link);
        // في التطبيق الحقيقي سنحدد الأيقونة من البيانات
        setSelectedIcon("BookOpen");
      } else {
        navigate("/admin/services");
        toast({
          title: "خطأ",
          description: "الخدمة غير موجودة",
          variant: "destructive",
        });
      }
    }
  }, [id, isEditing, navigate, toast]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !selectedIcon || !link) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // محاكاة إرسال البيانات إلى الخادم
    setTimeout(() => {
      toast({
        title: isEditing ? "تم تحديث الخدمة" : "تم إضافة الخدمة",
        description: isEditing
          ? "تم تحديث الخدمة بنجاح"
          : "تمت إضافة الخدمة الجديدة بنجاح",
      });
      navigate("/admin/services");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-6 space-y-6">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/admin/services")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">
            {isEditing ? "تحرير خدمة" : "إضافة خدمة جديدة"}
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
          {/* العنوان */}
          <div className="space-y-2">
            <Label htmlFor="title">العنوان</Label>
            <Input
              id="title"
              placeholder="أدخل عنوان الخدمة"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          {/* الوصف */}
          <div className="space-y-2">
            <Label htmlFor="description">الوصف</Label>
            <Textarea
              id="description"
              placeholder="أدخل وصف الخدمة"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* الأيقونة */}
            <div className="space-y-2">
              <Label htmlFor="icon">الأيقونة</Label>
              <Select value={selectedIcon} onValueChange={setSelectedIcon}>
                <SelectTrigger id="icon">
                  <SelectValue placeholder="اختر أيقونة" />
                </SelectTrigger>
                <SelectContent>
                  {iconOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center">
                        {option.icon}
                        <span className="mr-2">{option.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* الرابط */}
            <div className="space-y-2">
              <Label htmlFor="link">الرابط</Label>
              <Input
                id="link"
                placeholder="أدخل الرابط"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate("/admin/services")}
            >
              إلغاء
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  جاري الحفظ...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  {isEditing ? "تحديث الخدمة" : "إضافة الخدمة"}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminServicesForm;
