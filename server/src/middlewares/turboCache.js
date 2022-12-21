import getExpeditiousCache from 'express-expeditious';
import expeditiousMemoryEngine from 'expeditious-engine-memory';

const defaultOptions = {
    namespace: 'expresscache',
    engine: expeditiousMemoryEngine(),
    defaultTtl: '5 minute',
    statusCodeExpires: {
        404: '5 minutes',
        500: 0,
    },
};

const cacheInit = getExpeditiousCache(defaultOptions);

export { cacheInit };
