#!/usr/bin/env bash
set -euo pipefail

TAG=$(git describe --tags --abbrev=0)
git tag -d "${TAG}" && git push origin ":refs/tags/${TAG}"
git add --all && git commit -am '[WIP] fix workflow'
git tag  "${TAG}" -m ''  && git push --all --follow-tags
