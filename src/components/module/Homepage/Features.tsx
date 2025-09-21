import FeatureCard from "./FeatureCard";
import { MapPin, ShieldCheck, DollarSign, RotateCcw } from "lucide-react";

const FEATURES = [
  {
    title: "Real-time Tracking",
    desc: "Track by tracking ID & status timeline",
    Icon: MapPin,
  },
  {
    title: "Secure Delivery",
    desc: "Signed delivery & tamper detection",
    Icon: ShieldCheck,
  },
  {
    title: "Affordable Rates",
    desc: "Weight & distance based pricing",
    Icon: DollarSign,
  },
  {
    title: "Easy Returns",
    desc: "Automated return workflows",
    Icon: RotateCcw,
  },
];

export default function Features() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Why SwiftSend?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
