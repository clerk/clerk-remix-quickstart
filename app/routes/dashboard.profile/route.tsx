import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/remix";

export default function DashboardProfileRoute() {
  const { user } = useUser();

  return (
    <div>
      <h1>Profile</h1>
      <SignedIn>
        <style>{`pre { padding: 8px; white-space: pre-wrap; word-break: break-word; }`}</style>

        <pre>{JSON.stringify(user, null, 2)}</pre>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
