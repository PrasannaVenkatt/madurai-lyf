import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Tag } from "lucide-react";

interface OfferCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  business?: string;
  discount?: string;
  validUntil?: string;
  pointsRequired?: number;
}

const OfferCard = ({
  title = "20% Off on Family Meals",
  description = "Get 20% off on family meals. Valid for dine-in only.",
  imageUrl = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  business = "Madurai Spice Restaurant",
  discount = "20% OFF",
  validUntil = "2024-05-01",
  pointsRequired = 500,
}: OfferCardProps) => {
  return (
    <Card className="w-full max-w-[300px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-primary">{discount}</Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{business}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Valid until {new Date(validUntil).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Tag className="w-4 h-4" />
            <span>{pointsRequired} points required</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Redeem Offer</Button>
      </CardFooter>
    </Card>
  );
};

export default OfferCard;
