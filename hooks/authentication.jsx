'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function UseAuthGuard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/auth/login');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);
      if (decoded.exp < now) {
        localStorage.removeItem('token');
        router.replace('/auth/login');
      } else {
        setIsAuthenticated(true);
      }
    } catch (err) {
      localStorage.removeItem('token');
      router.replace('/auth/login');
    }
  }, [router]);

  return isAuthenticated;
}
