import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await currentUser();
  const isAdmin = user?.privateMetadata?.isAdmin;
  if (!isAdmin) redirect('/');
  return <div>{children}</div>;
}
export default Layout;
