import { Router, Request, Response } from 'express';
import axios from 'axios';
import * as fs from 'fs';
export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  //res.json([]);
  axios.get('https://api.github.com/users/silverorange/repos')
    .then(response => {
      fs.readFile('./data/repos.json', 'utf8', (err, data) => {
        if (err) {
          res.status(400);
          res.json({
            status: 400,
            message: 'A wild error appeared.',
          })
        } else {
          const existingRepos = JSON.parse(data);
          let merged = [...existingRepos, ...response.data].filter(repo => !repo.fork)
          console.log("Merged: " + merged.length)
          res.status(200);
          res.json(merged)
        }
      })
    })
    .catch(error => {
      res.status(400);
      res.json({
        status: 400,
        message: 'A wild error appeared.',
      })
    })
});
