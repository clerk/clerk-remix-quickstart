import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/remix';

export default function Index() {
  return (
    <div>
      <h1>Index Route</h1>
      <SignedIn>
        <p>You are signed in!</p>
        <UserButton />

        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <p>You are signed out</p>

        <SignInButton />

        <SignUpButton />
      </SignedOut>
    </div>
  );
}
