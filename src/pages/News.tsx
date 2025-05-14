import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import NewsCard from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch data from Laravel API
  useEffect(() => {
    fetch("http://localhost:8000/api/news")
      .then((res) => res.json())
      .then((data) => setNewsData(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  // Get categories dynamically from API data
  const categories = Array.from(
    new Set(newsData.map((item: any) => item.category).filter(Boolean))
  );

  // Filter by search & category
  const filteredNews = newsData.filter((news: any) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.body.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || news.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Новости и объявления"
        subtitle="Будьте в курсе последних новостей нашего сообщества"
        backgroundImage="/Images/news.png" // ضع الصورة داخل public/Images
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader title="Последние статьи" />

          {/* Search & Filter */}
          <div className="mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск новостей..."
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

          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news: any) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Не найдено новостей, соответствующих вашим критериям поиска.
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
        </div>
      </section>
    </div>
  );
};

export default News;
