'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chrome } from 'lucide-react';

// Mock user authentication
const useMockUser = () => {
    // For this static version, we'll assume the user is not logged in on this page
    // until they "log in".
    return { user: null, isUserLoading: false };
};


export default function LoginPage() {
  const { user, isUserLoading } = useMockUser();
  const router = useRouter();

  useEffect(() => {
    // If we were using real auth, we'd check if a user is already logged in
    // and redirect. For now, this page is just a gateway.
  }, []);

  const handleSignIn = async () => {
    // In a real app, this would trigger the Google sign-in popup.
    // For this static version, we'll just redirect to the admin page
    // as if the login was successful.
    console.log("Simulating sign in...");
    router.push('/admin');
  };
  
  if (isUserLoading) {
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
