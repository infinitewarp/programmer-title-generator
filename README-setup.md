# Title Generator Project Setup

Rough notes for getting started, building, and deploying...

## first-time setup

npm install -g @angular/cli
ng new titlegen-angular

## bundling for production

ng build --prod --aot

## preview production build

ng serve --prod --aot

## deploying to production

scp ./dist user@host:/path/to/public

