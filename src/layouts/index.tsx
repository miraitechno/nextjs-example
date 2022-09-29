import { ReactNode } from 'react';
// import AuthGuard from '../guards/AuthGuard';
// components
import GuestLayout from './guest';
// import MembersLayout from './members';
import SomeLayout from './SomeLayout';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: 'guests' | 'members' | 'hoge';
};

export default function Layout({ variant = 'guests', children }: Props) {
  if (variant === 'hoge') {
    return <SomeLayout> {children} </SomeLayout>;
  }

  if (variant === 'guests') {
    return <GuestLayout>{children}</GuestLayout>;
  }

  return <GuestLayout>{children}</GuestLayout>;
  // return (
  //   <AuthGuard>
  //     <MembersLayout> {children} </MembersLayout>
  //   </AuthGuard>
  // );
}
