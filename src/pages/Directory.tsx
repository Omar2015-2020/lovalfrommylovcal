
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import DirectoryCard from "@/components/DirectoryCard";
import { directoryData } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const categories = Array.from(new Set(directoryData.map(item => item.category)));
  
  const filteredDirectory = directoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Yemeni Directory in Russia"
        subtitle="Discover Yemeni businesses, organizations, and resources across Russia"
        backgroundImage="https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader title="Community Directory" />
          
          {/* Search & Filter */}
          <div className="mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search directory..." 
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
          
          {/* Directory Grid */}
          {filteredDirectory.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDirectory.map((item) => (
                <DirectoryCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No directory listings found matching your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {setSearchTerm(""); setSelectedCategory("");}} 
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
          
          {/* Submit Listing */}
          <div className="mt-16 text-center">
            <div className="max-w-lg mx-auto">
              <h3 className="text-xl font-bold mb-2">Add Your Listing</h3>
              <p className="text-muted-foreground mb-4">
                Are you a Yemeni business or organization in Russia? Submit your listing to be included in our directory.
              </p>
              <Button className="bg-russia-blue hover:bg-russia-blue/90">
                <Plus className="h-4 w-4 mr-2" />
                Submit Listing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Directory;
