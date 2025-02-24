import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface FilterSidebarProps {
  categories?: Category[];
  selectedCategories?: string[];
  onCategorySelect?: (categoryId: string) => void;
  onSearch?: (query: string) => void;
}

const FilterSidebar = ({
  categories = [
    { id: "sports", name: "Sports", count: 24 },
    { id: "dining", name: "Dining", count: 18 },
    { id: "events", name: "Events", count: 15 },
    { id: "education", name: "Education", count: 12 },
    { id: "arts", name: "Arts & Culture", count: 10 },
    { id: "outdoor", name: "Outdoor", count: 8 },
    { id: "technology", name: "Technology", count: 7 },
    { id: "wellness", name: "Health & Wellness", count: 6 },
  ],
  selectedCategories = [],
  onCategorySelect = () => {},
  onSearch = () => {},
}: FilterSidebarProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="w-[280px] h-full bg-white border-r p-4 flex flex-col gap-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Categories</h3>
          {selectedCategories.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-muted-foreground hover:text-foreground"
              onClick={() => {
                selectedCategories.forEach((id) => onCategorySelect(id));
              }}
            >
              Clear all
            </Button>
          )}
        </div>

        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-2">
            {categories.map((category) => {
              const isSelected = selectedCategories.includes(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => onCategorySelect(category.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${isSelected ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <div className="flex items-center gap-2">
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                  {isSelected && <X className="h-4 w-4" />}
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default FilterSidebar;
