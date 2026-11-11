#!/bin/sh
# Publish ./out to the gh-pages branch as a single fresh commit.
set -e
REMOTE=$(git config --get remote.origin.url)
SHA=$(git rev-parse --short HEAD)
cd out
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C .. config user.name)" -c user.email="$(git -C .. config user.email)" commit -q -m "Deploy $SHA"
git push -f -q "$REMOTE" gh-pages
rm -rf .git
echo "Deployed $SHA to gh-pages"
