
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden h-full card-hover">
      <CardHeader className="p-4">
        <div className="mb-4 text-center">
          <div className="mx-auto bg-muted rounded-full p-3 w-16 h-16 flex items-center justify-center text-primary">
            {service.icon}
          </div>
        </div>
        <CardTitle className="text-lg text-center">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription className="text-center">{service.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={service.link}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
