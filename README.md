## NEOLYNK DEMO
Check out the live [demo](https://neolynk-demo.web.app).

* **To run the app locally**
1. Install dependencies using by typing: `yarn` or `npm install`
2. Run the app with `yarn start` or `npm start`
3. You should be able to see the app working at http://localhost:3000

* **To run the app on a docker container**
1. Make sue you have _Docker_ and _Docker-compose_ installed
2. Run `docker-compose up`
3. This should run the container. You will be able to see the app running at http://localhost:3000

* **To run the tests**
1. Execute `yarn test` or `npm run test`

* **Building for production**
1. Run `yarn build --production` or `npm run build --production`
2. This should build the app. Generated build files can be found under __/build__ folder.

* **Deployment and Firebase Hosting service**
This app uses Github CI for automatic deployment. Once a PR is merged with the main brnach, the CI workflow will execute necessary steps and deploy the app to Firebase Hosting.

* **Side note**
> It is worth noting that this app relies on a simple Firebase API that exposes the following endpoints.

| Endpoint                   | Method            | Description         |
| -------------------------- |:-----------------:| ------------------: |
| /messages?filter=[filter]  | `GET` | filter is one of `['all', 'public', 'private']`               |
| /messages                  | `POST`            | Accepts a json paylaod with message details             |
