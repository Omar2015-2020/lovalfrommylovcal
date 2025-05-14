
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Image, Loader2, Save } from "lucide-react";
import { newsData } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const AdminNewsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isEditing = !!id;
  
  useEffect(() => {
    if (isEditing) {
      const newsItem = newsData.find((item) => item.id === id);
      if (newsItem) {
        setTitle(newsItem.title);
        setCategory(newsItem.category);
        setExcerpt(newsItem.excerpt);
        setImage(newsItem.image);
      } else {
        navigate("/admin/news");
        toast({
          title: "خطأ",
          description: "الخبر غير موجود",
          variant: "destructive",
        });
      }
    }
  }, [id, isEditing, navigate, toast]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !category || !excerpt || !image) {
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
        title: isEditing ? "تم تحديث الخبر" : "تم إضافة الخبر",
        description: isEditing
          ? "تم تحديث الخبر بنجاح"
          : "تمت إضافة الخبر الجديد بنجاح",
      });
      navigate("/admin/news");
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
            onClick={() => navigate("/admin/news")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">
            {isEditing ? "تحرير خبر" : "إضافة خبر جديد"}
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* العنوان */}
            <div className="space-y-2">
              <Label htmlFor="title">العنوان</Label>
              <Input
                id="title"
                placeholder="أدخل عنوان الخبر"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            {/* الفئة */}
            <div className="space-y-2">
              <Label htmlFor="category">الفئة</Label>
              <Input
                id="category"
                placeholder="أدخل فئة الخبر"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
          </div>
          
          {/* المقتطف */}
          <div className="space-y-2">
            <Label htmlFor="excerpt">المقتطف</Label>
            <Textarea
              id="excerpt"
              placeholder="أدخل مقتطف الخبر"
              rows={4}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
            />
          </div>
          
          {/* رابط الصورة */}
          <div className="space-y-2">
            <Label htmlFor="image">رابط الصورة</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Input
                  id="image"
                  placeholder="أدخل رابط الصورة"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-center items-center border rounded-md overflow-hidden">
                {image ? (
                  <img 
                    src={image} 
                    alt="معاينة الصورة" 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-4 text-muted-foreground">
                    <Image className="h-8 w-8 mb-2" />
                    <span>معاينة الصورة</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate("/admin/news")}
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
                  {isEditing ? "تحديث الخبر" : "إضافة الخبر"}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminNewsForm;
