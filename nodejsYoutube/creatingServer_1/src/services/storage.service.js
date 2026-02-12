const ImageKit = require("@imagekit/nodejs");
const { model } = require("mongoose");

const imageKit = new ImageKit({
  privateKey : "private_RZX86pjeb3EstydGytVu1kMhNv4="
})



async function uploadFile(buffer) {
  const result = await imageKit.files.upload({
  file: buffer.toString("base64"),
  fileName: 'image.jpg',
});
return result
}


module.exports = uploadFile;