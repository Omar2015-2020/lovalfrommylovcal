
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calendar, FileDown, FileText, Loader2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// استخدام بيانات المكتبة من صفحة المكتبة
const libraryData = [
  {
    id: "1",
    title: "دليل الطلاب اليمنيين في روسيا",
    category: "أدلة",
    publishedDate: "10.02.2024",
    fileUrl: "#",
    fileType: "PDF",
    fileSize: "2.3 MB",
    description: "دليل شامل للطلاب اليمنيين الجدد في روسيا"
  },
  {
    id: "2",
    title: "نظام التعليم العالي في روسيا",
    category: "تعليم",
    publishedDate: "15.03.2024",
    fileUrl: "#",
    fileType: "PDF",
    fileSize: "1.8 MB",
    description: "شرح مفصل لنظام التعليم العالي في روسيا"
  }
];

const AdminLibraryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [fileType, setFileType] = useState("PDF");
  const [fileSize, setFileSize] = useState("");
  
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isEditing = !!id;
  
  const categories = ["أدلة", "تعليم", "ثقافة", "تقارير", "مستندات قانونية", "أخرى"];
  const fileTypes = ["PDF", "DOC", "DOCX", "XLS", "XLSX", "PPT", "PPTX", "ZIP", "RAR"];
  
  useEffect(() => {
    if (isEditing) {
      const libraryItem = libraryData.find((item) => item.id === id);
      if (libraryItem) {
        setTitle(libraryItem.title);
        setCategory(libraryItem.category);
        setDescription(libraryItem.description || "");
        setPublishedDate(libraryItem.publishedDate);
        setFileUrl(libraryItem.fileUrl);
        setFileType(libraryItem.fileType);
        setFileSize(libraryItem.fileSize);
      } else {
        navigate("/admin/library");
        toast({
          title: "خطأ",
          description: "الملف غير موجود",
          variant: "destructive",
        });
      }
    }
  }, [id, isEditing, navigate, toast]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !category || !publishedDate || !fileUrl || !fileType || !fileSize) {
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
        title: isEditing ? "تم تحديث الملف" : "تم إضافة الملف",
        description: isEditing
          ? "تم تحديث الملف بنجاح"
          : "تمت إضافة الملف الجديد بنجاح",
      });
      navigate("/admin/library");
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
            onClick={() => navigate("/admin/library")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">
            {isEditing ? "تحرير ملف" : "إضافة ملف جديد"}
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
          {/* العنوان */}
          <div className="space-y-2">
            <Label htmlFor="title">عنوان الملف</Label>
            <Input
              id="title"
              placeholder="أدخل عنوان الملف"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* الفئة */}
            <div className="space-y-2">
              <Label htmlFor="category">الفئة</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="اختر فئة" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* تاريخ النشر */}
            <div className="space-y-2">
              <Label htmlFor="publishedDate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> تاريخ النشر
              </Label>
              <Input
                id="publishedDate"
                placeholder="DD.MM.YYYY"
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.target.value)}
                required
              />
            </div>
          </div>
          
          {/* الوصف */}
          <div className="space-y-2">
            <Label htmlFor="description">وصف الملف</Label>
            <Textarea
              id="description"
              placeholder="وصف مختصر للملف"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          {/* رابط الملف */}
          <div className="space-y-2">
            <Label htmlFor="fileUrl" className="flex items-center gap-2">
              <FileDown className="h-4 w-4" /> رابط الملف
            </Label>
            <Input
              id="fileUrl"
              placeholder="أدخل رابط الملف"
              value={fileUrl}
              onChange={(e) => setFileUrl(e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* نوع الملف */}
            <div className="space-y-2">
              <Label htmlFor="fileType" className="flex items-center gap-2">
                <FileText className="h-4 w-4" /> نوع الملف
              </Label>
              <Select value={fileType} onValueChange={setFileType}>
                <SelectTrigger id="fileType">
                  <SelectValue placeholder="اختر نوع الملف" />
                </SelectTrigger>
                <SelectContent>
                  {fileTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* حجم الملف */}
            <div className="space-y-2">
              <Label htmlFor="fileSize">حجم الملف</Label>
              <Input
                id="fileSize"
                placeholder="مثال: 2.5 MB"
                value={fileSize}
                onChange={(e) => setFileSize(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate("/admin/library")}
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
                  {isEditing ? "تحديث الملف" : "إضافة الملف"}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminLibraryForm;
