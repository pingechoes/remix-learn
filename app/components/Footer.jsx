// import { Link } from 'remix'

import { Link } from 'remix';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full mx-auto px-4">
          <div className="flex flex-col items-center text-center pb-10 pt-10 lg:pt-20">
            <h4 className="text-sm font-semibold">STUDIO.ARUCA</h4>
            <ul className="mt-8">
              <li className="text-sm pb-2">
                Jl. Mulya Sari No. 3A Pekanbaru Riau
              </li>
              <li className="text-sm">
                <Link to="mailto:hello@aruca.id" className="hover:text-red">
                  hello@aruca.id
                </Link>
                <span> / </span>081287187119
              </li>
            </ul>
            <div className="mt-2 flex items-center gap-2">
              <Link to="https://www.instagram.com/studioaruca/" target="_blank">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M4.75 7.75a3 3 0 013-3h8.5a3 3 0 013 3v8.5a3 3 0 01-3 3h-8.5a3 3 0 01-3-3v-8.5z"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 8a.5.5 0 11-1 0 .5.5 0 011 0z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.25 13a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link to="https://www.youtube.com" target="_blank">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
                  />
                </svg>
              </Link>

              <Link to="/" target="_blank">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4371 20.52C17.1467 20.52 20.2754 17.2795 20.2754 12.7058C20.2754 12.1823 20.2202 11.7776 20.1429 11.3745H12.4383V14.1243H17.071C16.8813 15.2925 15.6677 17.5728 12.4383 17.5728C9.65598 17.5728 7.38356 15.3134 7.38356 12.5198C7.38356 9.72662 9.65477 7.46601 12.4383 7.46601C14.0305 7.46601 15.0881 8.13203 15.6899 8.69936L17.9051 6.61522C16.4789 5.30606 14.6419 4.52002 12.4371 4.52002C7.9277 4.52002 4.27539 8.09966 4.27539 12.5198C4.27539 16.9408 7.9277 20.52 12.4371 20.52"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <hr className="my-2 border-light--gray" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm font-semibold py-1">
                Copyright © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
