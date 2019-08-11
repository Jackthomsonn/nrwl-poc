# Quick POC showcasing the use of NRWL Nx to create a monorepo

I created this repo to showcase how simple NRWL nx is to setup & if we were to follow this monorepo approach, it would allow the sharing of interfaces between back-end and front end projects to be easily achieveable & the sharing of ui-components between different front-end projects. Monorepos are known to cause performance issues but nx solves this issue for us by keeping track of what files have changed thus not reloading every project. If dependencies changes, the affected projects will also be updated to reflect. NRWL also comes with a tool called Angular Console which allows us to setup different projects and libraries via an easy to use UI. Check it out at https://angularconsole.com/

## How to run front-end application
```
cd nrwl-poc
ng serve test-poc-ui
```

## How to run back-end application 
```
cd nrwl-poc
ng serve test-poc-backend
```

Check our NRWL nx over on https://nx.dev/angular