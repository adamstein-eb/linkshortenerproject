import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Link2, LayoutDashboard, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Link2,
    title: "Shorten URLs",
    description:
      "Turn any long, unwieldy URL into a short, memorable link in seconds.",
  },
  {
    icon: LayoutDashboard,
    title: "Manage Links",
    description:
      "View, organize, and update all your shortened links from one clean dashboard.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description:
      "Share your short links anywhere — in emails, messages, or social media.",
  },
];

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-20 px-6 py-24">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Short links, big impact.
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Create, manage, and share shortened URLs in seconds. Sign up free and
          take control of your links.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <SignUpButton mode="modal">
            <Button size="lg">Get started for free</Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button variant="outline" size="lg">
              Sign in
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="mb-2 size-6 text-primary" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </main>
  );
}
