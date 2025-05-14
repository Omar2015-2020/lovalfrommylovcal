import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import DirectoryCard from "@/components/DirectoryCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

const Directory = () => {
  const [directoryData, setDirectoryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // ✅ جلب البيانات من API
  useEffect(() => {
    fetch("http://localhost:8000/api/directory")
      .then((res) => res.json())
      .then((data) => setDirectoryData(data))
      .catch((err) => console.error("Error fetching directory:", err));
  }, []);

  // ✅ استخراج التصنيفات بدون تكرار
  const categories = Array.from(
    new Set(directoryData.map((item: any) => item.category).filter(Boolean))
  );

  // ✅ التصفية حسب البحث والتصنيف
  const filteredDirectory = directoryData.filter((item: any) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Йеменский справочник в России"
        subtitle="Найдите йеменские предприятия, организации и ресурсы по всей России"
        backgroundImage="https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader title="Справочник сообщества" />

          {/* Search & Filter */}
          <div className="mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск в справочнике..."
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
                  Все
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Directory Grid */}
          {filteredDirectory.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDirectory.map((item: any) => (
                <DirectoryCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Объекты не найдены по заданным критериям поиска.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                }}
                className="mt-4"
              >
                Очистить фильтры
              </Button>
            </div>
          )}

          {/* Submit Listing */}
          <div className="mt-16 text-center">
            <div className="max-w-lg mx-auto">
              <h3 className="text-xl font-bold mb-2">Добавьте свою организацию</h3>
              <p className="text-muted-foreground mb-4">
                Вы йеменский бизнес или организация в России? Отправьте информацию о себе, чтобы быть включенным в наш справочник.
              </p>
              <Button className="bg-russia-blue hover:bg-russia-blue/90">
                <Plus className="h-4 w-4 mr-2" />
                Добавить организацию
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Directory;
