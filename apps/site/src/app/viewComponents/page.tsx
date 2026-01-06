import Link from "next/link";
import { Button, Card, CardHeader, CardContent } from "@gmook9/pristine-ui";

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900">
      <div className="mx-auto w-full max-w-5xl space-y-10">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Components</h1>
            <p className="mt-1 text-zinc-600">
              Current primitives in PristineUI.
            </p>
          </div>

          <Link href="/">
            <Button variant="ghost">Back home</Button>
          </Link>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Buttons</h3>
              <p className="text-sm text-zinc-600">Variants + sizes</p>
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

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Card</h3>
              <p className="text-sm text-zinc-600">Header + content</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Card className="bg-white">
                <CardHeader>
                  <div className="text-sm font-semibold">Nested card</div>
                  <div className="text-xs text-zinc-500">
                    Composable structure
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-zinc-700">
                  Cards are just layout primitives. You bring the content.
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Layout</h3>
              <p className="text-sm text-zinc-600">Simple demo block</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl border border-zinc-200 bg-white p-4">
                <div className="text-sm font-semibold">Example section</div>
                <p className="mt-1 text-sm text-zinc-600">
                  This page will expand as you add more components.
                </p>
              </div>
              <Button variant="primary" className="w-full">
                Add more components later →
              </Button>
            </CardContent>
          </Card>
        </section>

        <footer className="pt-6 text-center text-xs text-zinc-500">
          More components coming soon.
        </footer>
      </div>
    </main>
  );
}
