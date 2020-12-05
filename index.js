import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import { createReadStream } from 'fs';
import crypto from 'crypto';

import appSrc from './app.js';

const app = appSrc(express, bodyParser, createReadStream, crypto, http);
app.listen(process.env.PORT || 4321);

