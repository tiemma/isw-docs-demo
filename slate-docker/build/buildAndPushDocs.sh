
docker-compose exec docs sh -c "bundle exec middleman build && rm -r /app/source/build && mv /app/build/ /app/source"

git add *

git commit -am "Added new changes"

cd .. && git subtree push --prefix slate-docker/build origin gh-pages