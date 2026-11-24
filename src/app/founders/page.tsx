'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FoundersPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/about');
  }, [router]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <p className="text-slate-500 text-sm font-medium">Redirecting to About page...</p>
    </div>
  );
}
