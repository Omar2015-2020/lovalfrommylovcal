
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import NewsCard from "@/components/NewsCard";
import { newsData } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const categories = Array.from(new Set(newsData.map(item => item.category)));
  
  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen">
      <HeroSection
        title="News & Announcements"
        subtitle="Stay updated with the latest news from our community"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader title="Latest Articles" />
          
          {/* Search & Filter */}
          <div className="mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search news articles..." 
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
                  All
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
          </div>
          
          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No news articles found matching your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {setSearchTerm(""); setSelectedCategory("");}} 
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
