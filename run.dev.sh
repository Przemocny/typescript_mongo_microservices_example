# docker network create net

cd mjml
npm install
cd ..

cd scrumbot
npm install 
cd ..

docker-compose rm -f
docker volume prune -f
# docker-compose up
docker-compose -f docker-compose.dev.yml up --build