import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardContent } from "@gmook9/pristine-ui";

import OrbBackground from "@/components/OrbBackground";
import InstallPill from "@/components/InstallPill";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <OrbBackground />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <TopNav />

        {/* hero */}
        <section className="flex flex-1 items-center justify-center py-16 sm:py-24">
          <div className="w-full max-w-3xl text-center">
            <div className="mx-auto mb-8 flex items-center justify-center">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-sm backdrop-blur">
                <Image
                  src="/PristineUI_Logo5.png"
                  alt="PristineUI logo"
                  width={350}
                  height={300}
                  priority
                />
              </div>
            </div>

            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-300/80" />
              Tailwind-first • Minimal • OSS
            </div>

            {/* FIXED headline + centering + no clipping */}
            <div className="mx-auto flex max-w-2xl flex-col items-center">
              <h1 className="w-full pb-1 text-center text-5xl font-semibold tracking-tight leading-[1.05] sm:text-6xl">
                <span className="mb-2 block">Clean components.</span>
              </h1>

              <p className="mt-5 w-full max-w-xl text-center text-lg leading-relaxed text-white/70">
                A minimal React component library with a crisp Tailwind-first
                style. Built for fast shipping and clean UIs.
              </p>
            </div>

            {/* buttons */}
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/viewComponents" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto px-6 py-2.5 font-medium
                    bg-gradient-to-r from-sky-500 to-indigo-500
                    shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_30px_rgba(59,130,246,0.25)]
                    hover:brightness-110 active:brightness-95
                    transition"
                >
                  Browse components
                </Button>
              </Link>

              <a
                href="https://www.npmjs.com/package/@gmook9/pristine-ui"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="ghost"
                  className="w-full sm:w-auto px-6 py-2.5 font-medium
                    border border-white/10 bg-white/5
                    hover:bg-white/10 hover:border-white/15
                    shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
                    transition"
                >
                  npm package
                </Button>
              </a>
            </div>

            <InstallPill />

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Card className="border border-white/10 bg-white/5 backdrop-blur">
                <CardContent className="p-5 text-left">
                  <div className="text-sm font-semibold">Simple</div>
                  <p className="mt-1 text-sm text-white/70">
                    A small set of primitives that compose well.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-white/10 bg-white/5 backdrop-blur">
                <CardContent className="p-5 text-left">
                  <div className="text-sm font-semibold">Tailwind-ready</div>
                  <p className="mt-1 text-sm text-white/70">
                    Utility-first styling that’s easy to customize.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-white/10 bg-white/5 backdrop-blur">
                <CardContent className="p-5 text-left">
                  <div className="text-sm font-semibold">Open source</div>
                  <p className="mt-1 text-sm text-white/70">
                    Free to use, built in public.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="pb-4 text-center text-xs text-white/40">
          © {new Date().getFullYear()} PristineUI • Built with React + Tailwind
        </footer>
      </div>
    </main>
  );
}
