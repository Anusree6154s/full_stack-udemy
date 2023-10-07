const fileSystem=require("fs");

fileSystem.writeFile("message2.txt", "Hello Again!", (err)=>{
    if (err) throw err;
    console.log("The file has been saved!");
});

fileSystem.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    
    console.log('File contents:', data);
  });

  const newContent = "Hello from Anusree!";

fileSystem.writeFile('message.txt', newContent, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  
  console.log('File updated successfully.');
});