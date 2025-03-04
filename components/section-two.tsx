'use client';

export default function SectionTwo() {
  return (
    <section className="flex h-screen w-screen flex-shrink-0 flex-col items-start justify-center bg-white px-16">
      <p className="text-lg">Portfolio Preview — 2023</p>
      <h1 className="mt-4 text-4xl font-bold">
        Share your passion and drive for your field here. What is your unique point of view?
      </h1>
      <p className="mt-4 max-w-2xl text-lg">
        Introduce yourself by stating your name and role. What are the key driving factors that keep you passionate in
        your profession? Don’t forget to include any additional roles or responsibilities you have outside of your
        primary job, such as mentoring or community service.
      </p>
      <h2 className="mt-6 text-2xl font-semibold">Who I’ve worked with</h2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {Array(8)
          .fill('Logo here')
          .map((logo, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-xl">⚙️</span> {logo}
            </div>
          ))}
      </div>
    </section>
  );
}
