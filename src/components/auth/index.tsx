import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { AdminMenu } from './AdminMenu';

export async function Auth() {
  const user = await currentUser();

  const isAdmin = user?.privateMetadata?.isAdmin;

  return (
    <div>
      <SignedIn>{isAdmin ? <AdminMenu /> : <UserButton />}</SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
