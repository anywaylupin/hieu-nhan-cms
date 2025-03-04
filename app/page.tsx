import HomePage from './home-page';

export default function Page() {
  return (
    <main className="relative">
      <p className="absolute top-20 left-30 z-10 text-2xl">Nhan Portfolio & Blog — {new Date().getFullYear()}</p>

      <HomePage />
    </main>
  );
}
