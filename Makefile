run:
	docker-compose up -d --build api
test:
	docker-compose up --build test
build:
	docker-compose build

clean:
	docker-compose down

restart:
	docker-compose restart

fresh:
	make clean
	make run

rebuild:
	make clean
	make build
	make run
