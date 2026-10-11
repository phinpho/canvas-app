# Development Decisions

## Framework, Tools and Libraries

- `typescript`: Part of the exercise requirements, and provides type safety and better developer experience.
- `react`: `Part of the exercise requirements, and is a popular library for building user interfaces.
- `pnpm`: Easier to manage dependencies and faster than npm or yarn.
- `@base-ui/react`: Based on a customised implementation of the ShadCN components using this library, which is a popular library for building user interfaces.
- `tailwindcss`: Based on a customised implementation of the ShadCN components using this library, which is a popular library for building user interfaces.
- `babylonjs`: I already have some familiarity with this library to build 3D scenes, and it is a powerful and well-documented library for 3D rendering in the browser.
- `konva`: An open-source 2D canvas library that provides a simple API for handling infinite canvas, and it is well-suited for building interactive applications with complex graphics.
  - `react-konva`: A React wrapper for Konva, which allows for easier integration with React components and state management.
  - `konva-utils`: Convenient utilities to embed HTML elements into Konva canvas, which is useful for embedding 3D models and other HTML elements into the infinite canvas.
- `vite`: I already have some familiarity with this tool to build and bundle the web applications, and it is a fast and modern build tool that provides a great developer experience.
  - `vite-plugin-pwa`: In order to provide an offline experience for the application, I decided to use this plugin to generate a service worker and manifest file for the PWA.
- `@biomejs/biome`: Easier to
- `dexie`: I already have some familiarity with this library to manage the local database, I decided to use it to provide a simple offline experience for the application, and it is a well-documented and widely used library for IndexedDB management.
  - `dexie-react-hooks`: Because the application is built with React, this library provides convenient hooks to manage the Dexie database and reactively update the UI when the data changes.

## Development Steps

### 1. Infinite Canvas Experimentation

As part of the development process, I dedicated some time to experiment an implementation of the infinite canvas from scratch, without using a library to handle the canvas rendering and interactions.
In order to save time and focus on the main features of the application, I decided to investigate available libraries that could help me to implement the infinite canvas. The main criteria for selecting a library were:

- Open-source and actively maintained
- Good documentation and community support
- Easy to integrate with React and TypeScript
- Customisable with the ability to embed HTML elements into the canvas

I found that [Konva](https://konvajs.org/) met all the criteria in conjunction with [react-konva](https://konvajs.org/docs/react/index.html) and [konva-utils](

### 2. Dexie Database Integration

I decided to use Dexie to manage the local database for the application, as it provides a simple and efficient way to store and retrieve data in the browser. I used the `dexie-react-hooks` library to integrate Dexie with React, which allows me to easily manage the database state and reactively update the UI when the data changes.

The database schema was designed as follows:

- **Documents**: Store the documents created by the user
- **Comments**: Store the document comments created by the user, which are associated with a specific document
- **CommentThreads**: Store the comment threads created by the user, which are associated with a specific comment and document
- **Objects**: Store the document objects created by the user, which are associated with a specific document, at the moment, the possible object types are "card" and "3D scene", but the objects can be extended in the future to support other types, such as images, arrows, and other shapes.

##### 2.1 Mutations and Queries

As the project is mainly focused on the front-end, I decided to implement the mutations as functions that directly interact with the Dexie database, with the required parameters to perform the necessary operations. The queries are implemented as hooks that return the data, and some of them returns the
state of the data query, to perform loading and error handling in the UI.

### 3. 3D Scene Integration

I decided to use Babylon.js to implement the 3D scene feature, but the usage is not very explored for this execercise, as the main focus is on the infinite canvas and the comments feature. To embed the 3D scene into the Konva canvas, I used the `konva-utils` library, which provides a convenient way to embed HTML elements into the canvas. The 3D scene is rendered in a separate HTML element, which is positioned and scaled according to the canvas coordinates.

### 4. UI

The UI is built using a boilerplate based on a customised implementation of the ShadCN components using `@base-ui/react` and `tailwindcss`. The PWA integration is also part of my sample boilerplate.

#### 4.1 Worker

In order to take advantage of the multi-threading capabilities of the browser, I decided to implement a web worker to handle a simple task of updating the canvas objects positions and sizes. More features can be added to the worker in the future, such as handling the 3D scene rendering and other heavy tasks.

## Future Considerations

- **Performance Optimizations**: As the application grows, I may need to implement performance optimizations, such as virtualizing the canvas or implementing lazy loading for 3D models and other assets.

- **Accessibility**: I will need to ensure that the application is accessible to all users, including those with disabilities. This may involve implementing keyboard navigation, screen reader support, and other accessibility features.

- **Testing**: I will need to implement a comprehensive testing strategy, including unit tests, integration tests, and end-to-end tests, to ensure the application is reliable and maintainable.

- **Split of Concerns**: As the application grows, I may need to refactor the codebase to separate concerns and improve maintainability. This may involve creating separate modules for different features, implementing a state management solution, perhaps with a library like Zustand, and improving the overall architecture of the application.

- **Authoring Features**: In order to provide a better experience for users for creating, editing, alone or collaboratively, with features like versioning, undo/redo, and real-time collaboration, I would suggest to use the [Yjs](https://yjs.dev) library, which is a powerful, well-documented, and easy-to-integrate with Dexie.
