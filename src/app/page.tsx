import { FileExplorer } from "~/components/FileExplorer";
import { UploadButton } from "~/components/UploadButton";
import { mockFiles } from "~/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Drive</h1>
          <UploadButton />
        </header>
        <main>
          <FileExplorer files={mockFiles} />
        </main>
      </div>
    </div>
  );
}
