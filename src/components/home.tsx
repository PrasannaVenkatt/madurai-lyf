import React from "react";
import Navbar from "./layout/Navbar";
import ActivityFeed from "./activity/ActivityFeed";
import FilterSidebar from "./activity/FilterSidebar";
import CreateActivityDialog from "./activity/CreateActivityDialog";
import QueryCard from "./query/QueryCard";
import OfferCard from "./offers/OfferCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HomeProps {
  initialActivities?: any[];
  initialCategories?: any[];
}

const Home = ({
  initialActivities = [],
  initialCategories = [],
}: HomeProps) => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  );
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = React.useState(false);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-16 min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 py-8 flex gap-8">
          <FilterSidebar
            categories={initialCategories}
            selectedCategories={selectedCategories}
            onCategorySelect={handleCategorySelect}
            onSearch={handleSearch}
          />

          <div className="flex-1 flex flex-col items-center">
            <Tabs defaultValue="activities" className="w-full max-w-[968px]">
              <div className="mb-6 flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="queries">Queries</TabsTrigger>
                  <TabsTrigger value="offers">Exclusive Offers</TabsTrigger>
                </TabsList>
                <CreateActivityDialog
                  open={isCreateDialogOpen}
                  onOpenChange={setIsCreateDialogOpen}
                />
              </div>

              <TabsContent value="activities">
                <ActivityFeed activities={initialActivities} />
              </TabsContent>

              <TabsContent value="queries" className="space-y-6">
                <QueryCard />
                <QueryCard
                  title="Best yoga classes in town?"
                  description="I'm looking for beginner-friendly yoga classes in Madurai. Any recommendations?"
                  userName="Raj Mehta"
                  category="Wellness"
                  likes={3}
                  replies={2}
                  timestamp="5 hours ago"
                />
              </TabsContent>

              <TabsContent
                value="offers"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <OfferCard />
                <OfferCard
                  title="15% Off Yoga Classes"
                  description="Get 15% off on monthly yoga class packages."
                  imageUrl="https://images.unsplash.com/photo-1599447421416-3414500d18a5"
                  business="Zen Yoga Studio"
                  discount="15% OFF"
                  validUntil="2024-05-15"
                  pointsRequired={300}
                />
                <OfferCard
                  title="Buy 1 Get 1 Free"
                  description="Buy one coffee get one free at our new location."
                  imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                  business="Coffee House"
                  discount="BOGO"
                  validUntil="2024-04-30"
                  pointsRequired={200}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
