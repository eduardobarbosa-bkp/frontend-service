# Room frontend (Angular application) - Eduardo Barbosa da Costa

***Setup***
* docker, kubernetes and angular-cli;

***Run***
* On the command line on the project root:

1. *ng build -prod*
2. *docker build . -t eduardobarbosa/app-frontend:1.0*
3. *docker-compose up -d*
4. *docker network connect jwtservice_default app-frontend*
5. *docker network connect roomservice_default app-frontend*
6. *docker restart app-frontend*
The endpoints will be available in: http://<docker host>:80

* On kubernetes
3. *kubectl create -f .*
The endpoints will be available in: http://<cluster IP>:80


