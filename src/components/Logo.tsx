import React from 'react';
import { Code2 } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Code2 size={32} className="text-gold-400" />
      <span className="text-2xl font-bold text-white">SAS TechSoft</span>
    </div>
  );
};