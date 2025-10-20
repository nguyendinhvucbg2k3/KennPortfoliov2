'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chrome } from 'lucide-react';
// import { useAuth, useUser } from '@/firebase';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function LoginPage() {
  // const { user, isUserLoading } = useUser();
  // const auth = useAuth();
  const router = useRouter();
  
  const [user, setUser] = useState<any>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    // Simulate user loading
     setTimeout(() => {
      // To test the logged-out state, set this to null
      // To test the logged-in state, set it to a mock user object
      // setUser({ uid: 'mock-user' }); 
      setUser(null);
      setIsUserLoading(false);
    }, 500);
  }, []);


  useEffect(() => {
    if (!isUserLoading && user) {
      router.push('/admin');
    }
  }, [user, isUserLoading, router]);

  const handleSignIn = async () => {
    // if (!auth) return;
    // const provider = new GoogleAuthProvider();
    // try {
    //   await signInWithPopup(auth, provider);
    //   // The onAuthStateChanged listener in the provider will handle the redirect
    // } catch (error) {
    //   console.error("Error signing in with Google", error);
    // }
    setIsUserLoading(true);
    setTimeout(() => {
      setUser({ uid: 'mock-user', name: 'Mock User' });
      setIsUserLoading(false);
    }, 1000);
  };
  
  if (isUserLoading || user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Admin Login</CardTitle>
          <CardDescription>Sign in to manage your portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleSignIn} className="w-full" variant="outline">
            <Chrome className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
