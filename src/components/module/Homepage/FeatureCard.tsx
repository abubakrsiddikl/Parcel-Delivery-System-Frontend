import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

export default function FeatureCard({ title, desc, Icon }: FeatureCardProps) {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition duration-300 dark:bg-slate-900 dark:border-slate-800">
      <CardHeader className="flex flex-col items-center text-center space-y-3">
        <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {desc}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
