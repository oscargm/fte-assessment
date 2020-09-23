# frontend technical expert assessment

Status:
![CI](https://github.com/oscargm/fte-assessment/workflows/CI/badge.svg)

React Web application containing a dashboard with patients and configuration table.

## Application includes the following features

- Dev experience
  - eslint
  - prettier
- React application
  - Material-UI
    - Components
    - Theme (CSSinJS)
  - Webpack configuration
    - Dev
    - Prod
- Mock server
- Unit Testing
  - Jest + React testing library
- CI / CD
  - Github workflows
  - Jenkins file example
  - Docker files for mock and frontend
  - Docker-compose using both docker files

## Next Steps

- Create .env files
- Import tokens in js format and use them in the theme
- Cover all the components with unit testing
- Add integration tests with cypress
- Import web components and bind vars and events
- Create GraphQL API
- Duplicate json-server to simulate 2 hospitals
- Redistribute docker containers to suit new mocked backend
- Improve responsiveness of the application

## Start developing

```bash
git clone https://github.com/oscargm/fte-assessment
cd fte-assessment
npm i
npm start
# Test
npm test
# Build
npm run build:dist
```
