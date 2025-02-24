import React from "react";
import ActivityCard from "./ActivityCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Activity {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  date: string;
  category: string;
  participantCount: number;
  maxParticipants: number;
  hostName: string;
  hostAvatar: string;
}

interface ActivityFeedProps {
  activities?: Activity[];
}

const ActivityFeed = ({
  activities = defaultActivities,
}: ActivityFeedProps) => {
  return (
    <ScrollArea className="h-[850px] w-full max-w-[968px] bg-background rounded-md p-4">
      <div className="flex flex-col gap-6">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </ScrollArea>
  );
};

const defaultActivities: Activity[] = [
  {
    id: "1",
    title: "Beach Volleyball Tournament",
    description:
      "Join us for a fun afternoon of beach volleyball! All skill levels welcome. Bring your sunscreen and water.",
    imageUrl: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1",
    location: "Marina Beach",
    date: "2024-04-15 14:00",
    category: "Sports",
    participantCount: 8,
    maxParticipants: 16,
    hostName: "Sarah Chen",
    hostAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "2",
    title: "Community Garden Workshop",
    description:
      "Learn organic gardening techniques and help maintain our community garden. Tools and seeds provided.",
    imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    location: "Central Community Garden",
    date: "2024-04-16 10:00",
    category: "Education",
    participantCount: 5,
    maxParticipants: 12,
    hostName: "Mike Johnson",
    hostAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
  },
  {
    id: "3",
    title: "Local Food Festival",
    description:
      "Experience the best local cuisine with food stalls, cooking demonstrations, and live music.",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    location: "Town Square",
    date: "2024-04-17 11:00",
    category: "Food & Drink",
    participantCount: 45,
    maxParticipants: 100,
    hostName: "Lisa Wong",
    hostAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
  },
];

export default ActivityFeed;
