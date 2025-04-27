# GitHub File Icons

A Chrome extension that enhances GitHub's file browser by adding distinctive icons for different file types and folders, making repository navigation more intuitive and visually appealing.

![GitHub File Icons Demo](path-to-demo-image.gif)

## Features

- Custom icons for various file types, folders, and common development files
- Support for multiple programming languages and frameworks
- Automatic icon updates when navigating GitHub repositories
- Offline functionality - no external dependencies
- Lightweight and fast performance

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/github-file-icons.git
   ```

2. Open Chrome and navigate to:
   ```
   chrome://extensions/
   ```

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the cloned repository folder

5. The extension is now ready to use! Visit any GitHub repository to see the icons in action.

## Contributing

We welcome contributions, especially for new file type icons! Here's how you can contribute:

### Adding New Icons

1. Create or prepare your SVG icon:
   - Keep it simple and recognizable
   - Optimize the SVG for web use
   - Ensure the icon is unique and doesn't conflict with existing ones

2. Add your SVG file to the `icons` folder:
   ```
   icons/
   ├── your-new-icon.svg
   ```

3. Update the mappings array in `content.js`:
   ```javascript
   const mappings = [
     // Add your new mapping here
     { pattern: /\.yourextension$/i, icon: "your-new-icon.svg" },
   ];
   ```

4. Test the changes locally

5. Submit a Pull Request with:
   - The new SVG icon
   - The updated mapping
   - A brief description of what file types your icon represents

### Icon Guidelines

- SVG format only
- 16x16 pixels recommended size
- Minimal design that's clear at small sizes
- Consistent style with existing icons
- Meaningful and recognizable representations

## Supported File Types

- Web Technologies (HTML, CSS, JavaScript, TypeScript)
- Frontend Frameworks (React, Vue, Angular, Svelte)
- Backend Languages (Python, Ruby, PHP, Java, C#, Go, Rust)
- Configuration Files (ENV, YAML, TOML, INI)
- Package Managers (NPM, Yarn, Composer, Cargo)
- Documentation (Markdown, RST, README)
- And many more!

## License

MIT LICENSE

## Acknowledgments

- Thanks to all contributors who have helped add icons and improve the extension
- Inspired by similar file icon implementations in popular code editors

---

For issues, feature requests, or questions, please [open an issue]([link-to-issues](https://github.com/Hari-krishna-tech/github-file-icon/issues)).

Suggestions for improvement:

1. Add a demo GIF/image showing the extension in action
2. Include a complete list of supported file types in a separate document
3. Add badges for version, license, etc.
4. Include troubleshooting section if common issues arise
5. Add contribution guidelines for code style and testing
6. Include a development setup section if there are specific requirements

Would you like me to expand on any of these sections or add additional information?
