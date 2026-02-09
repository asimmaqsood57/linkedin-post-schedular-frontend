'use client';

import { useState } from 'react';
import { useCreateScheduleMutation } from '@/lib/features/api/apiSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CATEGORIES = ['Technology', 'Business', 'Career', 'Marketing'];

export default function ScheduleCreator() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const [interval, setInterval] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [createSchedule, { isLoading }] = useCreateScheduleMutation();
  const { toast } = useToast();

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedCategories.length === 0) {
      toast({ title: 'Error', description: 'Select at least one category', variant: 'destructive' });
      return;
    }

    try {
      await createSchedule({
        name,
        description: description || undefined,
        frequency,
        interval: frequency === 'custom' ? interval : undefined,
        categories: selectedCategories,
      }).unwrap();

      toast({ title: 'Success', description: 'Schedule created successfully' });
      
      // Reset form
      setName('');
      setDescription('');
      setFrequency('daily');
      setInterval(1);
      setSelectedCategories([]);
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to create schedule', variant: 'destructive' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Recurring Schedule</CardTitle>
        <CardDescription>Set up automated posts to LinkedIn - no daily login needed</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Schedule Name</Label>
            <Input
              value={name}
              className='mt-2'
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Daily Tech Updates"
              required
            />
          </div>

          <div>
            <Label>Description/Topic (Optional)</Label>
            <Textarea
              value={description}
              className='mt-2'
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., AI innovations, startup tips, industry trends..."
              rows={3}
            />
            <p className="text-xs text-gray-500 mt-1">
              Provide context for better AI-generated content
            </p>
          </div>

          <div>
            <Label>Posting Frequency</Label>
            <div className='mt-2'>

            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            </div>

          </div>

          {frequency === 'custom' && (
            <div>
              <Label>Post Every X Days</Label>
              <Input
                type="number"
                min="1"
                value={interval}
                onChange={(e) => setInterval(parseInt(e.target.value))}
              />
            </div>
          )}

          <div>
            <Label>Post Categories</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {CATEGORIES.map(category => (
                <Button
                  key={category}
                  type="button"
                  variant={selectedCategories.includes(category) ? 'default' : 'outline'}
                  onClick={() => handleCategoryToggle(category)}
                  className="w-full"
                >
                  {category}
                </Button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              AI will randomly pick from selected categories
            </p>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Creating...' : 'Create Schedule'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}