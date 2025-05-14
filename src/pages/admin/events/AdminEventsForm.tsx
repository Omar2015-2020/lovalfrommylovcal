
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calendar, Clock, Image, Loader2, MapPin, Save } from "lucide-react";
import { eventsData } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const AdminEventsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isEditing = !!id;
  
  useEffect(() => {
    if (isEditing) {
      const eventItem = eventsData.find((item) => item.id === id);
      if (eventItem) {
        setTitle(eventItem.title);
        setDescription(eventItem.description);
        setDate(eventItem.date);
        setTime(eventItem.time);
        setLocation(eventItem.location);
        setImage(eventItem.image);
      } else {
        navigate("/admin/events");
        toast({
          title: "خطأ",
          description: "الفعالية غير موجودة",
          variant: "destructive",
        });
      }
    }
  }, [id, isEditing, navigate, toast]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !date || !time || !location || !image) {
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
        title: isEditing ? "تم تحديث الفعالية" : "تم إضافة الفعالية",
        description: isEditing
          ? "تم تحديث الفعالية بنجاح"
          : "تمت إضافة الفعالية الجديدة بنجاح",
      });
      navigate("/admin/events");
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
            onClick={() => navigate("/admin/events")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">
            {isEditing ? "تحرير فعالية" : "إضافة فعالية جديدة"}
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
          {/* العنوان */}
          <div className="space-y-2">
            <Label htmlFor="title">العنوان</Label>
            <Input
              id="title"
              placeholder="أدخل عنوان الفعالية"
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
              placeholder="أدخل وصف الفعالية"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* التاريخ */}
            <div className="space-y-2">
              <Label htmlFor="date">التاريخ</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="date"
                  placeholder="أدخل تاريخ الفعالية"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            {/* الوقت */}
            <div className="space-y-2">
              <Label htmlFor="time">الوقت</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="time"
                  placeholder="أدخل وقت الفعالية"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            {/* المكان */}
            <div className="space-y-2">
              <Label htmlFor="location">المكان</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="أدخل مكان الفعالية"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
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
              onClick={() => navigate("/admin/events")}
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
                  {isEditing ? "تحديث الفعالية" : "إضافة الفعالية"}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminEventsForm;
