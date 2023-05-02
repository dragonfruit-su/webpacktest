import foo from './foo.js';
import * as Sentry from "@sentry/browser";

Sentry.init({
    dsn: "https://2ba2f2af23064f429fc9e3b44dc1ad8c@o1420511.ingest.sentry.io/4504287436734464",
    release: "webpack@1.0.0",
});

foo();