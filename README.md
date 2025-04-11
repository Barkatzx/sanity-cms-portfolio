# Sanity Blog (TypeScript)

This is a modern blog application built with [Sanity](https://www.sanity.io/) as a headless CMS and [Next.js](https://nextjs.org/) as the frontend, developed using [TypeScript](https://www.typescriptlang.org/). The project integrates dynamic content fetching and static generation, allowing you to manage and display blog posts efficiently.

## 🚀 Features

- ⚙️ **Sanity Studio** – Customizable content management system (CMS)
- ⚡ **Next.js Frontend** – Static site generation for fast, SEO-friendly pages
- 🔒 **TypeScript** – Type safety across the codebase
- 📝 **Rich Content** – Support for blog posts with images, categories, and authors
- 📁 **Project Schema** – Add and manage personal or portfolio projects

## Getting Started

To get started with this project, you'll need to set up both the Sanity Studio and the Next.js frontend.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Sanity.io account

### 1. Set Up Sanity Studio

Sanity Studio is the admin interface for managing content. You will need to deploy it first.

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/sanity-blog.git
   cd sanity-blog
   ```

2. Navigate to the `studio` folder and install the dependencies:

   ```bash
   cd studio
   npm install
   ```

3. Configure the Sanity Studio with your project settings by editing `sanity.json` if necessary.

4. Deploy the Sanity Studio:

   ```bash
   sanity deploy
   ```

5. After deployment, you'll receive a URL like `https://your-project-id.sanity.studio`.

### 2. Set Up the Next.js Frontend

1. Navigate to the root of the project (outside the `studio` folder) and install the dependencies:

   ```bash
   cd ..
   npm install
   ```

2. Create a `.env.local` file in the root of the project and add your Sanity project ID and dataset:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. Run the Next.js development server:

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` to see your blog in action.

### 3. Content Management

Once the Sanity Studio is deployed, you can log in to the studio interface and start adding posts, categories, and authors.

- **Posts**: Create and manage your blog posts with rich text, images, and metadata.
- **Categories**: Organize your posts into categories.
- **Authors**: Add author details for each post.

### 4. Build and Deploy the Next.js App

When you're ready to deploy the Next.js app, you can use Vercel or another hosting platform.

1. Run the following command to build your Next.js app:

   ```bash
   npm run build
   ```

2. Deploy it on your preferred hosting platform like [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com).

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Sanity.io (Headless CMS)
- **Deployment**: Vercel (for the Next.js app), Sanity Hosting (for the Studio)
- **Styling**: Tailwind CSS (if used)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Notes:

- **Replace** `your-username/sanity-blog` with your actual GitHub username and repository name.
