# docker build -f Dockerfile -t smartbank-frontend-module .
# docker tag smartbank-frontend-module jkplayground/smartbank-frontend-module:v1.0.0
# docker push jkplayground/smartbank-frontend-module:v1.0.0
# docker run -p 80:3000 -d jkplayground/smartbank-frontend-module:v1.0.0
# AWS tag
# docker run -d -p 80:3000 --log-driver=awslogs --log-opt awslogs-region=us-west-1 --log-opt awslogs-group=omega-docker --log-opt awslogs-create-group=true --env REACT_APP_API_URL=http://54.219.191.156/ jkplayground/smartbank-frontend-module:v1.0.0

FROM node:alpine

WORKDIR /app

COPY . /app

RUN ["npm","install"]
ENTRYPOINT ["npm"]
CMD ["start"]

EXPOSE 80
