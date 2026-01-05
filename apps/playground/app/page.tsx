import { Button } from "pristine-ui";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl p-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">PristineUI</h1>
        <p className="text-slate-300">
          Edit the library in <code className="text-slate-200">packages/pristineui</code> and see it here.
        </p>
      </div>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-lg font-medium">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
    </main>
  );
}
