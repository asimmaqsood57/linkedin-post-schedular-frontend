'use client';

import { useState, useEffect } from 'react';
import { useGetLinkedInAuthUrlQuery, useGetLinkedInAccountQuery, useDisconnectLinkedInMutation } from '@/lib/features/api/apiSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function LinkedInConnect() {
  const { data: authUrlData } = useGetLinkedInAuthUrlQuery(undefined);
  const { data: account, refetch } = useGetLinkedInAccountQuery(undefined);
  const [disconnect] = useDisconnectLinkedInMutation();
  const { toast } = useToast();
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'linkedin-auth-success') {
        toast({ title: 'Success', description: 'LinkedIn connected successfully' });
        refetch();
        setIsConnecting(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [refetch, toast]);

  const handleConnect = () => {
    if (authUrlData?.authUrl) {
      setIsConnecting(true);
      const width = 600;
      const height = 700;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      
      window.open(
        authUrlData.authUrl,
        'LinkedIn Auth',
        `width=${width},height=${height},left=${left},top=${top}`
      );
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect(undefined).unwrap();
      toast({ title: 'Success', description: 'LinkedIn disconnected' });
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to disconnect', variant: 'destructive' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>LinkedIn Connection</CardTitle>
        <CardDescription>Connect your LinkedIn account to publish posts</CardDescription>
      </CardHeader>
      <CardContent>
        {account ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {account.profileUrl && (
                <img src={account.profileUrl} alt={account.name} className="w-12 h-12 rounded-full" />
              )}
              <div>
                <p className="font-medium">{account.name}</p>
                <p className="text-sm text-gray-500">{account.email}</p>
              </div>
            </div>
            <Button variant="destructive" onClick={handleDisconnect}>
              Disconnect LinkedIn
            </Button>
          </div>
        ) : (
          <Button onClick={handleConnect} disabled={isConnecting}>
            {isConnecting ? 'Connecting...' : 'Connect LinkedIn'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}