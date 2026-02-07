'use client';

import { useGetSchedulesQuery, useDeleteScheduleMutation, useToggleScheduleMutation } from '@/lib/features/api/apiSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

export default function ScheduleList() {
  const { data: schedules, isLoading } = useGetSchedulesQuery(undefined);
  const [deleteSchedule] = useDeleteScheduleMutation();
  const [toggleSchedule] = useToggleScheduleMutation();
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this schedule?')) return;
    
    try {
      await deleteSchedule(id).unwrap();
      toast({ title: 'Success', description: 'Schedule deleted' });
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' });
    }
  };

  const handleToggle = async (id: string) => {
    try {
      await toggleSchedule(id).unwrap();
      toast({ title: 'Success', description: 'Schedule updated' });
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to toggle', variant: 'destructive' });
    }
  };

  const getFrequencyLabel = (schedule: any) => {
    if (schedule.frequency === 'custom') {
      return `Every ${schedule.interval} day${schedule.interval > 1 ? 's' : ''}`;
    }
    return schedule.frequency.charAt(0).toUpperCase() + schedule.frequency.slice(1);
  };

  if (isLoading) {
    return <div>Loading schedules...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Schedules</CardTitle>
        <CardDescription>Manage your automated posting schedules</CardDescription>
      </CardHeader>
      <CardContent>
        {schedules && schedules.length > 0 ? (
          <div className="space-y-4">
            {schedules.map((schedule: any) => (
              <div key={schedule.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{schedule.name}</h3>
                      <Badge variant={schedule.isActive ? 'default' : 'secondary'}>
                        {schedule.isActive ? 'Active' : 'Paused'}
                      </Badge>
                    </div>
                    {schedule.description && (
                      <p className="text-sm text-gray-600 mt-1">{schedule.description}</p>
                    )}
                  </div>
                  <Switch
                    checked={schedule.isActive}
                    onCheckedChange={() => handleToggle(schedule.id)}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {schedule.categories.map((cat: string) => (
                    <Badge key={cat} variant="outline">{cat}</Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      <span className="font-medium">Frequency:</span> {getFrequencyLabel(schedule)}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Next post:</span>{' '}
                      {format(new Date(schedule.nextRunAt), 'PPp')}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Posts created:</span> {schedule._count?.posts || 0}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(schedule.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">
            No schedules yet. Create your first automated schedule above!
          </p>
        )}
      </CardContent>
    </Card>
  );
}