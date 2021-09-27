to change git url after clone:
first, add new git url , git remote set-url --add origin ${newUrl}
secon, delete the static-web-starter git url , git remote  set-url --delete origin https://github.com/ttngocthao/static-web-starter.git
finally, check if the git remote url has successfully changed, git remote -v.
