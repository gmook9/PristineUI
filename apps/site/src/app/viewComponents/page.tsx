"use client";
import Link from "next/link";
import { Button, Card, CardHeader, CardContent, Input } from "@gmook9/pristine-ui";

import LiquidChrome from "@/components/LiquidChrome";

export default function ComponentsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 px-6 py-12 text-white">

      {/* Liquid chrome background */}
      <div className="absolute inset-0 opacity-9">
        <LiquidChrome
            baseColor={[0.1, 0.1, 0.1]}
            speed={0.1}
            amplitude={0.3}
            interactive={false}
          />
        </div>

      {/* Page content */}
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
          <div className="flex shrink-0 items-center gap-3">
            <Link href="/docs">
              <Button
                variant="ghost"
                className="border border-white/10 bg-white/5 hover:bg-white/10"
              >
                Docs
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="ghost"
                className="border border-white/10 bg-white/5 hover:bg-white/10"
              >
                Home
              </Button>
            </Link>
            </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <h3 className="text-lg font-semibold">Buttons</h3>
              <p className="text-sm text-white/70">Variants + sizes</p>
            </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
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
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3">
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

          {/* Inputs card */}
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader className="space-y-1">
              <h3 className="text-lg font-semibold">Inputs</h3>
              <p className="text-sm text-white/70">Basic form control.</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Input placeholder="Email" />
                <Input placeholder="Password" type="password" />

                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </div>
              </div>
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
