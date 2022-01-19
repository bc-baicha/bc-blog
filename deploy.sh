rm -rf dist &&
pnpm run build &&
cd dist && 
git init &&
git add . &&
git commit -m 'first commit' &&
git branch -M main &&
git remote add origin git@github.com:bc-baicha/bc-blog-website.git &&
git push -f -u origin main &&
cd -
echo https://bc-baicha.github.io/bc-blog-website/