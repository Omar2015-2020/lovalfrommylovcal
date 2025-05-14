
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileDown, FileText, Plus, Search, Trash2, Edit } from "lucide-react";
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

// Mock data for library items
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

const AdminLibraryList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [fileToDelete, setFileToDelete] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const categories = Array.from(new Set(libraryData.map(item => item.category)));
  
  const filteredFiles = libraryData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handleDelete = (id: string) => {
    setFileToDelete(id);
    setDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    toast({
      title: "تم حذف الملف",
      description: "تم حذف الملف بنجاح",
    });
    setDeleteDialogOpen(false);
    // في التطبيق الحقيقي، سنقوم بحذف الملف من قاعدة البيانات
  };
  
  const getFileIcon = (fileType: string) => {
    return <FileText className="h-5 w-5 text-blue-500" />;
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">إدارة المكتبة</h1>
          <Button onClick={() => navigate("/admin/library/create")}>
            <Plus className="h-4 w-4 mr-2" /> إضافة ملف جديد
          </Button>
        </div>
        
        {/* البحث والتصفية */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="البحث في المكتبة..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant={selectedCategory === "" ? "default" : "outline"} 
              onClick={() => setSelectedCategory("")}
            >
              الكل
            </Button>
            {categories.map(category => (
              <Button 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"} 
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* جدول المكتبة */}
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">النوع</TableHead>
                <TableHead>العنوان</TableHead>
                <TableHead>الفئة</TableHead>
                <TableHead>تاريخ النشر</TableHead>
                <TableHead>الحجم</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFiles.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{getFileIcon(item.fileType)}</TableCell>
                  <TableCell className="font-medium">
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground truncate max-w-xs">{item.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.publishedDate}</TableCell>
                  <TableCell>{item.fileSize}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <FileDown className="h-4 w-4" />
                        تحميل
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => navigate(`/admin/library/edit/${item.id}`)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
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
              <AlertDialogTitle>هل أنت متأكد من رغبتك في حذف هذا الملف؟</AlertDialogTitle>
              <AlertDialogDescription>
                هذا الإجراء لا يمكن التراجع عنه. سيتم حذف الملف نهائيًا من قاعدة البيانات.
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

export default AdminLibraryList;
