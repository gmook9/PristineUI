import Link from "next/link";
import { Button, Card, CardHeader, CardContent } from "@gmook9/pristine-ui";

import OrbBackground from "../../components/OrbBackground";

export default function ComponentsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 px-6 py-12 text-white">
      <OrbBackground />

      <div className="relative mx-auto w-full max-w-5xl space-y-10">
        <header className="flex items-start justify-between gap-6">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-300/80" />
              Components
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Current primitives
            </h1>
            <p className="mt-2 text-white/70">Current primitives in PristineUI.</p>
          </div>

          <Link href="/" className="shrink-0">
            <Button
              variant="ghost"
              className="border border-white/10 bg-white/5 hover:bg-white/10"
            >
              Back home
            </Button>
          </Link>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <h3 className="text-lg font-semibold">Buttons</h3>
              <p className="text-sm text-white/70">Variants + sizes</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="primary" className="w-full">
                Primary
              </Button>
              <Button variant="subtle" className="w-full">
                Subtle
              </Button>
              <Button variant="ghost" className="w-full">
                Ghost
              </Button>
              <Button variant="danger" className="w-full">
                Danger
              </Button>
              <Button disabled className="w-full">
                Disabled
              </Button>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <Button size="sm">sm</Button>
                <Button size="md">md</Button>
                <Button size="lg">lg</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <h3 className="text-lg font-semibold">Card</h3>
              <p className="text-sm text-white/70">Header + content</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Card className="border border-white/10 bg-black/25 shadow-sm backdrop-blur">
                <CardHeader>
                  <div className="text-sm font-semibold">Nested card</div>
                  <div className="text-xs text-white/60">Composable structure</div>
                </CardHeader>
                <CardContent className="text-sm text-white/70">
                  Cards are just layout primitives. You bring the content.
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <h3 className="text-lg font-semibold">Layout</h3>
              <p className="text-sm text-white/70">Simple demo block</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4 shadow-sm backdrop-blur">
                <div className="text-sm font-semibold">Example section</div>
                <p className="mt-1 text-sm text-white/70">
                  This page will expand as you add more components.
                </p>
              </div>

              <Button variant="primary" className="w-full">
                Add more components later →
              </Button>
            </CardContent>
          </Card>
        </section>

        <footer className="pt-6 text-center text-xs text-white/45">
          More components coming soon.
        </footer>
      </div>
    </main>
  );
}
