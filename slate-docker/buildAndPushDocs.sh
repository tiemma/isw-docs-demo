
docker-compose exec docs bundle exec middleman build

cd .. && git subtree push --prefix slate-docker/build origin gh-pages