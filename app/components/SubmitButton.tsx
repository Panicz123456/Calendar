"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Google from "@/public/google.svg";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import GitHub from "@/public/github.svg";
import { cn } from "@/lib/utils";

interface iAppProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;

  className?: string;
}

export function SubmitButton({ text, variant, className }: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className={cn("w-fit", className)} disabled variant="outline">
          <Loader2 className="size-4 mr-2 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button
          className={cn("w-fit", className)}
          type="submit"
          variant={variant}>
          {text}
        </Button>
      )}
    </>
  );
}

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={Google} alt="Google logo" className="size-4 mr-2" />
          Sign in with Google
        </Button>
      )}
    </>
  );
}

export function GitHubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={GitHub} alt="GitHub logo" className="size-4 mr-2" />
          Sign in with GitHub
        </Button>
      )}
    </>
  );
}
