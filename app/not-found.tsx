import Button from "@/components/button";

export default function NotFound() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center gap-y-4">
      <div className="flex flex-col items-center gap-y-2 text-center">
        <h1 className="text-3xl font-bold">🤷 Something went wrong</h1>
        <p className="text-secondary">
          The page you're looking for doesn't exist or has been moved
        </p>
      </div>
      <Button href="/">Go back</Button>
    </div>
  );
}
