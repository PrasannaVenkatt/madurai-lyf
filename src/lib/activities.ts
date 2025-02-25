import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Activity = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  date: string;
  category: string;
  participantCount: number;
  maxParticipants: number;
  hostId: string;
  hostName: string;
  hostAvatar: string;
  participants: string[];
  likes: string[];
};

type ActivitiesStore = {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  joinActivity: (activityId: string, userId: string) => void;
  leaveActivity: (activityId: string, userId: string) => void;
  toggleLike: (activityId: string, userId: string) => void;
};

export const useActivities = create<ActivitiesStore>(
  persist(
    (set) => ({
      activities: [],
      addActivity: (activity) =>
        set((state) => ({
          activities: [activity, ...state.activities],
        })),
      joinActivity: (activityId, userId) =>
        set((state) => ({
          activities: state.activities.map((activity) =>
            activity.id === activityId
              ? {
                  ...activity,
                  participantCount: activity.participantCount + 1,
                  participants: [...activity.participants, userId],
                }
              : activity,
          ),
        })),
      leaveActivity: (activityId, userId) =>
        set((state) => ({
          activities: state.activities.map((activity) =>
            activity.id === activityId
              ? {
                  ...activity,
                  participantCount: activity.participantCount - 1,
                  participants: activity.participants.filter(
                    (id) => id !== userId,
                  ),
                }
              : activity,
          ),
        })),
      toggleLike: (activityId, userId) =>
        set((state) => ({
          activities: state.activities.map((activity) =>
            activity.id === activityId
              ? {
                  ...activity,
                  likes: activity.likes.includes(userId)
                    ? activity.likes.filter((id) => id !== userId)
                    : [...activity.likes, userId],
                }
              : activity,
          ),
        })),
    }),
    {
      name: "activities-storage",
    },
  ),
);
