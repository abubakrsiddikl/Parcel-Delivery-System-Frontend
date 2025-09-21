
export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">About Us</h1>
      <p className="text-lg text-muted-foreground mb-8">
        At{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          SwiftSend
        </span>
        , we believe sending parcels should be simple, fast, and stress-free.
        Founded in 2025, our mission is to provide the most reliable parcel
        delivery service across Bangladesh with real-time tracking, affordable
        pricing, and excellent customer support.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
          <h3 className="font-semibold text-lg mb-2">🚀 Our Mission</h3>
          <p className="text-sm text-muted-foreground">
            To simplify parcel delivery for businesses and individuals by
            ensuring speed, security, and transparency.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
          <h3 className="font-semibold text-lg mb-2">🌍 Our Vision</h3>
          <p className="text-sm text-muted-foreground">
            To become the most trusted and innovative delivery network in South
            Asia.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
          <h3 className="font-semibold text-lg mb-2">💡 Our Values</h3>
          <p className="text-sm text-muted-foreground">
            Reliability, Affordability, and Customer-first mindset drive
            everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}
