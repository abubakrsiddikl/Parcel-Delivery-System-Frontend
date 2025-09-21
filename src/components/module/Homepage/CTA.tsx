
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-sky-600 text-white rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold">Ready to ship with SwiftSend?</h3>
      <p className="mt-2">Create an account and start sending today.</p>
      <div className="mt-6 flex justify-center gap-4">
        <Button asChild>
          <a href="/auth/register">Create Account</a>
        </Button>
      
      </div>
    </section>
  );
}
