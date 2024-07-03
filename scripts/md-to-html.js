const showdown = require("showdown");
const converter = new showdown.Converter();
converter.setOption("tables", true);
converter.setOption("emoji", true);
converter.setOption("underline", true);
converter.setOption("requireSpaceBeforeHeadingText", true);
converter.setOption("tasklists", true);
converter.setOption("backslashEscapesHTMLTags", true);
converter.setOption("metadata", true);
converter.setOption("headerLevelStart", 2);

const fs = require("fs");
const path = require("path");
const basePath = "./blogs/";
const outPath = "./src/blogs/";
var allBlogs;
try {
  allBlogs = fs.readdirSync(basePath);
} catch (err) {
  console.error(err);
  process.exit(-1);
}

var template = fs.readFileSync("./scripts/index-page.jsx");

allBlogs.forEach((blog) => {
  var blogTemplate = template.toString();
  var blogBasePath = basePath + blog + "/";
  var blogContentPath = blogBasePath + "content.md";
  console.log("Converting " + blogContentPath + " to site");
  var blogContentText = fs.readFileSync(blogContentPath, "utf8");
  var blogContentHTML = converter.makeHtml(blogContentText);
  var blogContentMeta = converter.getMetadata();
  blogTemplate = blogTemplate.replaceAll("|||title|||", blogContentMeta.title);
  blogTemplate = blogTemplate.replace("|||content|||", blogContentHTML);
  try {
    var blogSitePath = outPath + blog + "/index-page.jsx";
    const directory = path.dirname(blogSitePath);
    if (!fs.existsSync(directory)) {
      console.log("Making directory");
      fs.mkdirSync(directory, { recursive: true });
    }
    console.log("Writing site content to " + blogSitePath);
    fs.writeFileSync(blogSitePath, blogTemplate);
  } catch (error) {
    console.error({
      blog,
      basePath,
      outPath,
      blogBasePath,
      blogSitePath,
      blogContentText,
    });
    console.error(error);
  }
  console.log();
});
console.log("done");
