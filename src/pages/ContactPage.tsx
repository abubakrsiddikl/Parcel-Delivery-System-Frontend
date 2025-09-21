import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Contact Us</h1>
      <p className="text-muted-foreground mb-8">
        Have a question or need help? Fill out the form below and our team will get back to you as soon as possible.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-slate-200">Name</label>
          <Input placeholder="Your name" className="dark:bg-slate-900 dark:border-slate-700" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-slate-200">Email</label>
          <Input type="email" placeholder="you@example.com" className="dark:bg-slate-900 dark:border-slate-700" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-slate-200">Message</label>
          <Textarea rows={5} placeholder="Write your message..." className="dark:bg-slate-900 dark:border-slate-700" />
        </div>
        <Button type="submit" >
          Send Message
        </Button>
      </form>
    </section>
  );
}
