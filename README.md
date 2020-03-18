# TrainTick

Online ticket booking application. Book tickets anytime, anywhere.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Server Setup](#server-setup)
  - [Client Setup](#client-setup)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Author](#author)
- [License](#license)

## Getting Started

Before starting to install the project, there're some things that need to be done first.

### Prerequisites

Make sure all of these are properly installed in your system.

| Application  | Download                                                                            |
| ------------ | ----------------------------------------------------------------------------------- |
| Git          | [Windows](https://gitforwindows.org/) / [Linux](https://git-scm.com/download/linux) / [Mac](https://git-scm.com/download/mac)  |
| Node.js      | [Link](https://nodejs.org/en/download/)                                             |
| MySQL        | [Link](https://www.mysql.com/downloads/)                                            |

### Installation

First, clone this repository into your system.

```
git clone https://github.com/iprdpta/TrainTick.git
```

Then, install all the packages that described in `package.json` of both `client` and `server` directories.

```
npm install
```

### Client Setup

Before running the application, we need to configure an environtment variable for the client, let's find .env file in client's root project, open and edit it.

```
REACT_APP_BASE_BACKEND_URL=http://localhost:4000
```
Note that the REACT_APP_BASE_BACKEND_URL above is the address of the server previously run, making sure the ip and port are the same with server address.

Then, run the web application.

`npm run start`

Wait till the application is opened into your browser. Now, you can explore Landtick and its features. Enjoy!

## Screenshots

![screencapture-localhost-3000-2020-03-09-13_57_31](https://user-images.githubusercontent.com/59110393/76924165-1c14c700-6908-11ea-99cf-44f34fd7be89.png)
![screencapture-localhost-3000-home-2020-03-09-13_57_07](https://user-images.githubusercontent.com/59110393/76924224-41093a00-6908-11ea-950b-cc4eaf765963.png)
![Opera Snapshot_2020-03-16_130429_localhost](https://user-images.githubusercontent.com/59110393/76924259-5bdbae80-6908-11ea-83e2-39990fd11cfb.png)


## Built With

- [React JS](https://reactjs.org/) - Front-end
- [Express JS](https://expressjs.com) - Back-end
- [MySQL](https://www.mysql.com) - Database

## Author

**Indra Pradipta** - [Indra Pradipta](https://github.com/iprdpta)

## License

This project is licensed under the GNU General Public v3.0 License - see the [LICENSE](LICENSE) file for details
