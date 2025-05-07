
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ExternalLink } from "lucide-react";

export interface DirectoryItem {
  id: string;
  name: string;
  description: string;
  address: string;
  phone?: string;
  website?: string;
  category: string;
  image: string;
}

interface DirectoryCardProps {
  item: DirectoryItem;
}

const DirectoryCard = ({ item }: DirectoryCardProps) => {
  return (
    <Card className="overflow-hidden card-hover h-full">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full">
            {item.category}
          </span>
        </div>
        <CardTitle className="text-lg line-clamp-2">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <CardDescription className="line-clamp-2">{item.description}</CardDescription>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 text-yemen-red shrink-0 mt-0.5" />
            <span>{item.address}</span>
          </div>
          {item.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-yemen-red" />
              <span>{item.phone}</span>
            </div>
          )}
        </div>
      </CardContent>
      {item.website && (
        <CardFooter className="p-4 pt-0">
          <Button asChild variant="outline" className="w-full">
            <a href={item.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <span>Visit Website</span>
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default DirectoryCard;
