'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useRegisterMutation } from '@/lib/features/api/apiSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface ValidationErrors {
  name?: string;
  email?: string;
  password?: string;
  general?: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [register, { isLoading, error: apiError }] = useRegisterMutation();
  const router = useRouter();
  const { toast } = useToast();

  // Validation rules
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        if (value.length > 50) return 'Name must be less than 50 characters';
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name can only contain letters and spaces';
        return '';
      
      case 'email':
        if (!value) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 6) return 'Password must be at least 6 characters';
        if (value.length > 50) return 'Password must be less than 50 characters';
        if (!/(?=.*[a-zA-Z])/.test(value)) return 'Password must contain at least one letter';
        if (!/(?=.*\d)/.test(value)) return 'Password must contain at least one number';
        return '';
      
      default:
        return '';
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) {
        newErrors[field as keyof ValidationErrors] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear field error when user starts typing
    if (errors[id as keyof ValidationErrors]) {
      const newErrors = { ...errors };
      delete newErrors[id as keyof ValidationErrors];
      setErrors(newErrors);
    }
  };

  // Handle blur events
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    
    // Validate field on blur
    const error = validateField(id, formData[id as keyof typeof formData]);
    if (error) {
      setErrors(prev => ({ ...prev, [id]: error }));
    } else {
      // Remove error if field is now valid
      const newErrors = { ...errors };
      delete newErrors[id as keyof ValidationErrors];
      setErrors(newErrors);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);
    
    // Validate form
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fix the errors in the form',
        variant: 'destructive'
      });
      return;
    }
    
    try {
      const result = await register(formData).unwrap();
      localStorage.setItem('token', result.token);
      toast({ 
        title: 'Success', 
        description: 'Account created successfully' 
      });
      router.push('/dashboard');
    } catch (error: any) {
      // Handle API errors
      let errorMessage = 'Registration failed';
      
      if (error?.data?.message) {
        errorMessage = error.data.message;
      } else if (error?.status === 409) {
        errorMessage = 'Email already exists. Please use a different email.';
      } else if (error?.status === 400) {
        errorMessage = 'Invalid registration data. Please check your inputs.';
      } else if (error?.status >= 500) {
        errorMessage = 'Server error. Please try again later.';
      }
      
      setErrors(prev => ({ ...prev, general: errorMessage }));
      toast({ 
        title: 'Error', 
        description: errorMessage,
        variant: 'destructive'
      });
    }
  };

  // Reset errors when form data changes
  useEffect(() => {
    if (apiError) {
      setErrors(prev => ({ ...prev, general: '' }));
    }
  }, [formData, apiError]);

  // Check if form is valid for enabling submit button
  const isFormValid = () => {
    // Validate each field individually
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const passwordError = validateField('password', formData.password);
    
    // Form is valid if all fields have values and no validation errors
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.password.trim() !== '' &&
      !nameError &&
      !emailError &&
      !passwordError
    );
  };

  // Helper function to check if field should show error
  const shouldShowError = (fieldName: string): boolean => {
    return !!errors[fieldName as keyof ValidationErrors] && !!touched[fieldName];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Sign up to start scheduling posts</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} noValidate>
          <CardContent className="space-y-4">
            {/* General Error Alert */}
            {errors.general && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm flex items-start gap-2">
                <svg 
                  className="h-4 w-4 mt-0.5 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.928-.833-2.698 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z" 
                  />
                </svg>
                <span>{errors.general}</span>
              </div>
            )}
            
            {/* Name Field */}
            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="name">Name</Label>
                {shouldShowError('name') && (
                  <span className="text-sm text-red-500">
                    {errors.name}
                  </span>
                )}
              </div>
              <Input
                id="name"
                type="text"
                className={`mt-2 ${shouldShowError('name') ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="John Doe"
                disabled={isLoading}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {!shouldShowError('name') && (
                <p className="text-xs text-gray-500 mt-1">
                  Letters and spaces only
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="email">Email</Label>
                {shouldShowError('email') && (
                  <span className="text-sm text-red-500">
                    {errors.email}
                  </span>
                )}
              </div>
              <Input
                id="email"
                type="email"
                className={`mt-2 ${shouldShowError('email') ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="you@example.com"
                disabled={isLoading}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {!shouldShowError('email') && (
                <p className="text-xs text-gray-500 mt-1">
                  We'll never share your email
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                {shouldShowError('password') && (
                  <span className="text-sm text-red-500">
                    {errors.password}
                  </span>
                )}
              </div>
              <Input
                id="password"
                type="password"
                className={`mt-2 ${shouldShowError('password') ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                minLength={6}
                maxLength={50}
                placeholder="••••••••"
                disabled={isLoading}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
              {!shouldShowError('password') && (
                <div className="text-xs text-gray-500 mt-1 space-y-1">
                  <p>• At least 6 characters</p>
                  <p>• Contains letters and numbers</p>
                  <p>• Maximum 50 characters</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 mt-4">
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || !isFormValid()}
            >
              {isLoading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                  Creating account...
                </>
              ) : 'Sign Up'}
            </Button>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{' '}
              <Link 
                href="/login" 
                className="text-blue-600 hover:underline font-medium"
                onClick={(e) => isLoading && e.preventDefault()}
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}