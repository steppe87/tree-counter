import { FileInterface, FolderInterface, TreeInterface } from "./model/tree.interface";
console.log("# Reads Tree as JSON-File");

import fs from "fs";
const file = "./data/tree.json";
let fullSize: number;
let tree: TreeInterface;

// Read Tree File
try {
    tree = JSON.parse(fs.readFileSync(file, "utf8"));
} catch (error) {
    console.log(error.message);
    // no tree? exit here!
    process.exit();
}

// calulate size of all files
fullSize = findSizeOfFile(tree.items);

console.log("# Size of all Files: ", fullSize);

/**
 * Counts the size of all files through the tree (Recursively)
 */
function findSizeOfFile(data: FolderInterface[] | FileInterface[]): number {
    let result = 0;
    data.forEach((item: FolderInterface | FileInterface) => {
        switch (item.type) {
            case "folder":
                result += findSizeOfFile(item.items);
                break;
            case "file":
                result += item.size;
        }
    });
    return result;
}
