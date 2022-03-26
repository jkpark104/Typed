export interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
  maxFiles?: number;
}
