m frontend (Angular application) - Eduardo Barbosa da Costa

***Setup***
* docker, kubernetes and angular-cli;

***Run***
#####  On the command line on the project root:

1. *npm install*
2. *ng build -prod*
3. *docker build . -t eduardobarbosa/frontend-service:1.0*
4. *docker-compose up -d*
5. *docker network connect jwtservice_default frontend-service*
6. *docker network connect roomservice_default frontend-service*
7. *docker restart frontend-service*
The endpoints will be available in: http://&lt;docker host&gt;:80

##### On kubernetes
4. *kubectl create -f .*
The endpoints will be available in: http://&lt;cluster IP&gt;:80
