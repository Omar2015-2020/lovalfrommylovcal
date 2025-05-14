
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { servicesData } from "@/data/mockData";
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

const AdminServicesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredServices = servicesData.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setServiceToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    toast({
      title: "تم حذف الخدمة",
      description: "تم حذف الخدمة بنجاح",
    });
    setDeleteDialogOpen(false);
    // في التطبيق الحقيقي، سنقوم بحذف الخدمة من قاعدة البيانات
  };

  const getIconDisplay = (serviceIcon: React.ReactNode) => {
    // This is a simple way to display the icon in the table
    // In a real application, you might want a more sophisticated approach
    return <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center">{serviceIcon}</div>;
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">إدارة الخدمات</h1>
          <Button onClick={() => navigate("/admin/services/create")}>
            <Plus className="h-4 w-4 mr-2" /> إضافة خدمة جديدة
          </Button>
        </div>
        
        {/* البحث */}
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="البحث في الخدمات..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        {/* جدول الخدمات */}
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">الأيقونة</TableHead>
                <TableHead>العنوان</TableHead>
                <TableHead>الوصف</TableHead>
                <TableHead>الرابط</TableHead>
                <TableHead className="text-left">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>{getIconDisplay(service.icon)}</TableCell>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell className="max-w-[300px] truncate">{service.description}</TableCell>
                  <TableCell>{service.link}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => navigate(`/admin/services/edit/${service.id}`)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
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
              <AlertDialogTitle>هل أنت متأكد من رغبتك في حذف هذه الخدمة؟</AlertDialogTitle>
              <AlertDialogDescription>
                هذا الإجراء لا يمكن التراجع عنه. سيتم حذف الخدمة نهائيًا من قاعدة البيانات.
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

export default AdminServicesList;
