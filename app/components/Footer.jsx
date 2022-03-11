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
            <div className="mt-2 flex items-center gap-3 p-2">
              <Link
                to="https://www.instagram.com/studioaruca/"
                target="_blank"
                className="hover:text-red"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z" />
                  <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" />
                </svg>
              </Link>

              <Link
                to="https://www.twitter.com"
                target="_blank"
                className="hover:text-red"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                </svg>
              </Link>

              <Link
                to="https://www.facebook.com"
                target="_blank"
                className="hover:text-red"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
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
