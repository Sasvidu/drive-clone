import type { FileItem as FileItemType } from "~/types/file-types";
import { File, Folder } from "lucide-react";
import Link from "next/link";

interface FileItemProps {
  item: FileItemType;
  onFolderClick: (id: string) => void;
}

export function FileItem({ item, onFolderClick }: FileItemProps) {
  const IconComponent = item.type === "folder" ? Folder : File;
  const itemClass =
    "flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors";

  if (item.type === "folder") {
    return (
      <button onClick={() => onFolderClick(item.id)} className={itemClass}>
        <IconComponent className="mb-2 h-12 w-12 text-blue-400" />
        <span className="break-all text-center text-sm text-gray-300">
          {item.name}
        </span>
      </button>
    );
  }

  return (
    <Link href={`#file-${item.id}`} className={itemClass}>
      <IconComponent className="mb-2 h-12 w-12 text-gray-400" />
      <span className="break-all text-center text-sm text-gray-300">
        {item.name}
      </span>
    </Link>
  );
}
