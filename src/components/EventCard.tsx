
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <CardDescription className="line-clamp-2">{event.description}</CardDescription>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-yemen-red" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-yemen-red" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-yemen-red" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-russia-blue hover:bg-russia-blue/90">
          <Link to={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
