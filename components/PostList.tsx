'use client';

import { useGetPostsQuery, useDeletePostMutation } from '@/lib/features/api/apiSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

export default function PostList() {
  const { data: posts, isLoading } = useGetPostsQuery(undefined);
  const [deletePost] = useDeletePostMutation();
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id).unwrap();
      toast({ title: 'Success', description: 'Post deleted successfully' });
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete post', variant: 'destructive' });
    }
  };

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Posts</CardTitle>
        <CardDescription>Manage your generated and scheduled posts</CardDescription>
      </CardHeader>
      <CardContent>
        {posts && posts.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Scheduled</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post: any) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.category}</TableCell>
                  <TableCell className="max-w-xs truncate">{post.content}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      post.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {post.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {post.scheduledAt ? format(new Date(post.scheduledAt), 'PPp') : '-'}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center text-gray-500 py-8">No posts yet. Generate your first post above!</p>
        )}
      </CardContent>
    </Card>
  );
}