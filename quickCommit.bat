ECHO OFF
ECHO Commit Message: %1
git add .
git commit -m %1
git push origin
git push production master