
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { newsData } from "@/data/mockData";
import { Edit, Plus, Search, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const AdminNewsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const filteredNews = newsData.filter(news => 
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleDelete = (id: string) => {
    setNewsToDelete(id);
    setDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    toast({
      title: "تم حذف الخبر",
      description: "تم حذف الخبر بنجاح",
    });
    setDeleteDialogOpen(false);
    // في التطبيق الحقيقي، سنقوم بحذف العنصر من قاعدة البيانات
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">إدارة الأخبار</h1>
          <Button onClick={() => navigate("/admin/news/create")}>
            <Plus className="h-4 w-4 mr-2" /> إضافة خبر جديد
          </Button>
        </div>
        
        {/* البحث */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="البحث في الأخبار..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        {/* جدول الأخبار */}
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">الصورة</TableHead>
                <TableHead>العنوان</TableHead>
                <TableHead>الفئة</TableHead>
                <TableHead>التاريخ</TableHead>
                <TableHead className="text-left">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredNews.map((news) => (
                <TableRow key={news.id}>
                  <TableCell>
                    <div className="h-12 w-12 rounded overflow-hidden">
                      <img 
                        src={news.image}
                        alt={news.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{news.title}</TableCell>
                  <TableCell>{news.category}</TableCell>
                  <TableCell>{news.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => navigate(`/admin/news/edit/${news.id}`)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(news.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* مربع حوار تأكيد الحذف */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>هل أنت متأكد من رغبتك في حذف هذا الخبر؟</AlertDialogTitle>
              <AlertDialogDescription>
                هذا الإجراء لا يمكن التراجع عنه. سيتم حذف الخبر نهائيًا من قاعدة البيانات.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>إلغاء</AlertDialogCancel>
              <AlertDialogAction onClick={confirmDelete} className="bg-red-500 text-white hover:bg-red-600">
                حذف
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
};

export default AdminNewsList;
