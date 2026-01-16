"use client";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardHeader,
  CardContent,
} from "@gmook9/pristine-ui";

import Aurora from "@/components/Aurora";

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/85 shadow-sm backdrop-blur">
      <code className="font-mono">{children}</code>
    </pre>
  );
}

export default function DocsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 px-6 py-12 text-white">
      <div className="pointer-events-none absolute inset-0">
        <Aurora
          colorStops={["#9b42ed", "#5c96f2", "#7bad90"]}
          blend={1}
          amplitude={0.8}
          speed={0.5}
        />
      </div>

      <div className="relative mx-auto w-full max-w-4xl space-y-10">
        <header className="flex items-start justify-between gap-6">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-300/80" />
              Docs
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Install PristineUI
            </h1>
            <p className="mt-2 text-white/70">
              Install PristineUI and start using components.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Link href="/viewComponents">
              <Button
                variant="ghost"
                className="border border-white/10 bg-white/5 hover:bg-white/10"
              >
                Components
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

        <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
          <CardHeader>
            <h2 className="text-lg font-semibold">Install</h2>
            <p className="text-sm text-white/70">Add the package to your project.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock>{`pnpm add @gmook9/pristine-ui`}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
          <CardHeader>
            <h2 className="text-lg font-semibold">Import the CSS</h2>
            <p className="text-sm text-white/70">
              PristineUI ships a compiled stylesheet. Import it once in your app layout
              (Next.js App Router) or main entry file.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-white/90">
                Next.js App Router
              </div>
              <div className="text-sm text-white/70">
                Add this near the top of:{" "}
                <span className="font-mono text-white/90">app/layout.tsx</span>
              </div>
              <CodeBlock>{`import "@gmook9/pristine-ui/styles.css";`}</CodeBlock>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-white/90">Other setups</div>
              <div className="text-sm text-white/70">
                Import it once in your entry file (example):
              </div>
              <CodeBlock>{`import "@gmook9/pristine-ui/styles.css";`}</CodeBlock>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
          <CardHeader>
            <h2 className="text-lg font-semibold">Usage Example</h2>
            <p className="text-sm text-white/70">
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

        <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
          <CardHeader>
            <h2 className="text-lg font-semibold">Available imports</h2>
            <p className="text-sm text-white/70">
              Grab only what you need. Components are grouped by category.
            </p>
          </CardHeader>
          <CardContent>
            <Accordion className="space-y-3">
              <AccordionItem value="layout">
                <AccordionTrigger
                  value="layout"
                  className="[&[aria-expanded='true']>svg]:rotate-90"
                >
                  <span>Layout</span>
                  <svg
                    className="ml-3 h-4 w-4 text-white/60 transition-transform"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 5l6 5-6 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent value="layout">
                  <CodeBlock>{`import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Divider,
} from "@gmook9/pristine-ui";`}</CodeBlock>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="navigation">
                <AccordionTrigger
                  value="navigation"
                  className="[&[aria-expanded='true']>svg]:rotate-90"
                >
                  <span>Navigation</span>
                  <svg
                    className="ml-3 h-4 w-4 text-white/60 transition-transform"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 5l6 5-6 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent value="navigation">
                  <CodeBlock>{`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@gmook9/pristine-ui";`}</CodeBlock>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="forms">
                <AccordionTrigger
                  value="forms"
                  className="[&[aria-expanded='true']>svg]:rotate-90"
                >
                  <span>Forms</span>
                  <svg
                    className="ml-3 h-4 w-4 text-white/60 transition-transform"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 5l6 5-6 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent value="forms">
                  <CodeBlock>{`import {
  Button,
  Checkbox,
  Input,
  Select,
  Switch,
  Textarea,
} from "@gmook9/pristine-ui";`}</CodeBlock>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disclosure">
                <AccordionTrigger
                  value="disclosure"
                  className="[&[aria-expanded='true']>svg]:rotate-90"
                >
                  <span>Disclosure & menus</span>
                  <svg
                    className="ml-3 h-4 w-4 text-white/60 transition-transform"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 5l6 5-6 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent value="disclosure">
                  <CodeBlock>{`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  Tooltip,
} from "@gmook9/pristine-ui";`}</CodeBlock>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="feedback">
                <AccordionTrigger
                  value="feedback"
                  className="[&[aria-expanded='true']>svg]:rotate-90"
                >
                  <span>Feedback</span>
                  <svg
                    className="ml-3 h-4 w-4 text-white/60 transition-transform"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 5l6 5-6 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent value="feedback">
                  <CodeBlock>{`import {
  Alert,
  AlertDescription,
  AlertTitle,
  Modal,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Progress,
  Skeleton,
  Toast,
  ToastAction,
  ToastDescription,
  ToastTitle,
} from "@gmook9/pristine-ui";`}</CodeBlock>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="data">
                <AccordionTrigger
                  value="data"
                  className="[&[aria-expanded='true']>svg]:rotate-90"
                >
                  <span>Data & identity</span>
                  <svg
                    className="ml-3 h-4 w-4 text-white/60 transition-transform"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 5l6 5-6 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent value="data">
                  <CodeBlock>{`import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
} from "@gmook9/pristine-ui";`}</CodeBlock>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <footer className="pt-4 text-center text-xs text-white/45">
          If you run into styling issues, confirm the CSS import is present and that
          the package version is up to date.
        </footer>
      </div>
    </main>
  );
}
