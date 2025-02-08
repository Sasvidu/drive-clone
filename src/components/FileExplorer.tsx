"use client";

import { useState } from "react";
import type { FileItem as FileItemType } from "~/types/file-types";
import { FileItem } from "./FileItem";
import { Breadcrumb } from "./Breadcrumb";

interface FileExplorerProps {
  files: FileItemType[];
}

export function FileExplorer({ files }: FileExplorerProps) {
  const [currentFolder, setCurrentFolder] = useState<FileItemType[]>(files);
  const [folderHistory, setFolderHistory] = useState<FileItemType[][]>([]);
  const [path, setPath] = useState<string[]>([]);

  const handleFolderClick = (id: string) => {
    const clickedFolder = currentFolder.find((item) => item.id === id);
    if (clickedFolder?.children) {
      setFolderHistory([...folderHistory, currentFolder]);
      setCurrentFolder(clickedFolder.children);
      setPath([...path, clickedFolder.name]);
    }
  };

  const handleNavigate = (index: number) => {
    if (index === -1) {
      setCurrentFolder(files);
      setFolderHistory([]);
      setPath([]);
    } else {
      const newHistory = folderHistory.slice(0, index + 1);
      setCurrentFolder(newHistory[newHistory.length - 1]!);
      setFolderHistory(newHistory.slice(0, -1));
      setPath(path.slice(0, index + 1));
    }
  };

  return (
    <div className="space-y-4">
      <Breadcrumb path={path} onNavigate={handleNavigate} />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {currentFolder.map((item) => (
          <FileItem
            key={item.id}
            item={item}
            onFolderClick={handleFolderClick}
          />
        ))}
      </div>
    </div>
  );
}
