install:
	cd server && npm ci 

test:
	cd server && npm test

build:
	docker build -t simple-app ./server

docker-login:
	echo ${{secrets.DOCKER_PASSWORD}} | docker login -u ${{secrets.DOCKER_USERNAME}} --password-stdin
    # echo ${{ secrets.DOCKER_TOKEN }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin


docker-push:
	docker push ${{secrets.DOCKER_REGISTRY}}/simple-app

deploy:
	docker-compose -f docker-compose.yml up --build	