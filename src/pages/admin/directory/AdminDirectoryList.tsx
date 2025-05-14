
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { directoryData } from "@/data/mockData";
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

const AdminDirectoryList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [directoryToDelete, setDirectoryToDelete] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const categories = Array.from(new Set(directoryData.map(item => item.category)));
  
  const filteredDirectory = directoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handleDelete = (id: string) => {
    setDirectoryToDelete(id);
    setDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    toast({
      title: "تم حذف العنصر",
      description: "تم حذف العنصر بنجاح",
    });
    setDeleteDialogOpen(false);
    // في التطبيق الحقيقي، سنقوم بحذف العنصر من قاعدة البيانات
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">إدارة الدليل</h1>
          <Button onClick={() => navigate("/admin/directory/create")}>
            <Plus className="h-4 w-4 mr-2" /> إضافة عنصر جديد
          </Button>
        </div>
        
        {/* البحث والتصفية */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="البحث في الدليل..." 
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
        
        {/* جدول الدليل */}
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">الشعار</TableHead>
                <TableHead>الاسم</TableHead>
                <TableHead>الفئة</TableHead>
                <TableHead>العنوان</TableHead>
                <TableHead>الاتصال</TableHead>
                <TableHead className="text-left">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDirectory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="h-10 w-10 rounded overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{item.location}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{item.phone}</p>
                      <p className="text-xs text-muted-foreground">{item.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => navigate(`/admin/directory/edit/${item.id}`)}>
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
              <AlertDialogTitle>هل أنت متأكد من رغبتك في حذف هذا العنصر؟</AlertDialogTitle>
              <AlertDialogDescription>
                هذا الإجراء لا يمكن التراجع عنه. سيتم حذف العنصر نهائيًا من قاعدة البيانات.
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

export default AdminDirectoryList;
