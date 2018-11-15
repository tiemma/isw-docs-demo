
docker-compose exec docs sh -c "rm -r /app/source/build; cd .. && bundle exec middleman build; mv /app/build/ /app/source"

git add *

git commit -am "Added new changes"

cd .. && git subtree push --prefix slate-docker/build origin gh-pages