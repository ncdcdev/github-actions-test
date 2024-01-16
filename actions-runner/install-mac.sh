#!/bin/bash

curl -o actions-runner-osx-arm64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-osx-arm64-2.311.0.tar.gz

echo "fa2f107dbce709807bae014fb3121f5dbe106211b6bbe3484c41e3b30828d6b2  actions-runner-osx-arm64-2.311.0.tar.gz" | shasum -a 256 -c

tar xzf ./actions-runner-osx-arm64-2.311.0.tar.gz

echo "インストールが完了しました"