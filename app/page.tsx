export const getPhotos = async (page?: string) => {
  const response = await fetch(
    `https://picsum.photos/v2/list${page && "?page=" + page}&limit=5`
  );

  if (!response) console.log("No se encuentran imágenes");

  return response.json();
};

interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export default async function Home() {
  const grid1: Photo[] = await getPhotos("1");
  const grid2: Photo[] = await getPhotos("2");
  const grid3: Photo[] = await getPhotos("3");

  return (
    <main className="container py-8">
      <section className="grid grid-cols-3 grid-masonry gap-x-8">
        <div className="flex flex-col gap-y-8">
          {grid1 &&
            grid1.map((photo, idx) => {
              return (
                <div key={idx}>
                  <img
                    src={photo.download_url}
                    alt="photo"
                    className="rounded-2xl h-auto max-w-full"
                  />
                </div>
              );
            })}
        </div>
        <div className="flex flex-col gap-y-8">
          {grid2 &&
            grid2.map((photo, idx) => {
              return (
                <div key={idx}>
                  <img
                    src={photo.download_url}
                    alt="photo"
                    className="rounded-2xl h-auto max-w-full"
                  />
                </div>
              );
            })}
        </div>
        <div className="flex flex-col gap-y-8">
          {grid3 &&
            grid3.map((photo, idx) => {
              return (
                <div key={idx}>
                  <img
                    src={photo.download_url}
                    alt="photo"
                    className="rounded-2xl h-auto max-w-full"
                  />
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}
