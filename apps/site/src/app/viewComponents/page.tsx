"use client";
import * as React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  Input,
  Modal,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Progress,
  Select,
  Skeleton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  Textarea,
  Toast,
  ToastAction,
  ToastDescription,
  ToastTitle,
  Tooltip,
} from "@gmook9/pristine-ui";

import LiquidChrome from "@/components/LiquidChrome";

function SectionTitle({
  label,
  imports,
}: {
  label: string;
  imports: string;
}) {
  return (
    <Tooltip text={`Import: ${imports}`}>
      <h3 className="text-lg font-semibold">{label}</h3>
    </Tooltip>
  );
}

export default function ComponentsPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

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
              <SectionTitle label="Buttons" imports="Button" />
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
              <SectionTitle
                label="Card"
                imports="Card, CardHeader, CardContent, CardFooter"
              />
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
              <SectionTitle label="Inputs" imports="Input" />
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

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle label="Badges & Tags" imports="Badge, Tag" />
              <p className="text-sm text-white/70">Status + labels</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Tag>Design</Tag>
                <Tag variant="primary">Build</Tag>
                <Tag variant="success">Ship</Tag>
                <Tag variant="warning">Review</Tag>
                <Tag variant="danger">Blocker</Tag>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Alerts"
                imports="Alert, AlertTitle, AlertDescription"
              />
              <p className="text-sm text-white/70">Messaging</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert>
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>Default alert message.</AlertDescription>
              </Alert>
              <Alert variant="success">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Changes saved successfully.</AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>Double-check before you continue.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Avatars"
                imports="Avatar, AvatarImage, AvatarFallback"
              />
              <p className="text-sm text-white/70">Image + fallback</p>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <Avatar size="sm">
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Switch & Checkbox"
                imports="Switch, Checkbox"
              />
              <p className="text-sm text-white/70">Toggles</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Switch defaultChecked />
                <Switch />
                <Switch disabled />
              </div>
              <div className="flex flex-col gap-2">
                <Checkbox label="Email me updates" defaultChecked />
                <Checkbox label="Enable notifications" />
                <Checkbox label="Disabled option" disabled />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle label="Progress" imports="Progress" />
              <p className="text-sm text-white/70">Completion states</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={25} />
              <Progress value={60} />
              <Progress value={90} />
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle label="Textarea" imports="Textarea" />
              <p className="text-sm text-white/70">Multi-line input</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea placeholder="Write a message..." />
              <Textarea rows={6} placeholder="Longer content..." />
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle label="Skeleton" imports="Skeleton" />
              <p className="text-sm text-white/70">Loading states</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="w-52" />
              <Skeleton className="w-72" variant="subtle" />
              <div className="grid grid-cols-3 gap-2">
                <Skeleton className="h-12 w-full rounded-2xl" />
                <Skeleton className="h-12 w-full rounded-2xl" variant="subtle" />
                <Skeleton className="h-12 w-full rounded-2xl" />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Breadcrumb"
                imports="Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator"
              />
              <p className="text-sm text-white/70">Navigation hints</p>
            </CardHeader>
            <CardContent>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Library</BreadcrumbLink>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <span className="text-white">Data</span>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle label="Divider" imports="Divider" />
              <p className="text-sm text-white/70">Section separation</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-white/70">
              <div>Section One</div>
              <Divider />
              <div className="flex items-center gap-4">
                <span>Left</span>
                <Divider orientation="vertical" className="h-6" />
                <span>Right</span>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Tabs"
                imports="Tabs, TabsList, TabsTrigger, TabsContent"
              />
              <p className="text-sm text-white/70">Content switching</p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  Summary metrics and highlights live here.
                </TabsContent>
                <TabsContent value="details">
                  Deeper configuration and metadata details.
                </TabsContent>
                <TabsContent value="activity">
                  Activity feed and latest updates.
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Accordion"
                imports="Accordion, AccordionItem, AccordionTrigger, AccordionContent"
              />
              <p className="text-sm text-white/70">Expandable items</p>
            </CardHeader>
            <CardContent>
              <Accordion defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger value="item-1">
                    What is PristineUI?
                  </AccordionTrigger>
                  <AccordionContent value="item-1">
                    A lightweight set of UI primitives for fast product work.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger value="item-2">
                    Can I customize styles?
                  </AccordionTrigger>
                  <AccordionContent value="item-2">
                    Yes. Override classes or wrap components for your theme.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Dropdown & Select"
                imports="Dropdown, DropdownTrigger, DropdownContent, DropdownItem, Select"
              />
              <p className="text-sm text-white/70">Menus + native select</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Dropdown>
                <DropdownTrigger>Actions</DropdownTrigger>
                <DropdownContent>
                  <DropdownItem>View profile</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Sign out</DropdownItem>
                </DropdownContent>
              </Dropdown>
              <Select defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="alpha">Alpha</option>
                <option value="bravo">Bravo</option>
                <option value="charlie">Charlie</option>
              </Select>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle label="Tooltip" imports="Tooltip" />
              <p className="text-sm text-white/70">Hover hints</p>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Tooltip text="Top tooltip">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white">
                  Top
                </span>
              </Tooltip>
              <Tooltip side="right" text="Right tooltip">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white">
                  Right
                </span>
              </Tooltip>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Table"
                imports="Table, TableHeader, TableBody, TableRow, TableHead, TableCell"
              />
              <p className="text-sm text-white/70">Data layout</p>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Elmo O'Connor</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">$120.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Casey Bucco</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell className="text-right">$86.50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Martina Gomez</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">$54.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Toast"
                imports="Toast, ToastTitle, ToastDescription, ToastAction"
              />
              <p className="text-sm text-white/70">Status message</p>
            </CardHeader>
            <CardContent>
              <Toast>
                <ToastTitle>Project updated</ToastTitle>
                <ToastDescription>
                  Your changes were saved successfully.
                </ToastDescription>
                <div className="mt-3 flex justify-end">
                  <ToastAction>Undo</ToastAction>
                </div>
              </Toast>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <CardHeader>
              <SectionTitle
                label="Modal"
                imports="Modal, ModalHeader, ModalTitle, ModalDescription, ModalFooter"
              />
              <p className="text-sm text-white/70">Overlay dialog</p>
            </CardHeader>
            <CardContent>
              <Button variant="primary" onClick={() => setModalOpen(true)}>
                Open modal
              </Button>
              <Modal open={modalOpen} onOpenChange={setModalOpen}>
                <ModalHeader>
                  <ModalTitle>Invite your team</ModalTitle>
                  <ModalDescription>
                    Send an invite to collaborate on this workspace.
                  </ModalDescription>
                </ModalHeader>
                <div className="mt-4 text-sm text-white/70">
                  You can change permissions later.
                </div>
                <ModalFooter>
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setModalOpen(false)}>
                    Send invite
                  </Button>
                </ModalFooter>
              </Modal>
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
