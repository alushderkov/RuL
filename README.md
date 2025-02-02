# RuL – Educational Platform for the Russian Language

## About
**RuL** is a convenient and modern tool for learning the Russian language, designed specifically for students and applicants. The platform combines theoretical materials with interactive tests, allowing users to effectively reinforce their knowledge and prepare for exams.

## Project Status
- Project completed 🎓
- Ready for use 🍴
- Possible future improvements 🏹

## Key Features
- Comprehensive theoretical materials on key aspects of the Russian language
- Interactive tests with automatic answer validation
- User-friendly interface for comfortable learning
- Easy expansion and addition of new topics

## Technologies Used
### Client Side:
- **HTML, CSS, JavaScript** – for building the interface

### Server Side:
- **Node.js** – for managing server logic
- **Express.js** – for request routing
- **JSON** – for storing test and theoretical data

## Project Structure
```
🗀 client                    # Client-side files
🗀 layout
 ┣ 🗀 pages                   # Sections with theory and tests

🗀 server
 ┣ 🗎 app.js                  # Main server file
 ┣ 🗎 controller.js            # Request handling logic
 ┣ 🗎 materialsParams.js       # Test data processor
 ┣ 🗎 router.js                # Route definitions
 ┣ 🗎 startServer.js           # Server startup

🗎 Materials.json              # Theoretical materials and test data
🗎 package.json                 # Project dependencies
🗎 .gitignore                   # Git exclusions
```

## Installation and Launch
### Installing dependencies:
```sh
npm install
```
### Starting the development server:
```sh
node app.js
```

## Conclusion
The **RuL** project has been successfully implemented, providing a convenient tool for learning the Russian language. The platform combines a vast database of theoretical materials with practical exercises, helping users prepare for exams and improve their knowledge in a comfortable environment.

## Contact and Feedback
If you have suggestions or find an issue, please create an issue or contact me.
<br>
###### © 2024 RuL – Educational Platform for the Russian Language
