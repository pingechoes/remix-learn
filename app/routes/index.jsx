export default function Index() {
  return (
    <>
      <main>
        <div className="min-h-screen w-full px-2 py-5 my-8">
          <div className="container max-w-4xl lg:max-w-6xl mx-auto px-4 flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl tracking-wide  py-4 flex flex-col justify-center items-center lg:flex-row">
              <div className="py-2">ARCHITECTURE.</div>
              <div className="py-2">LANDSCAPE.</div>
              <div className="py-2">INTERIOR.</div>
            </h1>
            <img
              className="object-contain md:max-w-4xl"
              src="https://images.unsplash.com/photo-1516730099373-6afd7bcc8135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
        </div>
      </main>
    </>
  );
}
