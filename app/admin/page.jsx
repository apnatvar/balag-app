'use client';
import React from 'react';
import UseAuthGuard from '@/hooks/authentication';

export default function AdminPage() {
  const isAuthenticated = UseAuthGuard();

  if (!isAuthenticated) return null; // Avoid rendering while checking

  return (
    <div>
      <h1>Admin - Blog Management</h1>
    </div>
  );
}