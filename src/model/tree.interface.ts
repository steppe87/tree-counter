export interface TreeInterface {
    type: "root";
    items: FolderInterface[] | FileInterface[];
}

export interface FolderInterface {
    type: "folder";
    items: FolderInterface[] | FileInterface[];
}

export interface FileInterface {
    type: "file";
    size: number;
}
