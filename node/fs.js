const fs = require("fs");
const path = require("path");

// Create file: Name of file, content, callback
fs.writeFile("content.txt", "This is some content", (error) => {
  if (error) throw error;

  console.log("The file was created");
});

// Current working directory
const filePath = path.join(process.cwd(), "content.txt");

// Read a file: file path, callback
fs.readFile(filePath, (error, content) => {
  if (error) throw error;

  console.log(content.toString());
});

// Add content to file
fs.appendFile(filePath, "\nNew content", (error) => {
  if (error) throw error;

  console.log("Content added to file");
});

// Remove a file
fs.unlink(filePath, (error) => {
  if (error) throw error;

  console.log("File deleted");
});

// Print the files in the current folder
fs.readdir(process.cwd(), (error, files) => {
  if (error) throw error;

  console.log(files);
});

// Make directory: Recursive must be true to create nested folders
fs.mkdir(
  `${process.cwd()}/folder/secondFolder/`,
  { recursive: true },
  (error) => {
    if (error) throw error;

    console.log("Folder created");
  }
);

// Remove directories: Recursive for nested folders
fs.rm(`${process.cwd()}/folder/`, { recursive: true }, (error) => {
  if (error) throw error;

  console.log("Folder deleted");
});

// Rename folder
fs.rename(
  `${process.cwd()}/folder/secondFolder`,
  `${process.cwd()}/folder/anotherFolder`,
  (error) => {
    if (error) throw error;

    console.log("Directory renamed");
  }
);

// Rename file
fs.rename(
  `${process.cwd()}/content.txt`,
  `${process.cwd()}/file.txt`,
  (error) => {
    if (error) throw error;

    console.log("File renamed");
  }
);
