import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [date, setDate] = useState<Date | undefined>(undefined);

  // Fetch events from API
  useEffect(() => {
    fetch("http://localhost:8000/api/events")
      .then((res) => res.json())
      .then((data) => setEventsData(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  // Filter events by selected date (optional)
  const filteredEvents = date
    ? eventsData.filter((event: any) =>
        format(new Date(event.date), "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
      )
    : eventsData;

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Календарь событий"
        subtitle="Присоединяйтесь к нам на общественных собраниях, культурных праздниках и образовательных семинарах"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader title="Предстоящие события" />

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
                    {date ? format(date, "PPP") : "Фильтр по дате"}
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
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event: any) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground mt-10">
              Нет событий на выбранную дату.
            </div>
          )}

          {/* Community Calendar Info */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Общественный календарь</h3>
                  <p className="text-muted-foreground mb-6">
                    Просмотрите наш полный календарь событий и добавьте его в свой личный календарь, чтобы быть в курсе.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-russia-blue hover:bg-russia-blue/90">
                      Просмотреть полный календарь
                    </Button>
                    <Button variant="outline">
                      Добавить в свой календарь
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
