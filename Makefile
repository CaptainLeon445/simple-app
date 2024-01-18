install:
	cd server && npm ci 

test:
	cd server && npm test

build:
	docker build -t simple-app:latest ./server

docker-login:
	echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin "${DOCKER_REGISTRY}"

docker-push:
	docker push "${secrets.DOCKER_REGISTRY}/simple-app"

deploy:
	docker-compose -f docker-compose.yml up --build	