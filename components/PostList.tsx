"use client";

import { useState } from "react";
import {
  useGetPostsQuery,
  useGetPostQuery,
  useUpdatePostMutation,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Eye, Trash2, Send } from "lucide-react";

// Separate component so useGetPostQuery is only called when a post is selected
function PostViewModal({
  postId,
  open,
  onClose,
}: {
  postId: string;
  open: boolean;
  onClose: () => void;
}) {
  const { data: post, isLoading } = useGetPostQuery(postId, { skip: !postId });
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const { toast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [editedScheduledAt, setEditedScheduledAt] = useState("");

  // Sync edit state when post loads
  const handleStartEdit = () => {
    if (!post) return;
    setEditedContent(post.content);
    setEditedCategory(post.category);
    setEditedScheduledAt(
      post.scheduledAt
        ? new Date(post.scheduledAt).toISOString().slice(0, 16)
        : ""
    );
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (!post) return;
    try {
      await updatePost({
        id: post.id,
        data: {
          content: editedContent,
          category: editedCategory,
          scheduledAt: editedScheduledAt
            ? new Date(editedScheduledAt).toISOString()
            : undefined,
        },
      }).unwrap();
      toast({ title: "Success", description: "Post updated successfully" });
      setIsEditing(false);
    } catch {
      toast({
        title: "Error",
        description: "Failed to update post",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    setIsEditing(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isEditing ? "Edit Post" : "View Post"}
            {post && (
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-normal ${
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
            )}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Make changes to your post below."
              : "Full post details."}
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="py-8 text-center text-gray-500">Loading post...</div>
        ) : post ? (
          <div className="space-y-4 py-2">
            {/* Category */}
            <div className="space-y-1.5">
              <Label>Category</Label>
              {isEditing ? (
                <Select
                  value={editedCategory}
                  onValueChange={setEditedCategory}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Career">Career</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <p className="text-sm text-gray-700 bg-gray-50 rounded-md px-3 py-2">
                  {post.category}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="space-y-1.5">
              <Label>
                Content{" "}
                {isEditing && (
                  <span className="text-gray-400 font-normal">
                    ({editedContent.length} characters)
                  </span>
                )}
              </Label>
              {isEditing ? (
                <Textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  rows={10}
                  className="mt-1"
                />
              ) : (
                <p className="text-sm text-gray-700 bg-gray-50 rounded-md px-3 py-2 whitespace-pre-wrap leading-relaxed">
                  {post.content}
                </p>
              )}
            </div>

            {/* Schedule */}
            {(post.status === "draft" ||
              post.status === "scheduled" ||
              isEditing) && (
              <div className="space-y-1.5">
                <Label>Scheduled At (Your Local Time)</Label>
                {isEditing ? (
                  <Input
                    type="datetime-local"
                    value={editedScheduledAt}
                    onChange={(e) => setEditedScheduledAt(e.target.value)}
                    className="mt-1"
                  />
                ) : (
                  <p className="text-sm text-gray-700 bg-gray-50 rounded-md px-3 py-2">
                    {post.scheduledAt
                      ? formatInTimeZone(
                          new Date(post.scheduledAt),
                          Intl.DateTimeFormat().resolvedOptions().timeZone,
                          "PPp"
                        )
                      : "Not scheduled"}
                  </p>
                )}
              </div>
            )}

            {/* Meta info (read-only) */}
            {!isEditing && (
              <div className="grid grid-cols-2 gap-3 pt-2 border-t">
                {post.publishedAt && (
                  <div className="space-y-0.5">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      Published At
                    </p>
                    <p className="text-sm text-gray-700">
                      {formatInTimeZone(
                        new Date(post.publishedAt),
                        Intl.DateTimeFormat().resolvedOptions().timeZone,
                        "PPp"
                      )}
                    </p>
                  </div>
                )}
                {post.schedule && (
                  <div className="space-y-0.5">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      Auto Schedule
                    </p>
                    <p className="text-sm text-gray-700">{post.schedule.name}</p>
                  </div>
                )}
                <div className="space-y-0.5">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Created
                  </p>
                  <p className="text-sm text-gray-700">
                    {formatInTimeZone(
                      new Date(post.createdAt),
                      Intl.DateTimeFormat().resolvedOptions().timeZone,
                      "PPp"
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : null}

        <DialogFooter className="gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancelEdit}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={isUpdating}>
                {isUpdating ? "Saving..." : "Save Changes"}
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={handleClose}>
                Close
              </Button>
              {post &&
                post.status !== "published" &&
                post.status !== "failed" && (
                  <Button variant="outline" onClick={handleStartEdit}>
                    <Pencil className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                )}
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function PostList() {
  const { data: posts, isLoading } = useGetPostsQuery(undefined);
  const [deletePost] = useDeletePostMutation();
  const [publishPost] = usePublishPostMutation();
  const { toast } = useToast();

  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleView = (id: string) => {
    setSelectedPostId(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPostId(null);
  };

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id).unwrap();
      toast({ title: "Success", description: "Post deleted successfully" });
    } catch {
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

  if (isLoading) return <div>Loading posts...</div>;

  return (
    <>
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
                    <TableCell className="font-medium">
                      {post.category}
                      {post.schedule && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          Auto: {post.schedule.name}
                        </Badge>
                      )}
                    </TableCell>
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
                            "PPp"
                          )
                        : "-"}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleView(post.id)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        {(post.status === "draft" ||
                          post.status === "scheduled") && (
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => handlePublish(post.id)}
                          >
                            <Send className="w-4 h-4 mr-1" />
                            Publish
                          </Button>
                        )}
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
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

      {selectedPostId && (
        <PostViewModal
          postId={selectedPostId}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}