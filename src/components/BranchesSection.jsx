import React from 'react';
import BranchesMap from './BranchesMap';

export default function BranchesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-sky-600 mb-8" dir="rtl">فروعنا</h2>
      </div>

      {/* full width map */}
      <BranchesMap />
    </section>
  );
}
