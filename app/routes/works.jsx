import { Outlet } from 'remix';

function Works() {
  return (
    <div className="min-h-full">
      <Outlet />
    </div>
  );
}

export default Works;
