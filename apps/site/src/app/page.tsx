import { Button, Card, CardHeader, CardContent } from "@gmook9/pristine-ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-6">
      
      <div className="w-full max-w-4xl space-y-10">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            PristineUI
          </h1>
          <p className="mx-auto max-w-xl text-lg text-zinc-600">
            Clean, composable React components built with Tailwind CSS.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="subtle">View Components</Button>
          </div>
        </section>

        {/* Component demo */}
        <section className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Primary Actions</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="primary" className="w-full">
                Primary
              </Button>
              <Button variant="danger" className="w-full">
                Danger
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Secondary</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="subtle" className="w-full">
                Subtle
              </Button>
              <Button variant="ghost" className="w-full">
                Ghost
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Disabled</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button disabled className="w-full">
                Disabled
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-zinc-500 pt-10">
          Built with React + Tailwind. Open source and free.
        </footer>
      </div>
    </main>
  );
}
