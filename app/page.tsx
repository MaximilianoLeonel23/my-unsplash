import NewPhotoForm from "@/components/NewPhotoForm";
import PhotoList from "@/components/PhotoList";

export default async function Home() {
  return (
    <main className="container py-8">
      <PhotoList />
      <NewPhotoForm />
    </main>
  );
}
