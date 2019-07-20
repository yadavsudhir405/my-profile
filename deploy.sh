#!/usr/bin/env bash

echo "Creating generated directory"
mkdir generated
chmod -R 777 generated
TAG=${1}
ENVIRONMENT=${2}
PORT=${3}
export BUILD_NUMBER=${TAG}
export BUILD_ENV=${ENVIRONMENT}
export PORT_NUMBER=${PORT}
for f in deployment/*.yml
do
 envsubst < $f > "generated/$(basename $f)"
done
kubectl apply -f ./generated
