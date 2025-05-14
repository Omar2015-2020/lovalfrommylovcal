
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import { directoryData } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import DirectoryForm from "@/components/admin/directory/DirectoryForm";
import PageHeader from "@/components/admin/PageHeader";

const AdminDirectoryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditing = !!id;
  
  const categories = Array.from(new Set(directoryData.map(item => item.category)));
  
  const handleFormSubmit = (formData: {
    name: string;
    category: string;
    description: string;
    location: string;
    phone: string;
    email: string;
    website: string;
    image: string;
  }) => {
    // محاكاة إرسال البيانات إلى الخادم
    setTimeout(() => {
      toast({
        title: isEditing ? "تم تحديث العنصر" : "تم إضافة العنصر",
        description: isEditing
          ? "تم تحديث العنصر بنجاح"
          : "تمت إضافة العنصر الجديد بنجاح",
      });
      navigate("/admin/directory");
    }, 1000);
  };

  // Get directory item data if editing
  const directoryItem = isEditing 
    ? directoryData.find((item) => item.id === id)
    : undefined;

  // Handle not found directory item
  useEffect(() => {
    if (isEditing && !directoryItem) {
      navigate("/admin/directory");
      toast({
        title: "خطأ",
        description: "العنصر غير موجود",
        variant: "destructive",
      });
    }
  }, [id, isEditing, navigate, toast, directoryItem]);

  if (isEditing && !directoryItem) {
    return null; // prevent rendering if item not found
  }

  return (
    <AdminLayout>
      <div className="container mx-auto py-6 space-y-6">
        <PageHeader 
          title={isEditing ? "تحرير عنصر" : "إضافة عنصر جديد للدليل"} 
          backUrl="/admin/directory"
        />
        
        <DirectoryForm
          initialData={directoryItem ? {
            name: directoryItem.name,
            category: directoryItem.category,
            description: directoryItem.description,
            location: directoryItem.location || directoryItem.address, // Handle backward compatibility
            phone: directoryItem.phone || "",
            email: directoryItem.email || "",
            website: directoryItem.website || "",
            image: directoryItem.image
          } : undefined}
          categories={categories}
          isEditing={isEditing}
          onSubmit={handleFormSubmit}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminDirectoryForm;
