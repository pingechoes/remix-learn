import React from 'react';
import { Outlet } from 'remix';

function Works() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default Works;
