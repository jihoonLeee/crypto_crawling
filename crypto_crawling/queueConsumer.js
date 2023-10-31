const Queue = require('bull');

const REDIS_CONFIG = {
  host: 'localhost',
  port: 6379,
};
const QUEUE_NAME = 'crawler';

const crawlerQueue = new Queue(QUEUE_NAME, { redis: REDIS_CONFIG });

crawlerQueue.process('crawling_job', async job => {
  console.log('Processing transcode job:', job.data);
  job.finished();
});

module.exports = crawlerQueue;