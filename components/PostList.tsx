"use client";

import {
  useGetPostsQuery,
  useDeletePostMutation,
  usePublishPostMutation,
} from "@/lib/features/api/apiSlice";
import { Button } from "@/components/ui/button";
import { formatInTimeZone } from "date-fns-tz";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Badge } from "./ui/badge";

export default function PostList() {
  const { data: posts, isLoading } = useGetPostsQuery(undefined);
  const [deletePost] = useDeletePostMutation();
  const [publishPost] = usePublishPostMutation();
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id).unwrap();
      toast({ title: "Success", description: "Post deleted successfully" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
    }
  };

  const handlePublish = async (id: string) => {
    try {
      await publishPost(id).unwrap();
      toast({ title: "Success", description: "Post published to LinkedIn" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.data?.message || "Failed to publish post",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Posts</CardTitle>
        <CardDescription>
          Manage your generated and scheduled posts
        </CardDescription>
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
                  <TableCell className="max-w-xs truncate">
                    {post.content}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        post.status === "published"
                          ? "bg-green-100 text-green-800"
                          : post.status === "scheduled"
                            ? "bg-blue-100 text-blue-800"
                            : post.status === "failed"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {post.scheduledAt
                      ? formatInTimeZone(
                          new Date(post.scheduledAt),
                          Intl.DateTimeFormat().resolvedOptions().timeZone,
                          "PPp",
                        )
                      : "-"}
                  </TableCell>
                  <TableCell className="font-medium">
                    {post.category}
                    {post.schedule && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Auto: {post.schedule.name}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {(post.status === "draft" ||
                        post.status === "scheduled") && (
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handlePublish(post.id)}
                        >
                          Publish Now
                        </Button>
                      )}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center text-gray-500 py-8">
            No posts yet. Generate your first post above!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
