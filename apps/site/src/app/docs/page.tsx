import Link from "next/link";
import { Button, Card, CardHeader, CardContent } from "@gmook9/pristine-ui";

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-800">
      <code className="font-mono">{children}</code>
    </pre>
  );
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900">
      <div className="mx-auto w-full max-w-4xl space-y-10">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Docs</h1>
            <p className="mt-1 text-zinc-600">
              Install PristineUI and start using components.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/components">
              <Button variant="subtle">Components</Button>
            </Link>
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
          </div>
        </header>

        <Card className="bg-white">
          <CardHeader>
            <h2 className="text-lg font-semibold">Install</h2>
            <p className="text-sm text-zinc-600">
              Add the package to your project.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock>{`pnpm add @gmook9/pristine-ui`}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <h2 className="text-lg font-semibold">Import the CSS</h2>
            <p className="text-sm text-zinc-600">
              PristineUI ships a compiled stylesheet. Import it once in your app
              layout (Next.js App Router) or main entry file.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-800">
                Next.js App Router
              </div>
              <div className="text-sm text-zinc-600">
                Add this near the top of:{" "}
                <span className="font-mono">app/layout.tsx</span>
              </div>
              <CodeBlock>{`import "@gmook9/pristine-ui/styles.css";`}</CodeBlock>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-800">
                Other setups
              </div>
              <div className="text-sm text-zinc-600">
                Import it once in your entry file (example):
              </div>
              <CodeBlock>{`import "@gmook9/pristine-ui/styles.css";`}</CodeBlock>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <h2 className="text-lg font-semibold">Use components</h2>
            <p className="text-sm text-zinc-600">
              Import and render components like any other React library.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock>{`import { Button, Card, CardHeader, CardContent } from "@gmook9/pristine-ui";
        export default function Example() {
        return (
            <Card>
            <CardHeader>
                <h3 className="text-lg font-semibold">Hello</h3>
            </CardHeader>
            <CardContent className="space-y-3">
                <Button variant="primary">Primary</Button>
                <Button variant="ghost">Ghost</Button>
            </CardContent>
            </Card>
        );
        }`}</CodeBlock>
                </CardContent>
                </Card>

                <footer className="pt-4 text-center text-xs text-zinc-500">
                If you run into styling issues, confirm the CSS import is present and
                that the package version is up to date.
                </footer>
            </div>
            </main>
        );
        }
