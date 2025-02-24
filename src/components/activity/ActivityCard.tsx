import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Heart } from "lucide-react";

interface ActivityCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  location?: string;
  date?: string;
  category?: string;
  participantCount?: number;
  maxParticipants?: number;
  hostName?: string;
  hostAvatar?: string;
}

const ActivityCard = ({
  title = "Beach Volleyball Tournament",
  description = "Join us for a fun afternoon of beach volleyball! All skill levels welcome. Bring your sunscreen and water.",
  imageUrl = "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1",
  location = "Marina Beach",
  date = "2024-04-15 14:00",
  category = "Sports",
  participantCount = 8,
  maxParticipants = 16,
  hostName = "Sarah Chen",
  hostAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
}: ActivityCardProps) => {
  return (
    <Card className="w-full max-w-[600px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-primary">{category}</Badge>
      </div>

      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={hostAvatar} />
            <AvatarFallback>{hostName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>Hosted by {hostName}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>
              {participantCount} / {maxParticipants} participants
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <Button variant="outline" size="icon">
          <Heart className="w-4 h-4" />
        </Button>
        <Button>Join Activity</Button>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
