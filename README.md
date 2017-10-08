# Google Image Crawler

This is a Google Image Crawler based on google custom search engine.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

In order to use Google Image Crawler, you must have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)


### Installing

To install the dependencies, enter the following in your terminal:

```
$ cd google-image-crawler
$ npm install
```
### Local Environment Variables

Create a file named `.env` in the root directory. This file should contain:

```
CSE_ID=your-custom-search-engine-id-here
API_KEY=your-api-key-here
```
Wait a little time for installing and finally project is done.

## Running the npm scripts

Here are some npm scripts about Google Image Crawler that I had set for project.

### Starting the App

To start the app, make sure you're in the project directory and use CLI.
Format is below:

```
npm start <to be searched> <page>
```
or
```
npm start <first to be searched> <page> <second to be searched> <page> ...
```

which will create a folder named `downloads` in the root directory and start downloading images that finally save in the folder.

### Delete the images in the `downloads`

Powered by del module, you can delete images folder under the `downloads`.

```
npm run delete
```

which will delete all the folders and images under the `downloads`. Or you can type

```
npm run delete <folder>
```
or
```
npm run delete <folder1> <folder2> ...
```

## Set up Google Custom Search Engine

Google deprecated their public Google Images API, so to search for images you need to sign up for Google Custom Search Engine.
Here are the steps you need to do:

### 1. Create a Google Custom Search Engine

You can do this here: [https://cse.google.com/cse](https://cse.google.com/cse).

Do not specify any sites to search but instead use the "Restrict Pages using Schema.org Types" under the "Advanced options".
For the most inclusive set, use the Schema: `Thing`. Make a note of the CSE ID.

### 2. Enable Image Search

In your search engine settings, enable "Image search":

### 3. Set up a Google Custom Search Engine API

Register a new app and enable Google Custom Search Engine API here: [Google Developers Console](https://console.developers.google.com).
Make a note of the API key.

## Authors

* **游富荃(Fu Chuan Yu)** - [Portfolio](https://luffy84217-portfolio.herokuapp.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
