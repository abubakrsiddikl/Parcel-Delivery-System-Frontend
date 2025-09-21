import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Rocket, Truck, DollarSign } from "lucide-react";

const SERVICES = [
  {
    title: "Same-day Delivery",
    subtitle: "City-wide",
    desc: "Available in Dhaka, Chittagong & Sylhet",
    icon: Rocket,
  },
  {
    title: "Next-day Delivery",
    subtitle: "Nationwide",
    desc: "Affordable and reliable across Bangladesh",
    icon: Truck,
  },
  {
    title: "COD",
    subtitle: "Cash on Delivery",
    desc: "Fast settlements for sellers",
    icon: DollarSign,
  },
];

export default function Services() {
  return (
    <section className="">
      <h2 className="text-3xl font-bold mb-8 text-center ">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.title}
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-3">
                <Icon className="h-6 w-6 text-primary" />
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <span className="text-xs bg-muted px-3 py-1 rounded-full">
                  {s.subtitle}
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
