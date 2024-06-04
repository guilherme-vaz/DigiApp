export interface IVolumeInfo {
    id: string;
    title: string;
    authors?: string[];
  }
  
export interface IBook {
    id: IVolumeInfo["id"]
    items: IVolumeInfo[];
    volumeInfo: IVolumeInfo;
}

export interface IGoogleBooksResponse {
    items: IBook[];
}