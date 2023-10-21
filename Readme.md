# Hehe_

Hehe_ is a Node.js and Express web application that allows users to upload and download files from a specified folder. Users can easily share and access files within your local network.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine. If not, download and install them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

```shell
git clone https://github.com/AeyKeyZS/Hehe_.git
```

2. Navigate to the project directory:
```shell
cd Hehe_
```

3. Install the required dependencies:
```shell
npm install
```

### Starting the Application

Start the Application
```shell
npm start
```

The application will be available at http://localhost:3000.

## Accessing the Application from Other Devices

1. Determine your local IP address:

    - On Windows: Open Command Prompt and run ipconfig.
    - On macOS or Linux: Open Terminal and run ifconfig or ip a.

2. Find your IPv4 address in the network section (e.g., 192.168.1.x).

3. On other devices connected to the same network, open a web browser and enter the following URL, replacing your-ip-address with the IPv4 address you found in the previous step and 3000 with the port you are running the application on:
```shell
http://your-ip-address:3000
```

For example, if your IPv4 address is 192.168.1.10 and you are running the application on port 3000, you would access the application using:
```shell
http://192.168.1.10:3000
```

Now, others on the same network can access the "Hehe_" application using your local IP address.

### Usage

1. Uploading Files:

    - Visit the web application in your browser.
    - Use the file upload feature to select and upload files to the server.

2. Downloading Files:

    - Explore the list of available files displayed on the web page.
    - Click on a file name to download it to your local machine.

### File Storage

Uploaded files are stored in the 'uploads'' folder within the project directory.

### Dependencies
The application uses the following main dependencies:

- Express.js: for building the web server.
- Multer: for handling file uploads.
- Other necessary dependencies, which are listed in the package.json file.

### Author
Snippetzz - Akshay Kumar Gola

[<img align="left" alt="codeSTACKr | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="codeSTACKr | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]
[<img align="left" alt="codeSTACKr | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]

[linkedin]: https://www.linkedin.com/in/akshay-kumar-gola/
[youtube]: https://www.youtube.com/@amsnippetzz
[instagram]: https://www.instagram.com/snippet.zz/