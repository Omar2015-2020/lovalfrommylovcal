
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full">
            {news.category}
          </span>
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            {news.date}
          </div>
        </div>
        <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription className="line-clamp-3">{news.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/news/${news.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
