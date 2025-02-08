import type { FileItem } from "~/types/file-types"

export const mockFiles: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    children: [
      { id: "2", name: "Resume.pdf", type: "file" },
      { id: "3", name: "Cover Letter.docx", type: "file" },
    ],
  },
  {
    id: "4",
    name: "Photos",
    type: "folder",
    children: [
      { id: "5", name: "Vacation.jpg", type: "file" },
      { id: "6", name: "Family.png", type: "file" },
    ],
  },
  { id: "7", name: "Project.zip", type: "file" },
]

