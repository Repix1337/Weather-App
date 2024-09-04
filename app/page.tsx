import ContentContainer from "./components/ContentContainer";


export default function Home() {
  return (
    <div>
      <main className="h-[30vh] flex justify-center items-center">
      <h1 className="text-6xl font-bold">Pogodynka od Repixa</h1>
      </main>
      <ContentContainer/>
    </div>
  );
}
