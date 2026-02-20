
'use client';

import { useState } from 'react';
import { useGeneratePostMutation, useCreatePostMutation } from '@/lib/features/api/apiSlice';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function PostGenerator() {
  const [category, setCategory] = useState('Technology');
  const [instructions, setInstructions] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [generatePost, { isLoading: isGenerating }] = useGeneratePostMutation();
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const { toast } = useToast();

  const handleGenerate = async () => {
    try {
      const result = await generatePost({ category, instructions: instructions.trim() || undefined }).unwrap();
      setGeneratedContent(result.content);
      toast({ title: 'Success', description: 'Post generated successfully' });
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to generate post', variant: 'destructive' });
    }
  };

  const handleSchedule = async () => {
    if (!generatedContent) {
      toast({ title: 'Error', description: 'Please generate a post first', variant: 'destructive' });
      return;
    }

    try {
      let scheduledAtUTC;
      if (scheduledDate) {
        const localDate = new Date(scheduledDate);
        scheduledAtUTC = localDate.toISOString();
      }

      await createPost({
        content: generatedContent,
        category,
        scheduledAt: scheduledAtUTC,
        status: scheduledDate ? 'scheduled' : 'draft',
      }).unwrap();

      toast({
        title: 'Success',
        description: scheduledDate ? 'Post scheduled successfully' : 'Post saved as draft',
      });

      setGeneratedContent('');
      setScheduledDate('');
      setInstructions('');
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save post', variant: 'destructive' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate New Post</CardTitle>
        <CardDescription>Use AI to create engaging LinkedIn content</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Category</Label>
          <div className="mt-2">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Career">Career</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label>Instructions (Optional)</Label>
          <Textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="e.g. Write about the impact of AI on software jobs, use a motivational tone, include a call to action..."
            rows={3}
            className="mt-2"
          />
          <p className="text-xs text-gray-500 mt-1">
            Describe what you want the post to be about. The more specific, the better.
          </p>
        </div>

        <Button onClick={handleGenerate} disabled={isGenerating} className="w-full">
          {isGenerating ? 'Generating...' : 'Generate Post'}
        </Button>

        {generatedContent && (
          <>
            <div>
              <Label>Generated Content ({generatedContent.length} characters)</Label>
              <Textarea
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
                rows={8}
                className="mt-2"
              />
            </div>

            <div>
              <Label>Schedule Date & Time (Optional) - Your Local Time</Label>
              <Input
                type="datetime-local"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                className="mt-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                Select time in your local timezone. It will be converted automatically.
              </p>
            </div>

            <Button onClick={handleSchedule} disabled={isCreating} className="w-full">
              {isCreating ? 'Saving...' : scheduledDate ? 'Schedule Post' : 'Save as Draft'}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}