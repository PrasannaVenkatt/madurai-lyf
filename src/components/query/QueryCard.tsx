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
import { MessageCircle, ThumbsUp } from "lucide-react";

interface QueryCardProps {
  title?: string;
  description?: string;
  userName?: string;
  userAvatar?: string;
  category?: string;
  likes?: number;
  replies?: number;
  timestamp?: string;
}

const QueryCard = ({
  title = "Best local restaurants for family dinner?",
  description = "Looking for family-friendly restaurants in Madurai with good ambiance and reasonable prices. Any suggestions?",
  userName = "Priya Kumar",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  category = "Dining",
  likes = 5,
  replies = 3,
  timestamp = "2 hours ago",
}: QueryCardProps) => {
  return (
    <Card className="w-full max-w-[600px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={userAvatar} />
              <AvatarFallback>{userName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-sm">
                Asked by {userName} · {timestamp}
              </CardDescription>
            </div>
          </div>
          <Badge>{category}</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="flex gap-2">
            <ThumbsUp className="w-4 h-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>{replies}</span>
          </Button>
        </div>
        <Button variant="outline" size="sm">
          Reply
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QueryCard;
