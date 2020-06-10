#! /bin/bash
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPTPATH

cd ./bluro_cms
npm install
cp ../configs/dev_entrypoint.sh ./dev_entrypoint.sh

cd ../tech_overload_blog
npm install
cp ../configs/dev_entrypoint.sh ./dev_entrypoint.sh

cd ../admin_panel
npm install
cp ../configs/dev_entrypoint.sh ./dev_entrypoint.sh

cd ../configs
docker-compose -f docker-compose.base.yml -f docker-compose.dev.yml up