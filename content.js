// content.js
const mappings = [
  // Folders
  { pattern: /^(util|utils)$/i, icon: "util.svg" },
  { pattern: /^src$/i, icon: "source.svg" },
  { pattern: /^public$/i, icon: "public.svg" },
  { pattern: /^(test|tests|__tests__)$/i, icon: "public.svg" },
  { pattern: /^(doc|docs)$/i, icon: "public.svg" },
  { pattern: /^(component|components)$/i, icon: "source.svg" },
  { pattern: /^(asset|assets)$/i, icon: "source.svg" },
  { pattern: /^(image|images|img)$/i, icon: "public.svg" },
  { pattern: /^(style|styles|css)$/i, icon: "public.svg" },
  { pattern: /^dist$/i, icon: "public.svg" },
  { pattern: /^build$/i, icon: "source.svg" },

  // Web Technologies
  { pattern: /\.html?$/i, icon: "html.svg" },
  { pattern: /\.css$/i, icon: "css.svg" },
  { pattern: /\.scss$/i, icon: "sass.svg" },
  { pattern: /\.less$/i, icon: "less.svg" },
  { pattern: /\.styl$/i, icon: "stylus.svg" },

  // JavaScript/TypeScript
  { pattern: /\.js$/i, icon: "javascript.svg" },
  { pattern: /\.ts$/i, icon: "typescript.svg" },
  { pattern: /\.mjs$/i, icon: "esmodule.svg" },
  { pattern: /\.cjs$/i, icon: "javascript.svg" },

  // Frontend Frameworks
  { pattern: /\.(jsx|tsx)$/i, icon: "react.svg" },
  { pattern: /\.vue$/i, icon: "vue.svg" },
  { pattern: /\.svelte$/i, icon: "svelte.svg" },
  { pattern: /\.(component|module|service)\.ts$/i, icon: "angular.svg" },
  { pattern: /\.angular-cli\.json$/i, icon: "angular.svg" },
  { pattern: /^angular\.json$/i, icon: "angular.svg" },

  // Backend Technologies
  { pattern: /\.java$/i, icon: "java.svg" },
  { pattern: /\.cs$/i, icon: "csharp.svg" },
  { pattern: /\.fs$/i, icon: "fsharp.svg" },
  { pattern: /\.py$/i, icon: "python.svg" },
  { pattern: /\.rb$/i, icon: "ruby.svg" },
  { pattern: /\.php$/i, icon: "php.svg" },
  { pattern: /\.go$/i, icon: "golang.svg" },
  { pattern: /\.rs$/i, icon: "rust.svg" },

  // Configuration Files
  { pattern: /^\.env(\.|$)/i, icon: "env.svg" },
  { pattern: /\.(yaml|yml)$/i, icon: "yaml.svg" },
  { pattern: /\.toml$/i, icon: "toml.svg" },
  { pattern: /\.ini$/i, icon: "ini.svg" },
  { pattern: /\.conf$/i, icon: "conf.svg" },

  // Docker Related
  { pattern: /^Dockerfile$/i, icon: "docker.svg" },
  { pattern: /^docker-compose\.ya?ml$/i, icon: "docker-compose.svg" },
  { pattern: /\.dockerignore$/i, icon: "docker.svg" },

  // .NET Related
  { pattern: /\.sln$/i, icon: "visual-studio.svg" },
  { pattern: /\.csproj$/i, icon: "dotnet.svg" },
  { pattern: /\.fsproj$/i, icon: "fsharp.svg" },
  { pattern: /\.vbproj$/i, icon: "vb.svg" },
  { pattern: /\.props$/i, icon: "dotnet.svg" },
  { pattern: /\.targets$/i, icon: "dotnet.svg" },

  // Spring Boot
  { pattern: /^application\.(properties|ya?ml)$/i, icon: "spring.svg" },
  { pattern: /^bootstrap\.(properties|ya?ml)$/i, icon: "spring.svg" },
  { pattern: /^pom\.xml$/i, icon: "maven.svg" },
  { pattern: /^build\.gradle(\.kts)?$/i, icon: "gradle.svg" },

  // Package Managers
  { pattern: /^package\.json$/i, icon: "npm.svg" },
  { pattern: /^package-lock\.json$/i, icon: "npm.svg" },
  { pattern: /^yarn\.lock$/i, icon: "yarn.svg" },
  { pattern: /^pnpm-lock\.yaml$/i, icon: "pnpm.svg" },
  { pattern: /^composer\.json$/i, icon: "composer.svg" },
  { pattern: /^Gemfile$/i, icon: "ruby.svg" },
  { pattern: /^requirements\.txt$/i, icon: "python.svg" },
  { pattern: /^Cargo\.toml$/i, icon: "rust.svg" },

  // Documentation
  { pattern: /\.(md|markdown)$/i, icon: "markdown.svg" },
  { pattern: /\.(rst|rest)$/i, icon: "restructuredtext.svg" },
  { pattern: /\.txt$/i, icon: "text.svg" },
  { pattern: /^README(\.|$)/i, icon: "readme.svg" },
  { pattern: /^CHANGELOG(\.|$)/i, icon: "changelog.svg" },
  { pattern: /^LICENSE(\.|$)/i, icon: "license.svg" },

  // Version Control
  { pattern: /^\.gitignore$/i, icon: "git.svg" },
  { pattern: /^\.gitattributes$/i, icon: "git.svg" },
  { pattern: /^\.gitmodules$/i, icon: "git.svg" },
  { pattern: /^\.git(keep|empty)$/i, icon: "git.svg" },

  // Linters & Formatters
  { pattern: /^\.eslintrc(\.|$)/i, icon: "eslint.svg" },
  { pattern: /^\.prettierrc(\.|$)/i, icon: "prettier.svg" },
  { pattern: /^\.stylelintrc(\.|$)/i, icon: "stylelint.svg" },
  { pattern: /^\.editorconfig$/i, icon: "editorconfig.svg" },

  // Build Tools & Bundlers
  { pattern: /^webpack\.config\./i, icon: "webpack.svg" },
  { pattern: /^rollup\.config\./i, icon: "rollup.svg" },
  { pattern: /^vite\.config\./i, icon: "vite.svg" },
  { pattern: /^babel\.config\./i, icon: "babel.svg" },
  { pattern: /^tsconfig\.json$/i, icon: "typescript.svg" },

  // Testing
  { pattern: /\.test\.(js|ts|jsx|tsx)$/i, icon: "test-js.svg" },
  { pattern: /\.spec\.(js|ts|jsx|tsx)$/i, icon: "test-js.svg" },
  { pattern: /\.test\.py$/i, icon: "test-python.svg" },
  { pattern: /\.spec\.rb$/i, icon: "test-ruby.svg" },

  // Database
  { pattern: /\.(sql|mysql|postgresql)$/i, icon: "database.svg" },
  { pattern: /\.mongodb$/i, icon: "mongodb.svg" },
  { pattern: /\.redis$/i, icon: "redis.svg" },

  // Images
  { pattern: /\.(jpg|jpeg|png|gif|bmp)$/i, icon: "image.svg" },
  { pattern: /\.svg$/i, icon: "svg.svg" },
  { pattern: /\.(ico|icns)$/i, icon: "favicon.svg" },

  // Others
  { pattern: /^Makefile$/i, icon: "makefile.svg" },
  { pattern: /^Jenkinsfile$/i, icon: "jenkins.svg" },
  { pattern: /\.pdf$/i, icon: "pdf.svg" },
  { pattern: /\.(zip|rar|7z|tar|gz)$/i, icon: "archive.svg" }
];


// Pre-load icons to ensure they're available
const iconCache = new Map();

async function preloadIcons() {
  for (const mapping of mappings) {
    const url = chrome.runtime.getURL(`icons/${mapping.icon}`);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      iconCache.set(mapping.icon, URL.createObjectURL(blob));
    } catch (error) {
      console.error(`Failed to load icon: ${mapping.icon}`, error);
    }
  }
  // Load default icon
  try {
    const defaultUrl = chrome.runtime.getURL('icons/default.svg');
    const response = await fetch(defaultUrl);
    const blob = await response.blob();
    iconCache.set('default.svg', URL.createObjectURL(blob));
  } catch (error) {
    console.error('Failed to load default icon', error);
  }
}

const style = document.createElement("style");
style.textContent = `
.ghfi-icon {
  width: 16px !important;
  height: 16px !important;
  margin-right: 4px !important;
  vertical-align: text-bottom !important;
  display: inline-block !important;}
`;
document.head.appendChild(style);

async function updateRow(row) {
  // Skip if this is the parent directory row
  //
  console.log("inside updateRow");
  if (row.querySelector('[data-testid="up-tree"]')) return;
  
  // Skip "View all files" row
  if (row.classList.contains('d-none')) return;
  console.log("inside updateRow 2");

  // Find the filename link
  const fileNameCell = row.querySelector(".react-directory-filename-cell");
  if (!fileNameCell) return;
  console.log("inside updateRow 3");

  const link = fileNameCell.querySelector("a.Link--primary");
  if (!link) return;
  
  console.log("inside updateRow 4");
  const fileName = link.textContent.trim();

  // Find the icon container
//  const svg = row.querySelector(".react-directory-filename-column svg.octicon");
  // Find both mobile and desktop icon containers
  const mobileContainer = row.querySelector(".react-directory-row-name-cell-small-screen .react-directory-filename-column svg");
  const desktopContainer = row.querySelector(".react-directory-row-name-cell-large-screen .react-directory-filename-column svg");

  if (row.querySelector("img.ghfi-icon")) return;

  console.log("inside updateRow 5");
  // Pick an icon based on the filename
  const mapping = mappings.find(m => m.pattern.test(fileName));
  const iconName = mapping ? mapping.icon : 'default.svg';
  
  // Get cached icon URL
  const iconUrl = iconCache.get(iconName);
  if (!iconUrl) return;

  console.log("inside updateRow 6",iconName, iconUrl);
  // Create and insert the new icon
  //const img = document.createElement("img");
  //img.src = iconUrl;
  //img.className = "ghfi-icon";
    // Create and insert the new icons for both views
  if (mobileContainer) {
    const mobileImg = document.createElement("img");
    mobileImg.src = iconUrl;
    mobileImg.className = "ghfi-icon";
    mobileContainer.replaceWith(mobileImg);
  }

  if (desktopContainer) {
    const desktopImg = document.createElement("img");
    desktopImg.src = iconUrl;
    desktopImg.className = "ghfi-icon";
    desktopContainer.replaceWith(desktopImg);
  }
  /*
  svg.replaceWith(img);
  console.log("updated svg" , svg);

*/
   // Instead of replaceWith, try removing and inserting
  /*
  try {
    const parent = svg.parentElement;
    parent.insertBefore(img, svg);
    console.log(parent);
    console.log(img);
    svg.remove();
    console.log("Icon replaced for", fileName);
  } catch (error) {
    console.error("Error replacing icon:", error);
  }
  */
}

async function replaceIcons() {
  // Find all directory rows
  const rows = document.querySelectorAll(".react-directory-row");
  if (rows.length === 0) return;

  for (const row of rows) {
    await updateRow(row);
  }
}

// Initialize extension
async function initialize() {
  // First load all icons
  await preloadIcons();
  
  // Initial replacement
  await replaceIcons();

  // Watch for page changes
  const observer = new MutationObserver((mutations) => {
    const shouldUpdate = mutations.some(mutation => 
      Array.from(mutation.addedNodes).some(node => 
        node.classList?.contains('react-directory-row')
      )
    );
    
    if (shouldUpdate) {
      replaceIcons();
    }
  });

  // Observe changes to the document body
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Start the extension
initialize();

// Also try after a short delay (for dynamic loading)
setTimeout(() => replaceIcons(), 1000);

// content.js
//
//
//
/*
const mappings = [
  { pattern: /^(util|utils)$/i, icon: "icons/util.svg" },
  { pattern: /^Dockerfile$/i, icon: "icons/docker.svg" },
  { pattern: /\.(jsx|tsx)$/i, icon: "icons/react.svg" }
  // add more rules here
];

// Inject simple style for our injected <img> icons
const style = document.createElement("style");
style.textContent = `
  .ghfi-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
  }
`;
document.head.append(style);
console.log("hi from the extension");



function updateRow(row) {
  // Skip if this is the parent directory row
  if (row.querySelector('[data-testid="up-tree"]')) return;
  
  // Skip "View all files" row
  if (row.classList.contains('d-none')) return;

  // Find the filename link - checking both mobile and desktop views
  const fileNameCell = row.querySelector(
    ".react-directory-filename-cell"
  );
  if (!fileNameCell) return;

  const link = fileNameCell.querySelector("a.Link--primary");
  if (!link) return;
  
  const fileName = link.textContent.trim();

  // Find the icon container
  const svg = row.querySelector(".react-directory-filename-column svg.octicon");
  if (!svg || row.querySelector("img.ghfi-icon")) return;

  // Pick an icon based on the filename
  const mapping = mappings.find(m => m.pattern.test(fileName));
  const iconPath = mapping ? mapping.icon : "icons/default.svg";

  // Create and insert the new icon
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL(iconPath);
  img.className = "ghfi-icon";
  svg.replaceWith(img);

}



function replaceIcons() {
  // Find all directory rows
  const rows = document.querySelectorAll(".react-directory-row");
  if (rows.length === 0) return;

  rows.forEach(updateRow);
}

// Watch for page changes
const observer = new MutationObserver((mutations) => {
  // Check if any mutation added new directory rows
  const shouldUpdate = mutations.some(mutation => 
    Array.from(mutation.addedNodes).some(node => 
      node.classList?.contains('react-directory-row')
    )
  );
  
  if (shouldUpdate) {
    replaceIcons();
  }
});


// Observe changes to the document body
observer.observe(document.body, {
  childList: true,
  subtree: true
});


// Initial replacement
replaceIcons();


// Also try after a short delay (for dynamic loading)
setTimeout(replaceIcons, 1000);
*/
