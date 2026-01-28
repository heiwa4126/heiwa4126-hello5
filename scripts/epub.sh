#!/usr/bin/env bash
set -euo pipefail

pandoc -f gfm -t epub README.md -o README.epub \
--metadata title='npmモジュール @heiwa4126/hello5 の README' \
--metadata creator="heiwa4126@gmail.com"
