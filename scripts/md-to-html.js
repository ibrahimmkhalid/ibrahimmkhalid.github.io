const showdown = require("showdown");
const fs = require("fs");
const path = require("path");

const basePath = "./blogs/";
const outPath = "./src/blogs/";

var unescapeStuff = [
  {
    type: "output",
    regex: new RegExp(`&lt;`, "g"),
    replace: `<`,
  },
  {
    type: "output",
    regex: new RegExp(`&gt;`, "g"),
    replace: `>`,
  },
  {
    type: "output",
    regex: new RegExp(`&amp;`, "g"),
    replace: `&`,
  },
  {
    type: "output",
    regex: new RegExp(`\``, "g"),
    replace: `\\\``,
  },
];

const converter = new showdown.Converter({
  extensions: [...unescapeStuff],
});

converter.setOption("tables", true);
converter.setOption("emoji", true);
converter.setOption("underline", true);
converter.setOption("requireSpaceBeforeHeadingText", true);
converter.setOption("tasklists", true);
converter.setOption("backslashEscapesHTMLTags", true);
converter.setOption("metadata", true);
converter.setOption("headerLevelStart", 2);

var allBlogs;
try {
  allBlogs = fs.readdirSync(basePath);
} catch (err) {
  console.error(err);
  process.exit(-1);
}

var template = fs.readFileSync("./scripts/index-page.jsx");
var elements = [
  { from: "<a", to: '<a className="underline hover:text-blue-800"' },
  { from: "<blockquote", to: '<blockquote className="bg-gray-100 border-l-black border-l-4 pl-10 py-1"' },
  { from: "<h2", to: '<h2 className="text-3xl font-bold underline my-2"' },
  { from: "<h3", to: '<h3 className="text-3xl font-bold underline my-2"' },
  { from: "<h4", to: '<h4 className="text-2xl underline my-1"' },
  { from: "<hr ", to: '<hr className="h-1 my-4 bg-gray-100 border-0 rounded"' },
  { from: "<ol", to: '<ol className="list-decimal"' },
  { from: "<p>", to: '<p className="pt-3">' },
  {
    from: "<pre",
    to: '<pre className="bg-gray-100 border-1 border border-black p-1 block whitespace-pre overflow-x-scroll"',
  },
  { from: "><code>", to: "><code  >{`" },
  { from: "</code><", to: "`}</code  ><" },
  { from: "<code>", to: '<code className="px-1 border border-black bg-gray-100">{`' },
  { from: "</code>", to: "`}</code>" },
  { from: "<strong", to: '<strong className="font-bold"' },
  { from: "<ul", to: '<ul className="list-disc"' },
];

allBlogs.forEach((blog) => {
  var blogSitePath = outPath + blog + "/index-page.jsx";
  if (fs.existsSync(blogSitePath)) {
    if (process.argv[2] != blog) {
      console.log("Blog " + blog + " already exists");
      return;
    }
  }
  var blogTemplate = template.toString();
  var blogBasePath = basePath + blog + "/";
  var blogContentPath = blogBasePath + "content.md";
  console.log("Converting " + blogContentPath + " to site");
  var blogContentText = fs.readFileSync(blogContentPath, "utf8");
  var blogContentHTML = converter.makeHtml(blogContentText);
  var blogContentMeta = converter.getMetadata();
  blogTemplate = blogTemplate.replaceAll("|||title|||", blogContentMeta.title);
  blogTemplate = blogTemplate.replace("|||content|||", blogContentHTML);
  elements.forEach((element) => {
    blogTemplate = blogTemplate.replaceAll(element.from, element.to);
  });
  try {
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
