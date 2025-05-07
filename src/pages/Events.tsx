
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import { eventsData } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Events Calendar"
        subtitle="Join us for community gatherings, cultural celebrations, and educational workshops"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader title="Upcoming Events" />
          
          {/* Calendar Filter */}
          <div className="mb-10 max-w-sm mx-auto">
            <div className="flex items-center justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Filter by date"}
                    {date && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto h-4 w-4 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDate(undefined);
                        }}
                      >
                        ✕
                      </Button>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          {/* Add Community Calendar */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Community Calendar</h3>
                  <p className="text-muted-foreground mb-6">
                    View our full calendar of events and add it to your personal calendar to stay updated.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-russia-blue hover:bg-russia-blue/90">
                      View Full Calendar
                    </Button>
                    <Button variant="outline">
                      Add to Your Calendar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
