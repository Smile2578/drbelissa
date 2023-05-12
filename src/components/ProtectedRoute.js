import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../AuthContext';

export function ProtectedRoute({ children }) { // Updated export statement
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return children;
}
