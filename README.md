# Bigspring-light - Official Strapi Demo (Astro)

Welcome to **Bigspring-light**, the official Strapi demo application! This project showcases Strapi's capabilities with an Astro frontend.

## 🚀 Get Started

This guide will walk you through the setup process for Bigspring-light.

## 🛠 Prerequisites

Before launching, set up the required environment variables for Strapi and Astro.

### Strapi (`./strapi/.env.example`)

- `STRAPI_ADMIN_CLIENT_URL=<url-of-astro>`
- `STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=<a-random-token>`

Create a `./strapi/.env` file with these variables.

### Astro (`./astro/.env.sample`)

- `STRAPI_URL=<url-of-strapi>` (mandatory)

Create a `./astro/.env` file with these variables.

## 🔧 Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/strapi/bigspring-astro-strapi.git
cd bigspring-astro-strapi
```

### 2. Start Strapi

Navigate to the Strapi folder:

```sh
cd strapi
```

Run the following command to install dependencies, seed data, and start the server:

```sh
yarn && yarn seed && yarn develop
```

### 3. Start Astro

Navigate to the Astro folder:

```sh
cd ../astro
```

Run the following command to install dependencies and start the development server:

```sh
yarn && yarn dev
```

## ✨ Features Overview

### User Features

- **Minimal, intuitive editor** - Dynamic content blocks, fully extensible.
- **Media Library** - Upload, crop, and optimize images and videos.
- **Flexible content management** - Define categories, formats, and workflows.
- **Sorting & Filtering** - Manage large datasets effortlessly.
- **User-friendly interface** - One of the best open-source CMS UIs.
- **SEO optimization** - Manage metadata and optimize media assets.

### Global Features

- **[Customizable API](https://strapi.io/features/customizable-api)** - Auto-generate REST or GraphQL APIs.
- **[Media Library](https://strapi.io/features/media-library)** - Centralized file storage and management.
- **[Role-Based Access Control (RBAC)](https://strapi.io/features/custom-roles-and-permissions)** - Granular user permissions.
- **[Audit Logs](https://strapi.io/blog/reasons-and-best-practices-for-using-audit-logs-in-your-application)** - Track user activity.
- **[Data Transfer](https://strapi.io/blog/importing-exporting-and-transferring-data-with-the-strapi-cli)** - Migrate data between Strapi instances.
- **[Review Workflows](https://docs.strapi.io/user-docs/settings/review-workflows)** - Streamlined content approval process.

## 📚 Resources

- [Docs](https://docs.strapi.io)
- [Demo](https://strapi.io/demo)
- [Forum](https://forum.strapi.io/)
- [Discord](https://discord.strapi.io)
- [YouTube](https://www.youtube.com/c/Strapi/featured)
- [Strapi Design System](https://design-system.strapi.io/)
- [Marketplace](https://market.strapi.io/)
- [Cloud Free Trial](https://cloud.strapi.io)

## 🔧 Customization

- **Custom Population Middleware** - Located in `./strapi/src/middlewares/deepPopulate.ts` to populate additional data.
- **Post-install Script** - Generates a unique project UUID for anonymous usage analytics (can be disabled in `./strapi/demo.json`).
- **Admin Package Patch** - Necessary for hosted demos to auto-create Super Admin users.

Enjoy exploring **Bigspring-light** and experience Strapi’s full potential! 🚀

