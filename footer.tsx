import Link from "next/link";
import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-2 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-2 px-4 md:px-6">
        <p className="text-sm text-muted-foreground text-center">
          © 2025 CareHaven All rights reserved.
        </p>
      </div>
    </footer>
  );
}
