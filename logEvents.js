const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// NPM installed Modules
const { format, getYear } = require('date-fns');
const { v4: uuid } = require('uuid');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize an new emitter object

const myEmitter = new MyEmitter();

myEmitter.on('event', async (event, level, message) => {
    console.log('Enter the event function')
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${level}\t${event}\t${message}\t${uuid()}`;
    console.log(logItem);
    try {
        // Include year when managing log folders
        const currFolder = 'logs/' + getYear(new Date());
        if(!fs.existsSync(path.join(__dirname, 'logs/'))) {
            // if the parent directory logs/ doesn't exist, create it
            await fsPromises.mkdir(path.join(__dirname, 'logs/'));
            if(!fs.existsSync(path.join(__dirname, currFolder))) {
                // create the directory for the year ./logs/yyyy
                await fsPromises.mkdir(path.join(__dirname, currFolder));
            }
        }
        else {
            if(!fs.existsSync(path.join(__dirname, currFolder))) {
                // create the directory for the year ./logs/yyyy
                await fsPromises.mkdir(path.join(__dirname, currFolder));
            }
        }
        // Include todays date in filename
        if(DEBUG) console.log(logItem);
        const fileName = `${format(new Date(), 'yyyyMMdd')}` + '_http_events.log';
        await fsPromises.appendFile(path.join(__dirname, currFolder, fileName), logItem + '\n');
    } catch (err) {
        console.log(err);
    };
  }); 
  
  module.exports = myEmitter
