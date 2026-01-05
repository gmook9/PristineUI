import { Button, Card, CardContent, CardHeader, Input } from "pristine-ui";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl p-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">PristineUI</h1>
        <p className="text-slate-300">
          Edit the library in{" "}
          <code className="text-slate-200">packages/pristineui</code> and see it
          here.
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="space-y-1">
          <h2 className="text-lg font-medium">Buttons</h2>
          <p className="text-sm text-slate-300">Variants + sizes.</p>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="space-y-1">
          <h2 className="text-lg font-medium">Inputs</h2>
          <p className="text-sm text-slate-300">Basic form control.</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <div className="flex gap-3">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
