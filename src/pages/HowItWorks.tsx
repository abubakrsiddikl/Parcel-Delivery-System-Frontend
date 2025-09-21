import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClipboardCheck, Truck, Navigation, CheckCircle } from "lucide-react";

const STEPS = [
  {
    title: "Request Pickup",
    desc: "Sender creates parcel with receiver details.",
    icon: ClipboardCheck,
  },
  {
    title: "Parcel Pickup",
    desc: "Courier collects parcel from sender.",
    icon: Truck,
  },
  {
    title: "In Transit",
    desc: "Parcel moves through hubs; status updated.",
    icon: Navigation,
  },
  {
    title: "Delivered",
    desc: "Receiver confirms delivery; proof stored.",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center ">
        How It Works
      </h2>
      <div className="grid gap-6 md:grid-cols-4">
        {STEPS.map((s) => {
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
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
