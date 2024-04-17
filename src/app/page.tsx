export default function HomePage() {

  const mockUrls = [
    "https://utfs.io/f/b1131dd2-2c65-480c-b920-8b0c0cc926df-nm33wo.jpeg",
    "https://utfs.io/f/9f412168-41b6-4d56-beb3-ad1ed6896448-hyxlfw.avif",
    "https://utfs.io/f/a701831c-2e40-489e-b053-3db2e30b7e87-jlo1ag.jpeg",
    "https://utfs.io/f/111244f7-e304-44fd-aa9a-da483c18cd51-ugu8mu.webp",
    "https://utfs.io/f/9d97e977-b511-475d-bb30-3dfd4146fc4d-hggkfj.gif"
  ];
  
  const mockData = mockUrls.map((url, index) => {
    return {
      id: index + 1,
      url: url,
    };
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">{
        [...mockData, ...mockData, ...mockData].map((data) => (
          <div key={data.id} className="w-48">
            <img src={data.url}
            />
          </div>
        ))
        }
      </div>
    </main>
  );
}
