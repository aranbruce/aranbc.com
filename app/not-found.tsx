import Button from "@/components/button";

export default function NotFound() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center gap-y-4">
      <div className="flex flex-col items-center gap-y-2 text-center">
        <h1 className="text-foreground font-semibold">
          🤷 Something went wrong
        </h1>
        <p className="text-secondary-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved
        </p>
      </div>
      <Button href="/">Go back</Button>
    </div>
  );
}
