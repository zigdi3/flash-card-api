import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';

const url = `https://flashcard-crm.onrender.com/api-docs/`; // Replace with your Render URL
const interval = 300000; // Interval in milliseconds (5 minutes)

@Injectable()
export class SpinUpService implements OnModuleInit {
  onModuleInit() {
    setInterval(this.reloadWebsite, interval);
  }

  reloadWebsite() {
    axios
      .get(url)
      .then((response) => {
        console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
      })
      .catch((error) => {
        console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
      });
  }
}
