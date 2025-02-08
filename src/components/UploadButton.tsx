"use client";

import { Button } from "~/components/ui/button";
import { Upload } from "lucide-react";

export function UploadButton() {
  const handleUpload = () => {
    // Mock upload functionality
    alert("Upload functionality would be implemented here");
  };

  return (
    <Button
      onClick={handleUpload}
      className="bg-blue-600 text-white hover:bg-blue-700"
    >
      <Upload size={16} className="mr-2" />
      <span>Upload</span>
    </Button>
  );
}
