export interface Url {
  type: 'Url';
  id: string;
  url: string;
  name: string;
  createdAt: number;
}

export interface Image {
  type: 'Image';
  id: string;
  src: string;
  alt: string;
  createdAt: number;
}

export interface File extends Blob {
  lastModified: number;
  name: string;
  webkitRelativePath: string;
}
