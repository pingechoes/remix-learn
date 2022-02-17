import { Outlet } from 'remix';

function Works() {
  return (
    <div className="relative mx-10vw">
      <Outlet />
    </div>
    
  );
}

export default Works;
