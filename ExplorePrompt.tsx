// components/ExplorePrompt.tsx
"use client";

import { useSession } from "next-auth/react";

export default function ExplorePrompt() {
  const { data: session } = useSession();
  const isSignedIn = !!session;

  return (
    <div className="p-4 text-center">
      {isSignedIn ? (
        <p className="text-green-600">Welcome, {session.user?.name}!</p>
      ) : (
        <p className="text-red-600">Scroll to explore more features. Please sign in to continue.</p>
      )}
    </div>
  );
}
